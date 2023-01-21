
import FeedbackItem from './FeedbackItem'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

function FeedbackList() {

  /* When using context, we can import FeedbackContext as think of it as a component. 
  That context is a provider and has one value which is a feedback array created by useState
  So here we create a variable that pulls that array out with the useContext function call. 
  We pass in a context provider and now we have access to that state aka that feedback array 

  Using context in this way allows us to pass state around and we don't have to use props and use prop drilling
  */

  const {feedback} = useContext(FeedbackContext);
 

  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
  }
  return (
    <div className='feedback-list'>
        {feedback.map( (item) => (
            <FeedbackItem 
            key={item.id} 
            item={item} 
            />
        ))}
    </div>
  )
}

export default FeedbackList