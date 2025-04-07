import { reviews } from "../../dummyData"
import "./ReviewList.css"

const ReviewList = () => {
    return (
        <div className="review-container">
            {reviews.map((review,index)=>
            <div key={index} className="review-card">
                <h1>{review.name}</h1>
                <p>{review.review}</p>
            </div>)}
        </div>
    )
}

export default ReviewList