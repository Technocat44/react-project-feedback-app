
import { useState } from 'react';
import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({item}) {
   const [rating, setRating] = useState(item.rating)
   const [text, setText] = useState(item.text)
   const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
   // const [text, setText] = useState('This is an example of a feedback item')

  let ChangeRating = () => {
    
    return setRating(rating + 1)
  }
  
  return (
    <>
    <Card reverse={true}>
        <div className='text-display'> {item.title}</div>
        <div className='num-display'> {rating} </div>
          <button onClick={() => deleteFeedback(item.id)} className='close'>
              <FaTimes color='purple'></FaTimes>
          </button>
          <button className='edit'
          onClick={() => editFeedback(item)}>
            <FaEdit color='purple'></FaEdit>
          </button>
        <div className='text-display'> {text}  </div>
        <button onClick={ChangeRating}>Change Rating</button>
 
    </Card>
    <form>
      <label>Enter your review:
        <input
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
    </form>
    <div>

    </div>
    </>
  )
}

export default FeedbackItem