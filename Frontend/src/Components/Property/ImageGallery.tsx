import { useState } from "react"
import { Property } from "../../dummyData"
import ImageSlider from "./ImageSlider"
import "./Property.css"
import ImageModal from "./ImageModal"

type Props = {
    property: Property
}


const ImageGallery = ({ property }: Props) => {
    const [selectedImg, setSelectedImg] = useState<string>(property.img?.[0] ?? "/placeholder-image.jpg")
    const [current, setCurrent] = useState<number>(0)
    const [isImgModalOpen, setIsImgModalOpen] = useState<boolean>(false)

    return (
        <div className="property-img-container">
            <img src={selectedImg} alt="Selected img" className="property-main-img" onClick={() => setIsImgModalOpen(true)} />
            <ImageSlider
                img={property.img || ["/placeholder-image.jpg"]}
                setSelectedImg={setSelectedImg}
                setCurrent={setCurrent}
                current={current} />
            {isImgModalOpen &&
                <ImageModal
                    current={current}
                    img={property.img || ["/placeholder-image.jpg"]}
                    isModalOpen={isImgModalOpen}
                    setIsImgModalOpen={setIsImgModalOpen}
                    setCurrent={setCurrent}
                    setSelectedImg={setSelectedImg} />}
        </div>
    )

}

export default ImageGallery