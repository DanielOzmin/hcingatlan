import "./ReportAndCompanyInfo.css"

const ReportAndCompanyInfo = () => {
  return (
    <div className="report-company-wrapper">
      
      <section className="info-section">
        <h2 className="section-title">PANASZFELVÉTEL</h2>
        <p className="sub-title">COMPLAINT / REPORT A COMPLAINT:</p>
        <p className="bold-name">Agent name sales leader</p>
        <p>TEL: 00-00/000-0000</p>
        <p>E-MAIL: info@example.com</p>
        <img src="/ExamplePic.webp" alt="Bálint Gábor" className="contact-image" />
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
