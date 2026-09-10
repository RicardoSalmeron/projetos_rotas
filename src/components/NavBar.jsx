import {Link} from 'react-router-dom'


const navbar = () => {
  return (
    <>
        <div className='flex justify-between bg-gray-800 text-gray-50'>
        Projeto Rotas
        <div className='flex gap-3'>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/produto">Produto</Link>
        <Link to="/contato">Contato</Link>
        </div>
        </div>
    </>
  )
}

export default navbar
