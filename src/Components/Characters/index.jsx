import './styles.css'
import CharCard from "../CharCard/index"

const Characters = ({ characterList ,loading, setNext}) => {
  
  return (
    <>
      <h2>Meus personagens</h2>
      <ul>
          {loading &&
                 characterList.map((character) => (
                  <CharCard character={character}></CharCard>
                ))   
          }
      </ul>
    </>
  )
}

export default Characters
