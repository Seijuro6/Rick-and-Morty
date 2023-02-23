import './App.css'
import Cards from './Cards/Cards'
import Nav from './Nav/Nav'
import {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About/About'
import Detail from './Detail/Detail'
import Form from './Form/Form'





function App () {
  const [characters, setCharacters] = useState([
  //   {
  //     name: 'Morty Smith',
  //     species: 'Human',
  //     gender: 'Male',
  //     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  //  }
  ])

 const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
          if (data.name) {
            for (let character of characters){
              if(data.id === character.id){
                return window.alert('Ya tienes ese personaxje');
              }
            }
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('No hay personajes con ese ID');
          }
      });
 }

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== id)
    )
  };

  return (
    <div className='App'>
        <Nav onSearch={onSearch}/>

        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/home' element={<Cards characters={characters}  onClose={onClose}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/detail/:detailId' element={<Detail/>}/>
        </Routes>

    </div>
  )
}

export default App
