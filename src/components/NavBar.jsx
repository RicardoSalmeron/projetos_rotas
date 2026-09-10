import {Link} from 'react-router-dom'
import {Home, Info, Phone, Headset, FlaskConical,} from "lucide-react"

const navbar = () => {
  return (
    <>
        <nav className='flex justify-between bg-gray-800 text-gray-50 p-2'>
        <h1>Projeto <span className='font-medium text-cyan-300'>Rotas</span></h1>
        <div className='flex gap-3'>
                  <Link to="/" className=' flex items-center font-medium hover:text-gray-500 gap-0.5'><Home/>Home</Link>
                  <Link to="/sobre" className='flex items-center font-medium hover:text-gray-500 gap-0.5'><Info/>Info</Link>
                  <Link to="/produto" className=' flex items-center font-medium hover:text-gray-500 gap-0.5'> <FlaskConical/>Produto</Link>
        <Link to="/contato" className=' flex items-center font-medium hover:text-gray-500 gap-0.5'><Headset/>Contato</Link>
        </div>
        </nav>
    </>
  )
}

export default navbar
