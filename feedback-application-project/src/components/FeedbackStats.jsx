import { useContext } from "react" 
import FeedbackContext from "../context/FeedbackContext"


function Stats() {

    const {feedback} = useContext(FeedbackContext);

    // calculate ratings average
    console.log(feedback)
    let average = (feedback.reduce( (acc, curr) => {
      console.log(acc)
        return (acc + Number(curr.rating)) 
    }, 0 ) / feedback.length)
    console.log(average)
    average = average.toFixed(1)

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default Stats