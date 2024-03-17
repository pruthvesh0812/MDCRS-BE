import React, { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Quiz from './pages/Quiz'
import Diet1 from './pages/prediction/Diet1'
import Exercise1 from './pages/Exercise1'
import Sleep1 from './pages/Sleep1'
import Basic2 from './pages/Basic2'
import Basic3 from './pages/Basic3'
import Basic1 from './pages/prediction/Basic1'
import BasicInfo from './pages/prediction/BasicInfo'
import Diet2 from './pages/Diet2'
import { createContext } from 'react'
import Diet3 from './pages/Diet3'
import Results from './pages/Results/Results'
import Lifestyle from './pages/prediction/Lifestyle'
import Medical from './pages/prediction/Medical'
import Basic4 from './pages/prediction/Basic4'

export const dietContext = createContext()


function App() {
  const [diet, setDiet] = useState('');


  return (
    <>
      <dietContext.Provider value={[diet, setDiet]}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/BasicInfo' element={<BasicInfo />} />
          <Route path='/basic2' element={<Basic2 />} />
          <Route path='/basic3' element={<Basic3 />} />
          <Route path='/basic4' element={<Basic4 />} />
          <Route path='/diet' element={<Diet1 />} />
          <Route path='/diet2' element={<Diet2 />} />
          <Route path='/diet3' element={<Diet3 />} />
          <Route path='/exercise' element={<Exercise1 />} />
          <Route path='/sleep' element={<Sleep1 />} />
          <Route path='/lifestyle' element={<Lifestyle />} />
          <Route path='/Results' element={<Results />} />
          <Route path='/Medical' element={<Medical />} />

        </Routes>
      </dietContext.Provider>
    </>
  )
}

export default App
