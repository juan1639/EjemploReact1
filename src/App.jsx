import { useState } from 'react'
import { MostrarFoto } from './components/mostrarfoto.jsx'
import { url, apikey, urlhome, pexelsLogoWhite } from './constants/constants.js'

function App() {

  const [busqueda, setBusqueda] = useState('')
  const [mostrar, setMostrar] = useState(false)
  const [imagen, setImagen] = useState({})

  const actualizarInput = ({target}) => {
    setBusqueda(target.value)
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    if (busqueda === '') return
    
    fetch(
      `${url}${busqueda}`, {
        headers: {'Authorization': {apikey}}
      }
      )
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setImagen(data)
        setMostrar(true)
      })
  }

  return (
    <>
      <h1>Galeria de Imagenes</h1>

      <a href={urlhome} target='_blank'>
        <img src={pexelsLogoWhite} />
      </a>

      <form 
        className='formulario'
        onSubmit={handleSubmit}
      >
        <input 
          type='text'
          placeholder='Buscar imagenes...'
          onChange={actualizarInput}
          value = {busqueda}
        />

        <button>Buscar</button>
      </form>

      <MostrarFoto mostrar={mostrar} imagen={imagen}/>
    </>
  )
}

export default App
