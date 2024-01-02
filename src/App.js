//CSS
import './App.css';

//REACT
import { useCallback, useEffect, useState } from "react";

//DATA
import { wordList } from './data/words';

//COMPONENTS
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordList);


  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] =  useState([]);


  const pickWordAndCategory = () => {
    //pick a random category
    const categories = Object.keys(words);
    const category = 
      categories[Math.floor(Math.random() * Object.keys(categories).length)]

    console.log(category);

    //pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
  };

  //start the secret word game
  const startGame = () =>{
    // pick word and pick category
    pickWordAndCategory();
    
    setGameStage(stages[1].name)
  };

  //process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  };

  //restarts the game
  const retry = () => {
    setGameStage(stages[0].name)
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame = {startGame}/>}
      {gameStage === "game" && <Game verifyLetter = {verifyLetter}/>}
      {gameStage === "end" && <GameOver retry = {retry}/>}

    </div>
  );
}

export default App;
