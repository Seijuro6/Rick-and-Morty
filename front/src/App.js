import './App.css'
import {useEffect, useState} from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'

function App () {
  const [characters, setCharacters] = useState([])
  const location = useLocation()
  const [access, setAccess] = useState(false)
  const navigate = useNavigate()

  const username = 'cadenazoo@hotmail.com'
  const password = '123hec'

  const login = (userData) =>{
    if(userData.username === username && userData.password === password){
      setAccess(true)
      navigate('/home')
    }
  }

  useEffect(()=>{
     !access && navigate('/')
  }, [access])


 const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
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
      {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch}/>}
     
        <Routes>
          <Route path='/home' element={<Cards characters={characters}  onClose={onClose}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/detail/:detailId' element={<Detail/>}/>
        </Routes>

    </div>
  )
}

export default App
