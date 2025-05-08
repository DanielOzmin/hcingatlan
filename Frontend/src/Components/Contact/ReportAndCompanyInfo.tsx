import { useEffect, useState } from "react"
import "./ReportAndCompanyInfo.css"
import { Employee, fetchEmployeeById } from "../../Apis"
import { useTranslation } from "react-i18next"

const id = import.meta.env.VITE_BOSS_AGENT_ID

const ReportAndCompanyInfo = () => {
  const [employee, setEmployee] = useState<Employee>()
  const { t } = useTranslation()

  useEffect(() => {
    fetchEmployeeById(id, setEmployee)
  }, [])

  if (!employee) return

  return (
    <>
      <div className="hidden md:block">
        <div className="report-company-wrapper">

          <section className="info-section">
            <h2 className="section-title">{t("Complaint")}</h2>
            <p className="sub-title">{t("Complaint_title")}</p>
            <p className="bold-name">{employee.name} - {employee.position}</p>
            <p>{t("Phone")}: {employee.phone}</p>
            <p>{t("Email")}: {employee.email}</p>
            <img src={employee.img} alt="Bálint Gábor" className="contact-image" />
          </section>

          <section className="info-section">
            <h2 className="section-title">{t("Company_info")}</h2>
            <p className="company-name">HOME CHANGE INGATLANIRODA / Agent name EV.</p>
            <p><span className="label">{t("Address")}:</span> zipcode city, street</p>
            <p><span className="label">{t("Tax_number")}:</span> 00000000-0-00</p>
            <p><span className="label">{t("Registration_number")}:</span> 00000000</p>
          </section>

        </div>
      </div>
      <div className="block md:hidden">
        <div className="bg-white border border-gray-100 shadow-md rounded-lg p-6 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-yellow-600 mb-2">{t("Complaint")}</h3>
          <p className="uppercase text-sm text-gray-500">{t("Complaint_title")}</p>
          <p className="mt-2 font-semibold">{employee.name} - {employee.position}</p>
          <p>{t("Phone")}: <a href={`tel:${employee.phone}`}>{employee.phone}</a></p>
          <p>{t("Email")}: <a href={`mailto:${employee.email}`}>{employee.email}</a></p>
          <img src={employee.img} alt="Bálint Gábor" className="mt-4 rounded-lg w-64" />
        </div>

        <div className="bg-white border border-gray-100 shadow-md rounded-lg p-6 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-yellow-600 mb-2">{t("Company_info")}</h3>
          <p className="font-bold uppercase text-sm text-gray-500">HOME CHANGE INGATLANIRODA / BÁLINT GÁBOR EV.</p>
          <p>{t("Address")}: zipcode city, street</p>
          <p>{t("Tax_number")}: 00000000-0-00</p>
          <p>{t("Registration_number")}: 00000000</p>
          <img src="/logo.gif" alt="Céglogó" className="mt-4 w-32" />
        </div>
      </div>
    </>
  )
}

export default ReportAndCompanyInfo
