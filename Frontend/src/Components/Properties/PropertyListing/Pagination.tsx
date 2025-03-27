import { useEffect, useState } from "react"
import { Property } from "../../../dummyData"

import "./Pagination.css"

type Props = {
    properties: Property[],
    setCurrent: React.Dispatch<React.SetStateAction<Property[]>>
}

const Pagination = ({ properties, setCurrent }: Props) => {
    const [currentPage, setCurrentPage] = useState<number>(1)


    const propertiesPerPage = 12
    const totalPages = Math.ceil(properties.length / propertiesPerPage) 

    const cuttingStartIndex = (currentPage - 1) * propertiesPerPage
    const cuttingPerPage = currentPage * propertiesPerPage

    useEffect(() => {
        setCurrent(properties.slice(cuttingStartIndex, cuttingPerPage))
    }, [currentPage, properties])


    const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

    return (
        <div className="pagination">
            <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                {'<'}
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className={currentPage === i + 1 ? "active" : ""}
                >
                    {i + 1}
                </button>
            ))}
            <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                {'>'}
            </button>
        </div>
    )
}

export default Pagination