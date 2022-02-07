import './styles.css'

const CharCard = ({character}) => {
    return (
    <li key={character.id} className={character.status === 'Alive' ? 'alive' : 'dead'}>
        <h3>{character.name}</h3>
        <img src={character.image}></img>
        <p>{character.species}</p>
        <p>{character.location.name}</p>
    </li>
    )
}

export default CharCard
