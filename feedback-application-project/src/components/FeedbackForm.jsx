import Card from './shared/Card'
import Button from './shared/Button';
import Rating from './Rating';
import { useContext, useEffect, useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {

  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");
  const {addFeedback, feedbackEdit, updateFeedbackItem} = useContext(FeedbackContext);

  /* useEffect is good for HTTP request, if you had to fetch data, you would do that in this 
  */
  useEffect(() => {
    if(feedbackEdit.edit === true) {
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    if (text === ''){
        setBtnDisabled(true)
        setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
        setBtnDisabled(true)
        setMessage("Text must be at least 10 characters.")
    } else {
        setBtnDisabled(false)
        setMessage(null)
    }
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
        const newFeedback = {
            text: text,
            rating: rating
        }

        if (feedbackEdit.edit === true) {
            updateFeedbackItem(feedbackEdit.item.id, newFeedback)
        } else {
            addFeedback(newFeedback);
        }

        setText("")
    } 
  
  }

  return (
    <>
    <Card >
        <form onSubmit={handleSubmit}>
            <h2>How would you rank these Stephen King novels?</h2>
            <Rating select={(rating) => setRating(rating)}/>
            <div className='input-group'>
                <input 
                onChange={handleTextChange} 
                type="text" 
                placeholder='Rank your favorite books'
                value={text}    
                >
                </input >
                <Button type='submit' isDisabled={btnDisabled}>
                    Send
                </Button>
                
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
    </>

  )
}

export default FeedbackForm