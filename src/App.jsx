import React, {useState} from 'react'
import './App.css'
import Home from './assets/pages/Home'
import { Route, Routes } from 'react-router-dom'
import Quiz from './assets/pages/Quiz'
import Diet1 from './assets/pages/Diet1'
import Exercise1 from './assets/pages/Exercise1'
import Sleep1 from './assets/pages/Sleep1'
import Basic2 from './assets/pages/Basic2'
import Basic3 from './assets/pages/Basic3'
import Basic1 from './assets/pages/Basic1'
import Diet2 from './assets/pages/Diet2'
import { createContext } from 'react'
import Diet3 from './assets/pages/Diet3'

export const dietContext = createContext()


function App() {
  const [diet, setDiet] = useState('');


  return (
    <>
    <dietContext.Provider value={[diet, setDiet]}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path='/basic1' element={<Basic1/>}/>
      <Route path='/basic2' element={<Basic2/>}/>
      <Route path='/basic3' element={<Basic3/>}/>
      <Route path='/diet' element={<Diet1/>}/>
      <Route path='/diet2' element={<Diet2/>}/>
      <Route path='/diet3' element={<Diet3/>}/>
      <Route path='/exercise' element={<Exercise1/>}/>
      <Route path='/sleep' element={<Sleep1/>}/>
    </Routes>
    </dietContext.Provider>
    </>
  )
}

export default App
