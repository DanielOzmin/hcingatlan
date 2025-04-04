type Props = {
    text: string,
    num: number
}

const Stats = ({num, text} : Props) => {
    return (
        <div className="stat-block">
            <span className="stat-number">{num}</span>
            <span className="stat-text">{text}</span>
        </div>
    )
}

export default Stats