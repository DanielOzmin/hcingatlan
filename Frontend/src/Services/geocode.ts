import axios from "axios"

export const geocodeAddress = async (address: string): Promise<{ lat: number, lng: number } | null> => {
  try {
    const response = await axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
      params: {
        address,
        key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
      }
    })

    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location
      return { lat: location.lat, lng: location.lng }
    }

    console.warn("Geocoding failed:", response.data.status)
    return null

  } catch (error) {
    console.error("Geocoding error:", error)
    return null
  }
}
