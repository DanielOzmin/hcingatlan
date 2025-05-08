import { useNavigate } from "react-router-dom"


import { Employee } from "../../Apis"
import { useTranslation } from "react-i18next"

type Props = {
    employee: Employee
}

const TeamCard = ({ employee }: Props) => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    if (!employee) return

    const handleIntoduceClick = (id: string, name: string) => {
        navigate(`/team/${name}/${id}`)
    }

    const handlePropertiesClick = (employeeId: string) => {
        navigate(`/properties/employee/${employeeId}`)
    }

    return (
        <div className="flex items-center bg-white rounded-[10px] shadow-md p-5 max-w-[600px] h-[180px] border border-[#ddd]">
            <div>
                <img
                    src={employee.img}
                    alt="Customer Image"
                    className="w-[160px] h-[160px] object-cover rounded-[5px] mr-5"
                />
            </div>
            <div className="flex-1 flex flex-col justify-center">
                <h1 className="text-[20px] font-bold m-0">{employee.name}</h1>
                <p className="text-sm text-gray-600 my-1">{employee.position}</p>
                <div className="flex flex-col gap-[5px]">
                    <div className="flex items-center">
                        <label className="font-bold mr-1">{t("Phone")}:</label>
                        <span className="text-gray-800">
                            <a href={`tel:${employee.phone}`}>{employee.phone}</a>
                        </span>
                    </div>
                    <div className="flex items-center">
                        <label className="font-bold mr-1">{t("Email")}:</label>
                        <span className="text-gray-800">
                            <a href={`mailto:${employee.email}`}>{employee.email}</a>
                        </span>
                    </div>
                </div>
                <div className="flex gap-2 mt-2">
                    <button
                        className="w-[180px] py-2 rounded-[5px] text-sm font-medium cursor-pointer bg-[#48b9e0] text-white"
                        onClick={() => handleIntoduceClick(employee.publicId, employee.name)}
                    >
                        {t("Introducing")}
                    </button>
                    {employee.properties != undefined && employee.properties?.length > 0 && (
                        <button
                            className="w-[180px] py-2 rounded-[5px] text-sm font-medium cursor-pointer bg-[#f4a746] text-white"
                            onClick={() => handlePropertiesClick(employee.publicId)}
                        >
                            {t("Properties")} ({employee.properties?.length})
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TeamCard