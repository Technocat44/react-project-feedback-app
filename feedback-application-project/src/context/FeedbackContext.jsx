import { createContext, useState } from "react";
import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()



export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from Context',
            rating: 4
        }
    ])

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        // use the spread operator to take all the objects that are currently in the array and copying them
        // over to the new one because the state is immutable. 
        setFeedback([newFeedback, ...feedback])
        console.log(newFeedback)
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?') ) {
            setFeedback(feedback.filter( (item) => (
                item.id !== id
            )))
        }
    }

    return <FeedbackContext.Provider 
    value={{
      feedback: feedback,
      deleteFeedback,
      addFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext