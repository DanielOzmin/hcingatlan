type Props = {
    title: string
}

const Highlight = ({ title }: Props) => {
    return (
        <div className="relative h-[80px] overflow-hidden md:h-[160px] sm:h-[120px]">
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(128,96,0,0.6)] to-[rgba(0,0,0,0.5)] z-10" />
            <img
                src="/highlight.jpg"
                alt="highlight"
                className="w-full h-full object-cover object-top relative z-0"
            />
            <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-white text-center font-bold text-[40px] sm:text-[24px] px-2 text-shadow">
                {title}
            </div>
        </div>
    )
}

export default Highlight