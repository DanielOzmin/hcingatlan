import "./GalleryModal.css"

type Props = {
    closeModal: () => void
    showPrev: () => void
    showNext: () => void
    selectedIndex: number
    images: string[]
}

const GalleryModal = ({closeModal,showPrev,showNext,selectedIndex,images}: Props) => {
    return (
        <div className="gallery-modal-overlay" onClick={closeModal}>
            <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="gallery-close-button" onClick={closeModal}>✖</button>
                <button className="gallery-prev-button" onClick={showPrev} disabled={selectedIndex === 0}>←</button>
                <img src={images[selectedIndex]} alt={`Full ${selectedIndex}`} className="gallery-modal-image" />
                <button className="gallery-next-button" onClick={showNext} disabled={selectedIndex === images.length - 1}>→</button>
            </div>
        </div>
    )
}

export default GalleryModal