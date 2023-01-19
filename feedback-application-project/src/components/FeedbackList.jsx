
import FeedbackItem from './FeedbackItem'

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

function FeedbackList({feedback, handleDelete}) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
  }
  return (
    <div className='feedback-list'>
        {feedback.map( (item) => (
            <FeedbackItem 
            key={item.id} 
            item={item} 
            handleDelete={handleDelete} 
            />
        ))}
    </div>
  )
}

export default FeedbackList