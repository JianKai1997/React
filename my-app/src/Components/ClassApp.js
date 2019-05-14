import React from "react"
import ReactDOM from "react-dom"
import { tsConstructorType } from "@babel/types";
import TodoItem from 'C:/Users/shink/my-app/src/Components/Meme';
import todosData from 'C:/Users/shink/my-app/src/Components/JokeData';
//import todosData from 'C:/Users/shink/my-app/src/Components/Users';

/*
// #1
function App() {
    return (
        <div>
            <Header />
            <Greeting />
        </div>
    )
}

// #2
function Header(props) {
    return (
        <header>
            <p>Welcome, {props.username}!</p>
        </header>
    )
}

// #3
function Greeting() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    return (
        <h1>Good {timeOfDay} to you, sir or madam!</h1>
    )
}
*/



//convert above function to class
// #1
class App extends React.Component {
    render(){
        return (
            <div>
                <Header username="PHROG"/>
                <Greeting />
            </div>
        )
    }
}

// #2
class Header extends React.Component {
    render(){
        return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}

// #3
class Greeting extends React.Component{
    render(){
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
    
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}





//state
//state is for data maintains, means for able to change the value...for example 'props' cannot change value 
class StateApp extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }

    render() {
        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
            </div>
        )
    }
}


//half way
//import TodoItem from 'C:/Users/shink/my-app/src/Components/Meme';
//import todosData from 'C:/Users/shink/my-app/src/Components/Users';
class loginlogout extends React.Component{

        constructor() {
            super()
            this.state = {
                profile : todosData
            }
            this.Verificationz = this.Verificationz.bind(this);
        }

        Verificationz(un,pw){
            this.setState(prevState => {
                const updatedLogin = prevState.profile.map(todo => {
                    if(((todo.Username === un) && (todo.Password === pw)) && (todo.Status === false)){
                        todo.Status = true
                        console.log('You are now logged in');
                    }
                    else if(((todo.Username === un) && (todo.Password === pw)) && (todo.Status === true)){
                        todo.Status = false
                        console.log('You are now logged out');
                    }
                    else{
                        console.log('No')
                    }
                    return todo
                })
                return{
                    profile : updatedLogin
                }
            })
        }

        render() {
            const todoItems = this.state.profile.map(userSS => <TodoItem key={userSS.Username} userSS={userSS} Verificationz={this.Verificationz}/>)
            let statusText = this.state.profile.Status ? "Logged IN" : "Logged OUT"
            return (
                <div>
                    {todoItems}
                    <h1>{statusText}</h1>
                </div>
            )
        }
}





//advanced shit
//import TodoItem from 'C:/Users/shink/my-app/src/Components/Meme';
//import todosData from 'C:/Users/shink/my-app/src/Components/JokeData';
class AdvanceApp extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {                                          //Meme
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
        return (
            <div>
                {todoItems}
            </div>
        )    
    }
}


export default AdvanceApp;