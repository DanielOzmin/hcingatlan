import "./CareerDetails.css"

const CareerDetails = () => {
    return (
        <div className="career-container">
            <h1 className="career-title">KARRIER</h1>
            <div className="career-subtitle">Csatlakozz egy fiatalos, lendületes értékesítő csapathoz.</div>

            <div className="career-highlight-box">
                <img src="/CareersPic.jpg" alt="Career Team" />
            </div>
            <p className="career-family-phrase">Legyél kis "családunk" tagja.</p>

            <p className="career-intro">
                Azonnali kezdéssel ingatlanközvetítő kollégákat keresünk budapesti ingatlanok értékesítéséhez.
            </p>

            <h3>Téged keresünk:</h3>
            <ul>
                <li>ha a jelenlegi fizetéseddel nem vagy megelégedve és valóban átlag feletti jövedelemre vágysz,</li>
                <li>ha szereted az igazi kihívást,</li>
                <li>ha csapatjátékos vagy,</li>
                <li>ha kimondottan jól tudod kezelni a problémás helyzeteket,</li>
                <li>ha minimum felhasználói szinten boldogulsz a számítógéppel.</li>
            </ul>

            <h3>Nem téged keresünk:</h3>
            <ul>
                <li>ha fontos számodra a fix átlag jövedelem,</li>
                <li>ha a pihenés sokkal fontosabb mint az egzisztenciád,</li>
                <li>ha a hétvégédet semmi áron nem áldoznád fel,</li>
                <li>ha nem vagy nyitott mások tanácsaira,</li>
                <li>ha nem szereted a csapatmunkát.</li>
            </ul>

            <p className="career-note">
                Nagyon fontos, hogy ez egy olyan szakma ahol a belefektetett energiád hozza meg a gyümölcsét,
                ezért olyan kollegákat keresünk akik teljes munkaidőben, elhivatottan, fő foglalkozásként tudják vállalni a munkát.
            </p>

            <p>
                Nincs területi kötöttség, és rejtett költség sem. Munkádhoz biztosítunk telefont, számítógépet,
                hirdetési portálokon való megjelenést, hirdetés kiemelési lehetőséget, és egyéb eszközöket ami a munkádhoz szükséges.
                Elsősorban tapasztalt, számlaképes, bizonyítvánnyal rendelkező kollégák jelentkezését várjuk,
                <strong> de ha még nincs tapasztalatod az sem jelent gondot, betanulási lehetőséget biztosítunk.</strong>
            </p>

            <p className="career-contact">
                <strong>E-mail:</strong> <a href="mailto:info@example.hu">info@example.hu</a><br />
                vagy telefonon a <strong><a href="tel:+0000000000">00000000000</a></strong> es telefonszámon.
            </p>
        </div>
    )
}

export default CareerDetails
