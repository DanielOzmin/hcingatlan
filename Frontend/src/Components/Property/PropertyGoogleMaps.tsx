import { useEffect, useState } from "react"
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api"
import { geocodeAddress } from "../../Services/geocode"

const containerStyle = {
  width: "100%",
  height: "400px"
}

type Props = {
  city: string
  street: string
  district?: string
}

const PropertyGoogleMaps = ({ city, street, district }: Props) => {
  const [position, setPosition] = useState<{ lat: number, lng: number } | null>(null)

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  })

  useEffect(() => {
    let address = `${street}, ${city}`

    if (city.toLowerCase() === "budapest" && district) {
      address = `${district}, ${street}, ${city}`
    }

    geocodeAddress(address).then((coords) => {
      if (coords) setPosition(coords)
    })
  }, [city, district, street])

  if (!isLoaded || !position) return <div>Loading map...</div>

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={15}>
      <Marker position={position} />
    </GoogleMap>
  )
}

export default PropertyGoogleMaps
