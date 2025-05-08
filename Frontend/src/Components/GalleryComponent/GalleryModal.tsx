import { useSwipeable } from "react-swipeable"
import "./GalleryModal.css"

type Props = {
  closeModal: () => void
  showPrev: () => void
  showNext: () => void
  selectedIndex: number
  images: string[]
}

const GalleryModal = ({ closeModal, showPrev, showNext, selectedIndex, images }: Props) => {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (selectedIndex < images.length - 1) showNext()
    },
    onSwipedRight: () => {
      if (selectedIndex > 0) showPrev()
    },
    preventScrollOnSwipe: true,
    trackTouch: true
  })

  return (
    <div className="gallery-modal-overlay" onClick={closeModal}>
      <div
        className="gallery-modal-content"
        onClick={(e) => e.stopPropagation()}
        {...swipeHandlers}
      >
        <button className="gallery-close-button" onClick={closeModal}>✖</button>
        <button className="gallery-prev-button hidden md:block" onClick={showPrev} disabled={selectedIndex === 0}>←</button>

        <img
          src={images[selectedIndex]}
          alt={`Full ${selectedIndex}`}
          className="gallery-modal-image"
        />

        <button className="gallery-next-button hidden md:block" onClick={showNext} disabled={selectedIndex === images.length - 1}>→</button>
      </div>
    </div>
  )
}

export default GalleryModal