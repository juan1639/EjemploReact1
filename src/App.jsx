import { useState } from 'react'
import { MostrarFoto } from './components/mostrarfoto.jsx'
import { url, apikey, urlhome, pexelsLogoWhite } from './constants/constants.js'
import './App.css'

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

      <form 
        className='formulario'
        onSubmit={handleSubmit}
      >
        <a href={urlhome} target='_blank'>
          <img src={pexelsLogoWhite} />
        </a>

        <section className='input-button'>
          <input 
            type='text'
            placeholder='Buscar imagenes...'
            onChange={actualizarInput}
            value = {busqueda}
          />

          <button>Buscar</button>
        </section>

      </form>

      <section className='seccion-fotos'>
        {
          mostrar
          ? imagen.photos.map((foto, index) => {
          
            return (
              <MostrarFoto alt={foto.alt} key={foto.id} src={foto.src.large} fotografo={foto.photographer}/>
            )
          })
          : <p>...</p>
        }
      </section>

    </>
  )
}

export default App
