import { useEffect } from "react"
import { useSwipeable } from "react-swipeable"
import "./ImageModal.css"

type Props = {
    current: number,
    img: string[],
    isModalOpen: boolean,
    setCurrent: React.Dispatch<React.SetStateAction<number>>,
    setSelectedImg: React.Dispatch<React.SetStateAction<string>>,
    setIsImgModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const ImageModal = ({ img, current, isModalOpen, setCurrent, setSelectedImg, setIsImgModalOpen }: Props) => {
    const closeModal = () => setIsImgModalOpen(false)

    const nextImg = () => {
        const next = (current + 1) % img.length
        setCurrent(next)
        setSelectedImg(img[next])
    }

    const prevImg = () => {
        const prev = (current - 1 + img.length) % img.length
        setCurrent(prev)
        setSelectedImg(img[prev])
    }

    const swipeHandlers = useSwipeable({
        onSwipedLeft: nextImg,
        onSwipedRight: prevImg,
        preventScrollOnSwipe: true,
        trackTouch: true,
    })

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isModalOpen) return
            if (e.key === "ArrowRight") nextImg()
            if (e.key === "ArrowLeft") prevImg()
            if (e.key === "Escape") closeModal()
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [isModalOpen, current])

    return (
        <div className="modal-container" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} {...swipeHandlers}>
                <button className="modal-close" onClick={closeModal}>✖</button>

                <div className="hidden md:block">
                    <button className="modal-arrow left" onClick={prevImg}>❮</button>
                </div>

                <img src={img[current]} alt="Large view" className="modal-img" />

                <div className="hidden md:block">
                    <button className="modal-arrow right" onClick={nextImg}>❯</button>
                </div>
            </div>
        </div>
    )
}

export default ImageModal