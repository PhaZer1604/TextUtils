import React, { useState } from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    })

    const [btnText, setbtnText] = useState("Enable Dark Mode")

    const toggleStyle = ()=> {
        if(myStyle.color === 'white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
                border: '1px solid white'
            })
            setbtnText("Enable Dark Mode")
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
                
            })
            setbtnText("Enable Light Mode")
        }
    }


  return (
    <div className='container' style={myStyle}>
        <h1>About Us</h1>
        <button className="btn btn-outline-primary my-3 mx-3" onClick={toggleStyle}>{btnText}</button>
    </div>
  )
}
