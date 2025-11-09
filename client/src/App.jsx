import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Services from './pages/Services'
import Home from './pages/Home'



function App() {

  return (
   <Router>
    <Routes>
      <Route  element={<Layout />}> 
        <Route path='/' element={ <Home/> } />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/services' element={<Services/>} />
      </Route>
    </Routes>
   </Router>
  )
}

export default App
