import "./Highlights.css"
type Props = {
    title: string
}

const Highlight = ({title} : Props) => {
    return (
        <div className="default-highlight-container">
            <img src="/highlight.jpg" alt="highlight" />
            <div className="default-highlight-text">{title}</div>
        </div>
    )
}

export default Highlight