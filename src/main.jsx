import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Clients from './pages/Clients'
import About from './pages/About'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<App />}>

          <Route index element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/clients' element={<Clients />} />

        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)


// app>about. app--->outlet



// TODO: Come back after understanding the useState and UseEffect to implement dropdown menu in navbar.jsx only for mobile view., 
