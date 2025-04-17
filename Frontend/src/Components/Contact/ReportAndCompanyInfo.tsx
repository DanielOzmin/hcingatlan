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
  )
}

export default ReportAndCompanyInfo
