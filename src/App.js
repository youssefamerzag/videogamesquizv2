import { useRef } from "react";
import { useState } from "react";
import CSS from './App.css'

function App() {
  const quizs = [
    {
      quiz : 'What is the best-selling game console of all time?' ,
      answers : [
        {awnser : 'psp', iscorrect : false},
        {awnser : 'Nintendo Ds', iscorrect : false},
        {awnser : 'Ps2', iscorrect : true},
        {awnser : 'GameCube', iscorrect : false},
      ]
  },
    {
      quiz : 'what are the highest rated games of all time?' ,
      answers : [
        {awnser : 'Red Dead Redemption 2', iscorrect : false},
        {awnser : 'Half-Life', iscorrect : false},
        {awnser : 'Super Mario 64', iscorrect : false},
        {awnser : 'The Legend of Zelda: Ocarina of Time', iscorrect : true},
      ]
    },
    {
      quiz : 'Which company released the iconic video game Donkey Kong?' ,
      answers : [
        {awnser : 'Nintendo', iscorrect : true},
        {awnser : 'Sony', iscorrect : false},
        {awnser : 'Sega', iscorrect : false},
        {awnser : 'Microsoft', iscorrect : false},
      ]
    },
    {
      quiz : 'Which developer released the Street Fighter game in the 1980s?' ,
      answers : [
        {awnser : 'SNK', iscorrect : false},
        {awnser : 'Capcom', iscorrect : true},
        {awnser : 'activision', iscorrect : false},
        {awnser : 'Sega', iscorrect : false},
      ]
    },
  ]

  const [ quiznb , setquiznb] = useState(0)

  const [scoreshow , setscoreshow] = useState(false)

  const [score , setscore] = useState(0)

  function correctanswer(iscorrect) {

    const nextquizbt = quiznb + 1

    if (nextquizbt < quizs.length){
      setquiznb(nextquizbt)
    } else {
        setscoreshow(true)
    }

    if (iscorrect === true) {
      setscore(score + 1)
      alert('Your answer is CORRECT!!')
    }else {
      alert('Your answer is NOT CORRECT')
    }
}


  return(
    <div id="quiz">
      {scoreshow ? (
      <div>
          <p id="score">Your score is : {score}/4</p>
          <h1>Thank you so much for playing</h1>
          <h3>For more project click here :</h3>
          {/* Correct answers list */}
          {/* <div>
              <p>correct answers :</p>
              <ul>
                {quizs[0].answers.filter(correctanswers =>  correctanswers.iscorrect === true)
                  .map(
                    (filtredanswers , index) => (<li key={index}>{quiznb}  / {filtredanswers.awnser}</li>)
                    )}
              </ul>
          </div> */}

      </div> ) : (
      <div>
        <p id="title">Quiz Number {quiznb + 1}</p>
        <div id="quizs">{quizs[quiznb].quiz}</div>
          <div  id="answers">{quizs[quiznb].answers.map((answeroption, index) => 
          <div><button id="answer" key={index} onClick={() => correctanswer(answeroption.iscorrect)}>{answeroption.awnser}</button></div>)}
      </div>
      </div> 
      )}
      <a id='user' href="https://github.com/youssefamerzag">@Youssef Amerzag</a>
    </div>
  )
}export default App;