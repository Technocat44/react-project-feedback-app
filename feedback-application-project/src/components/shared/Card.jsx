import React from 'react'

// this is a styled component

function Card({children, reverse}) {
    /* Conditonal components.
    Condtional class

    We use templating strings with back ticks `` to add a condtional that if reverse is true, we use the card.reverse css styling
    So if the prop reverse is true, we include the reverse style.

    Where we use the <Card /> component now we can pass a prop in with it like so
    <Card reverse={true}> </Card>
    */
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )

    /*
    Conditional styling
    */
    // return (
    //     <div className='card' style={{
    //         backgroundColor : reverse ? 'rgba(0,0,0,0.4)': 'white',
    //         color: reverse ? 'white' : 'black',
    //     }}>{children}</div>
    // )
}


export default Card