import React from "react"

function MemeList(props){
    return(
        <div className="contact-card">
            <img src = {props.contact.imgUrl} />
            <h3 style={{display:props.contact.name ? "block" : "none"}}>Name : {props.contact.name}</h3> 
            <p style={{color:props.contact.name ? "blue" : "#888888"}}>Rate : {props.contact.rate}</p>
        </div> 
    )
}


function Joke(props) {
    return (
        <div>
            <h3 style={{display: !props.jd.question && "none"}}>Question: {props.jd.question}</h3>
            <h3 style={{color: !props.jd.question && "#888888"}}>Answer: {props. jd.punchLine}</h3>
            <hr/>
        </div>
    )
}

function TodoItem(props) {
    //design for slash the completed items
    const theStyle = {
        fontStyle : "Italic",
        color : "gray",
        textDecoration : "line-through"
    }
    return (
        <div>
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? theStyle : null}>{props.item.text}</p>
        </div>
    )
}


//half way
function UserVeri(props){
    return(
        <div>
            <p>Username : <input type="text" name="usernamez"></input></p>
            <p>Password : <input type="text" name="passwordz"></input></p>
            <button onClick={() => props.Verificationz(props.userSS.Username, props.userSS.Password)}>Submit</button>
        </div>
    )
}

export default TodoItem;