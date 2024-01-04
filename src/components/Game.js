import { useState } from 'react'
import './Game.css'

const Game = ({
  verifyLetter, 
  pickedWord, 
  pickedCategory, 
  letters, 
  guessedLetters, 
  wrongLetters, 
  guesses,
  score,
}) => {

  const [letter, setLetter] = useState("");
  return (

    <div className="game"> 
      <p className="points"> {/* Mostrar os pontos do usuário */}
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinhe a palavra: </h1>
      <h3 className="tip"> {/* Mostrar uma dica da palavra para o usuário */}
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className="wordContainer"> {/* A letras sendo exibidas */}
        {letters.map((letter, i) => (
            guessedLetters.includes(letter) ? (
              <span key={i} className="letter"> 
                {letter}
              </span>
            ) : (
              <span key={i} className="blankSquare"> </span>
            )
        ))}
      </div>
      <div className="letterContainer"> {/* Tentativa de acertar as letras da palavra */}
        <p>Tente adivinhar uma letra da palavra: </p>
        <form>
          <input type="text" name="letter" maxLength= "1" required onChange={(e) => setLetter(e.target.value)}/>
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer"> {/* Letras que o usuário chutou e não estão na palavra */}
        <p>Letras já utilzadas: </p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  )
}

export default Game