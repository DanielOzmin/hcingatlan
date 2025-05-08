import PropertyCard from "./ProperyCard"
import { useEffect } from "react"
import { Property, fetchProperties } from "../../../Apis"
import { useTranslation } from "react-i18next"

type Props = {
  properties: Property[]
  setProperties: React.Dispatch<React.SetStateAction<Property[]>>
}

const Content = ({ properties, setProperties }: Props) => {
  const { t } = useTranslation()

  useEffect(() => {
    fetchProperties(setProperties)
  }, [])

  const featureProperties = properties.filter((p) => p.featured === true).slice(0, 6)

  return (
    <>
      <h2 className="text-2xl font-bold my-4 text-center">{t("Featured_properties")}</h2>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center p-4">
          {featureProperties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>

      </div>
    </>)
}

export default Content