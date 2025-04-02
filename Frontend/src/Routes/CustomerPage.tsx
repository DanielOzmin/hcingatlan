import { useParams } from "react-router-dom"
import CustomerPageDescription from "../Components/Customer/CustomerPageDescription"
import PropertiesList from "../Components/Properties/PropertyListing/PropertiesList"

const CustomerPage = () => {
    const { id } = useParams()

    

    return (
        <div>
            <CustomerPageDescription />
            <PropertiesList Id={id}/>
        </div>
    )
}

export default CustomerPage