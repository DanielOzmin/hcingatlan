import { useEffect } from "react"
import "./ImageModal.css"

type Props = {
    current: number,
    img: string[],
    isModalOpen: boolean,
    setCurrent: React.Dispatch<React.SetStateAction<number>>,
    setSelectedImg: React.Dispatch<React.SetStateAction<string>>,
    setIsImgModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const ImageModal = ({ img, setCurrent, setIsImgModalOpen, setSelectedImg, current, isModalOpen }: Props) => {

    const closeModal = () => {
        setIsImgModalOpen(false)
    }

    const nextImg = () => {
        setCurrent((prev) => (prev + 1) % img.length)
        setSelectedImg(img[(current + 1) % img.length])
    }

    const prevImg = () => {
        setCurrent((prev) => (prev - 1 + img.length) % img.length)
        setSelectedImg(img[(current - 1 + img.length) % img.length])
    }

    useEffect(() => {

        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isModalOpen) return

            if (e.key === "ArrowRight") {

                nextImg()

            } else if (e.key === "ArrowLeft") {

                prevImg()

            } else if (e.key === "Escape") {
                
                setIsImgModalOpen(false)
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return (() => window.removeEventListener("keydown", handleKeyDown))

    }, [isModalOpen, current])


    return (
        <div className="modal-container" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={closeModal}>✖</button>
                <button className="modal-arrow left" onClick={prevImg}>❮</button>
                <img src={img[current]} alt="Large view" className="modal-img" />
                <button className="modal-arrow right" onClick={nextImg}>❯</button>
            </div>
        </div>
    )
}

export default ImageModal