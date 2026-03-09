import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import PeldaComponent from './components/PeldaComponent'
import InputMezo from './components/InputMezo'
import MovieCard from './components/MovieCard'

function App() {


  const [value, setValue] = useState('Ez a példa első eleme');
  const [value2, setValue2] = useState("Ez a példa második eleme");
  const [searched, setSearched] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  


  const filmek = [
    {id: 1, cim: "Matrix", bemutatas: 1999},
    {id: 2, cim: "Terminator", bemutatas: 1984},
    {id: 3, cim: "Fight club", bemutatas: 1999}
  ]

  useEffect(()=>{
    setFilteredList(filmek.filter((film)=>
      film.cim.toLowerCase().includes(searched.toLowerCase())))
  }, [searched])

  return (
    <>
        <InputMezo sc={setSearched} />

        {filteredList && filteredList.map((film)=>(
            <MovieCard movie={film} key={film.id} />
        ))}

        {!filteredList && filmek.map((film)=>(
            <MovieCard movie={film} key={film.id} />
        ))}

        <PeldaComponent val={value} val2={value2} />
        
    </>
  )
}

export default App
