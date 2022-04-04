import './App.css';
import logo from './logoRM.png'
import {useEffect, useState} from 'react'
import Characters from './Components/Characters/index'
import rickandmorty from './rickandmorty.jpg'

function App() {

  const [characterList, setCharacterList] = useState([])
  const [loading, setLoading] = useState(false)
  const [next, setNext] = useState(1)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${next}`)
    .then((res) => res.json())
    .then((res) => {
   
      setCharacterList([...characterList, ...res.results])
      setLoading(true)
      if (next < 42) {
        setNext(next + 1)
      }
    })
    .catch((err) => console.log(err))
  }, [next])


  return (
    <div className="App">
      <header>
        <img className='rick' src={rickandmorty}></img>
        <img className='logo' src={logo}></img>
      </header>
      <Characters loading={loading} characterList={characterList}></Characters>
    </div>
  );
}

export default App;
