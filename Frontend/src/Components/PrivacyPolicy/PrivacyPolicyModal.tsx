import "./PrivacyPolicyModal.css"

type Props = {
    onClose: ()=> void
}

const PrivacyPolicyModal = ({onClose} : Props) => {
    return (
        <div className="policy-modal-container" onClick={onClose}>
            <div className="policy-modal">
                <h1>Adatkezelési hozzájáruló nyilatkozat</h1>
                <p>Jelen űrlap kitöltésével kifejezett hozzájárulásomat adom ahhoz, hogy a fentiekben általam önkéntesen szolgáltatott személyes adataimat </p>
                <p>Bálint Gábor ev. ( Home Change ingatlan iroda ) ingatlanközvetítő, mint adatkezelő kezelje a hozzájárulásom visszavonásáig, abból a célból,</p>
                <p>hogy ingatlan eladás, vagy vásárlás céljából ajánlatokat juttasson el számomra.</p>
                <p>A kapott e-mail mindig tartalmaz leiratkozásra szolgáló linket.</p>
            </div>
        </div>
    )
}

export default PrivacyPolicyModal