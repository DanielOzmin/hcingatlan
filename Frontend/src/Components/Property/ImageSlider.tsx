import "./Property.css"

type Props = {
    img: string[]
    current: number,
    setSelectedImg: React.Dispatch<React.SetStateAction<string>>
    setCurrent: React.Dispatch<React.SetStateAction<number>>
}

const ImageSlider = ({ img, setSelectedImg, setCurrent, current }: Props) => {

    const handleClick = (image: string, index: number) => {
        setSelectedImg(image)
        setCurrent(index)
    }

    return (
        <div className="property-slider-container">
            <div className="property-slides">
                <div className="arrow-left">
                    <button>❮</button>
                </div>
                <div className="arrow-right">
                    <button>❯</button>
                </div>
                {img.map((image, index) => (
                    <img
                        src={image}
                        alt={`slider-img ${index + 1}`}
                        key={index}
                        className={`slider-img ${index === current ? "active" : ""}`}
                        onClick={() => handleClick(image, index)} />
                ))}

            </div>

        </div>
    )
}

export default ImageSlider