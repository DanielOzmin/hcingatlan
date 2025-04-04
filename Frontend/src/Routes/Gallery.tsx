import Header from "../Components/Header/Header"
import Highlight from "../Components/DefaultHighLight/Highlights"

import "./RoutesCSS/Gallery.css"
import { useState } from "react"
import GalleryModal from "../Components/GalleryComponent/GalleryModal"

const images = ["/office1.jpeg", "/office2.jpeg", "/office3.jpeg", "/office4.jpeg", "/office5.jpeg",
    "/office6.jpeg", "/office7.jpeg", "/office8.jpeg", "/office9.jpeg", "/office10.jpeg", "/office11.jpeg",]

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const openModal = (index: number) => {
        setSelectedIndex(index)
    }

    const closeModal = () => {
        setSelectedIndex(null)
    }

    const showPrev = () => {
        if (selectedIndex !== null && selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1)
        }
    }

    const showNext = () => {
        if (selectedIndex !== null && selectedIndex < images.length - 1) {
            setSelectedIndex(selectedIndex + 1)
        }
    }

    return (
        <>
            <Header />
            <Highlight title="Gallery" />
            <div className="gallery-content-container">
                {selectedIndex != null && <GalleryModal
                    closeModal={closeModal}
                    showPrev={showPrev}
                    showNext={showNext}
                    selectedIndex={selectedIndex}
                    images={images}
                />}
                <h1>Our Office</h1>
                <div className="gallery-section">
                    <h2>City, zipcode, street, num</h2>
                    <div className="gallery-grid">
                        {images.map((image, index) =>
                            <img key={index} src={image} alt={`Office ${index}`} onClick={() => openModal(index)} />
                        )}
                    </div>
                </div>
            </div>



        </>)
}

export default Gallery