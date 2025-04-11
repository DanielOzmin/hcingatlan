import { useEffect, useState } from "react"
import "./ReportAndCompanyInfo.css"
import { Employee, fetchEmployeeById } from "../../Apis"

const id = import.meta.env.VITE_BOSS_AGENT_ID

const ReportAndCompanyInfo = () => {
  const [employee, setEmployee] = useState<Employee>()

  useEffect(() => {
    fetchEmployeeById(id, setEmployee)
  }, [])

  if (!employee) return

  return (
    <div className="report-company-wrapper">

      <section className="info-section">
        <h2 className="section-title">PANASZFELVÉTEL</h2>
        <p className="sub-title">COMPLAINT / REPORT A COMPLAINT:</p>
        <p className="bold-name">{employee.name} - {employee.position}</p>
        <p>TEL: {employee.phone}</p>
        <p>E-MAIL: {employee.email}</p>
        <img src={employee.img} alt="Bálint Gábor" className="contact-image" />
      </section>

      <section className="info-section">
        <h2 className="section-title">COMPANY / BILLING INFORMATION</h2>
        <p className="company-name">HOME CHANGE INGATLANIRODA / Agent name EV.</p>
        <p><span className="label">ADDRESS:</span> zipcode city, street</p>
        <p><span className="label">TAX NUMBER:</span> 00000000-0-00</p>
        <p><span className="label">REGISTRATION NUMBER:</span> 00000000</p>
      </section>

    </div>
  )
}

export default ReportAndCompanyInfo
