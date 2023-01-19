import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button';
import Rating from './Rating';

function FeedbackForm({handleAdd}) {

  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");

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
        handleAdd(newFeedback);

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