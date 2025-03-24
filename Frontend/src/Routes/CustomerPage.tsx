import { useParams } from "react-router-dom"

const CustomerPage = () => {
    const { id } = useParams()
    return (
        <div>{id}</div>
    )
}

export default CustomerPage