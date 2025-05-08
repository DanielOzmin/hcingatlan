import "./IntroductionHighLight.css"
import Stats from "./Stats"

const IntroductionHighLight = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <img
                src="/IntroductionPic.jpg"
                alt="Introduction"
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
            />
            <div className="relative z-10 px-4 sm:px-12 lg:px-32 py-12 flex flex-wrap justify-center gap-8 text-white text-center bg-black/20">
                <Stats num={1406} text="Hirdetéseink nézettsége / nap" />
                <Stats num={19} text="Ingatlan mutatás / hét" />
                <Stats num={13} text="Értékelés ⭐⭐⭐⭐⭐" />
                <Stats num={4} text="Kollégáink száma" />
            </div>
        </div>

    )
}

export default IntroductionHighLight