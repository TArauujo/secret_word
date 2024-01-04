import './Game.css'

const Game = ({verifyLetter}) => {
  return (
    <div className="game"> 
      <p className="points"> {/* Mostrar os pontos do usuário */}
        <span>Pontuação: 000</span>
      </p>
      <h1>Adivinhe a palavra: </h1>
      <h3 className="tip"> {/* Mostrar uma dica da palavra para o usuário */}
        Dica sobre a palavra: <span>Dica...</span>
      </h3>
      <p>Você ainda tem XXX tentativa(s)</p>
      <div className="wordContainer"> {/* A letras sendo exibidas */}
        <span className="letter">A</span>
        <span className="blackSquare"></span>
      </div>
      <div className="letterContainer"> {/* Tentativa de acertar as letras da palavra */}
        <p>Tente adivinhar uma letra da palavra: </p>
        <form>
          <input type="text" name="letter" maxLength= "1" required />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer"> {/* Letras que o usuário chutou e não estão na palavra */}
        <p>Letras já utilzadas: </p>
        <span>a, </span>
        <span>b, </span>
      </div>
    </div>
  )
}

export default Game