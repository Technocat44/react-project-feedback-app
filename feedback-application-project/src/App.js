//import FeedbackItem from "./components/FeedbackItem"
import Header from "./components/Header"
import { useState } from "react"
import feedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import { v4 as uuidv4} from 'uuid'
// import AboutPage from "./pages/AboutPage"
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import AboutPage from "./pages/AboutPage"


function App () {
    const [feedback, setFeedback] = useState(feedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?') ) {
            setFeedback(feedback.filter( (item) => (
                item.id !== id
            )))
        }
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        // use the spread operator to take all the objects that are currently in the array and copying them
        // over to the new one because the state is immutable. 
        setFeedback([newFeedback, ...feedback])
        console.log(newFeedback)
    }

    return (
        <>
    
        <Router>
           
            <Header text="Feedback UI" bgColor='black' textColor='red'/>
            <div className="container">
            <Routes>
                <Route exact path='/' element={
                    // We need a parent element to have multiple components inside one Route
                    // The best way
                    <>
                    <FeedbackForm handleAdd={addFeedback}> </FeedbackForm>
                    <FeedbackStats feedback={feedback}/>
                    <FeedbackList 
                        feedback={feedback}
                        handleDelete={deleteFeedback}/>
                    </>
                }>
                </Route>
                <Route path='/about' element={<AboutPage />}></Route>
                    {/* <div className="container">
                            <FeedbackForm />
                            <FeedbackStats feedback={feedback}/>
                           
                            <h1>My feedback application</h1>
                        <Route path="/about">
                            This is the about route
                        </Route>
                    </div> */}
                    
               
            </Routes>
            </div>
        </Router>
    
        </>
    )
//     const title = 'Blog Post';
//     const body = 'This is my blog post';
//     const comments = [
//         {id: 1, text: "Comment one"},
//         {id: 2, text: "Comment two"},
//         {id: 3, text: "Comment three"}
//     ]

//     const loading = false;
//     const showComments = true;

//     if (loading) return <h1>Loading...</h1>

//     const commentBlock =  
//         (<div className='comments'>
//             <h3>Comments ({comments.length})</h3>
//             <ul>
//                 {comments.map((comment, index) => (
//                     <li key={index}>{comment.text}</li>
//                 ))}
//             </ul>
//         </div>)

//     return (
//         <div className='container'>
//             <h1>{title.toUpperCase()}</h1>
//             <p>{body}</p>

//             {showComments && commentBlock}

           
//         </div>
//     )
}

export default App