
import { useState } from 'react';
import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({item , handleDelete}) {
   const [rating, setRating] = useState(item.rating)
   const [text, setText] = useState(item.text)
   // const [text, setText] = useState('This is an example of a feedback item')

  let ChangeRating = () => {
    
    return setRating(rating + 1)
  }
  
  return (
    <>
    <Card reverse={true}>
        <div className='text-display'> {item.title}</div>
        <div className='num-display'> {rating} </div>
        <button onClick={() => handleDelete(item.id)} className='close'>
            <FaTimes color='purple'></FaTimes>
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