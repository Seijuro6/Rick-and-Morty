import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'





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
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
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
    <div className='App' style={{ padding: '25px' }}>
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
