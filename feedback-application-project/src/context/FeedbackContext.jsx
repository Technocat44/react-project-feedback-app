import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4} from 'uuid'


/*
We set up json server which is in the npm package manager. It allows us to us a file in our project and treat it like a separate API
or a mock back end
In this project that is found in the contest folder in db.json. The contents in that file are what give our app life.
After npm i jsonserver we can create the db.json file and make it an Object with a key (we can call the key whateber we want, 
    we just need to make sure to use that name in the package.json script section).
In our package.json file we add this ["json-server": "^0.17.1",] as a dependency.
Then we set up a script like this ["server": "json-server --watch db.json --port 5000",] and we can call `npm run server` to activate.
Then from Postman, we can make an API call to localhost:5000/feedback!

To run the front end and back end at the same time we can also `npm i concurrently`. 
And this will allow us to run one single command and it will execute multiple scripts.
`npm start` is how we start the front end, `npm run server` is for the back end json server we set up
Add this ["dev": "concurrently \"npm run server\" \"npm start\"" ] to the scripts section and now we can 
*/

const FeedbackContext = createContext()



export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true); 
    const [feedback, setFeedback] = useState([]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, []) 

    // Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch("http://localhost:5000/feedback?_sort=id&_order=desc");
        const data = await response.json();
        setFeedback(data);
        setIsLoading(false);
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true
        })
    }

    // Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        // use the spread operator to take all the objects that are currently in the array and copying them
        // over to the new one because the state is immutable. 
        setFeedback([newFeedback, ...feedback])
        console.log(newFeedback)
    }

    // Delete Feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?') ) {
            setFeedback(feedback.filter( (item) => (
                item.id !== id
            )))
        }
    }

    const updateFeedbackItem = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
    }

    return <FeedbackContext.Provider 
    value={{
      feedback: feedback,
      deleteFeedback,
      addFeedback,
      editFeedback,
      feedbackEdit: feedbackEdit,
      updateFeedbackItem,
      isLoading: isLoading
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext