import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import NavBar from './components/NavBar'
import Contato from './pages/Contato'
import Home from './pages/Home'
import Produto from './pages/Produto'
import Sobre from './pages/Sobre'

const App = () => {
  return (
    <Router>
      <div className='min-h-screen bg-gray-50 text-gray-900'>
        <NavBar/>
          <main>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/sobre' element={<Sobre/>}/>
              <Route path='/produto' element={<Produto/>}/>
              <Route path='/contato' element={<Contato/>}/>
            </Routes>
          </main>
      </div>
    </Router>
  )
}

export default App
