//import FeedbackItem from "./components/FeedbackItem"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
// import AboutPage from "./pages/AboutPage"
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink"
import Post from "./components/Post"
import {FeedbackProvider} from "./context/FeedbackContext"



function App () {   

    return (
        <>
        <FeedbackProvider>
            <Router>
                <Header text="Feedback UI" bgColor='black' textColor='red'/>
                <div className="container">
                <Routes>
                    <Route exact path='/' element={
                        // We need a parent element to have multiple components inside one Route
                        // The best way
                        <>
                        <FeedbackForm > </FeedbackForm>
                        <FeedbackStats />
                        <FeedbackList />
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

                    {/* The asterisk after a path allows us to create nested routes 
                    Inside the post.jsx we can create another route and only if that route has a new path 
                    Basically we can navigate to /post and that renders but also post/show and that renders the nested jsx*/}
                    <Route path='/post/*' element={<Post></Post>}></Route>
                
                </Routes>
                <AboutIconLink></AboutIconLink>
                </div>
            </Router>
        </FeedbackProvider>
    
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