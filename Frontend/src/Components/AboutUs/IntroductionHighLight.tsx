import "./IntroductionHighLight.css"
import Stats from "./Stats"

const IntroductionHighLight = () => {
    return (
        <div className="introduction-highlight">
            <img src="/IntroductionPic.jpg" alt="Introduction" />
            <div className="intro-highlight-overlay">
                <div className="highlight-stats">
                    <Stats num={1406} text="Hirdetéseink nézettsége / nap" />
                    <Stats num={19} text="Ingatlan mutatás / hét" />
                    <Stats num={13} text="Értékelés ⭐⭐⭐⭐⭐" />
                    <Stats num={4} text="Kollégáink száma" />
                </div>
            </div>
        </div>
    )
}

export default IntroductionHighLight