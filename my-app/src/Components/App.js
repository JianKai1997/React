import React from 'react';
import logo from 'C:/Users/shink/my-app/src/Images/logo.svg';
import Meme from 'C:/Users/shink/my-app/src/Components/Meme';
import jokesData from 'C:/Users/shink/my-app/src/Components/JokeData';

import PokemonBG from 'C:/Users/shink/my-app/src/Images/bg.png';
import bc from 'C:/Users/shink/my-app/src/Images/bc.jpg';
import howtocss from 'C:/Users/shink/my-app/src/Images/HowToCSSBasics.PNG';

import Form from "./FormContainer"

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          LOADING...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default FormApp;



//for fun
function App2(){
  return (
    <div>
      <nav>
        <h1>Gotta Go Fast</h1>
        <ul>
          <li>Sanic</li>
          <li>Uganda Knuckles</li>
        </ul>
      </nav>

      <main>
        <p>To be continue</p>
      </main>

    </div>
  )
}

function myApp3(){
  return(
    <div>
      <nav className="theClassname">Something</nav>
    </div>
  )
}

//declare value to variables
function declarationClass(){
  const firstName = "Ricardo";
  const lastName = "Milos"; 

  return(
    <p>Hello {firstName + " " + lastName} !</p> //everythign inside {} is look as JavaScript
    //<p>Hello {`${firstName} ${lastName}`} !</p> 
  )
}

//get current time + some design 
function getCurrentTime(){
  const date = new Date();
  var hours = date.getHours();
  let timeStatus;

  const theStyle = { 
    backgroundColor : "Yellow",
    fontSize : 30
  }

  if(hours < 12){
    timeStatus = "Morning";
    theStyle.color = "Blue";  //add color to theStyle 
  }
  else if(hours >= 12 && hours < 18){
    timeStatus = "Afternoon";
    theStyle.color = "Green";
  }
  else{
    timeStatus = "Night";
    theStyle.color = "Black";
  }

  if(hours > 12){
    hours %= 12;
  }

  return(
    <p style={theStyle}>Current time is {hours} ! Its {timeStatus}</p>
  )
}


//Meme list + css (contacts & contact-card)
function meme(){ 
  return(
    <div className="contacts">
      <Meme  //this run the Meme.js 
        contact={{imgUrl:howtocss , rate:"7/10"}}  
      />

      <Meme  //this run the Meme.js 
        contact={{imgUrl:PokemonBG , name:"Ricardo Milos", rate:"10/10"}} 
      />

      <Meme  //this run the Meme.js 
        contact={{imgUrl:bc , name:"Big Chungus", rate:"7/10"}} 
      />

      <Meme  //this run the Meme.js 
        contact={{imgUrl:howtocss , name:"Spaghetti", rate:"7/10"}}      
      />
    </div>
  )
}


//use map (takes item from JokeData array, does smtg on it, and put back the item in the same place)
//put data in another .js file
function JokeApp() {
  var jokeComponents

    //this de hua more longer
    //jokeComponents = jokesData.map(joke => <Meme id={joke.id} question={joke.question} punchLine={joke.punchLine} />)

    //this de hua shorter, but need add something in the Meme.js --> add 'jd'
    jokeComponents = jokesData.map(joke => <Meme id={joke.id} jd={joke}/>)

  return (
      <div>
          {jokeComponents}            
      </div>
  )
}


function FormApp() {
    return (
        <Form />
    )
}




