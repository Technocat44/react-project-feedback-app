import { createContext, useState, useEffect } from "react";
//import { v4 as uuidv4} from 'uuid'


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


Fetching Data from JSON Server Backend

We need to use the react hook useEffect that will run as soon as the app loads (like a constructor).
Create a function that will fetch the data, in this case we call is fetchFeedback
WE use fetch and await, fetch will make a request to a url, and await will wait for the response, This is a promise.
The response is the data, the json data specifically, and we set the Feedback to be the response of the GET request. Which will fill
the array in the useState. 


To incorporate the rest of the CRUD functions below like add and delete, we want them to update the mock json server.

Something cool we can do is add a proxy
Proxy definition - In general, A proxy or proxy server serves as a gateway between your app and the internet. 
                   It's an intermediate server between client and servers by forwarding client requests to resources. 
                   In React, we often use this proxying in the development environment.

This proxy will allow us to edit the package.json with the url we want to GET instead of hardcoding them in the fetch.
In a case where we were making lots of different CRUD request to the same API, we don't have to keep retyping it.

Updating the addFeedback function, we add the promise api with async and fetch and await and make a POST request to 
add the data. On the front end page, when a user then types in the info and sends it to the mock backend, it is then 
saved to the db.json file!
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
        const response = await fetch("/feedback?_sort=id&_order=desc");
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
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json();
        //newFeedback.id = uuidv4();
        // use the spread operator to take all the objects that are currently in the array and copying them
        // over to the new one because the state is immutable. 
        setFeedback([data, ...feedback])
        console.log(newFeedback)
    }

    // Delete Feedback
    const deleteFeedback = async (id) => {
        if (window.confirm('Are you sure you want to delete?') ) {

            await fetch(`/feedback/${id}`, { method: "DELETE" } );
            setFeedback(feedback.filter( (item) => (
                item.id !== id
            )))
        }
    }

    const updateFeedbackItem = async (id, updItem) => {
    
        const response = await fetch(`/feedback/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updItem)    
        })
        const data = await response.json();

        setFeedback(feedback.map((item) => item.id === id ? {...item, ...data} : item))
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