import { useState } from 'react'

/* curl -H "Authorization: qAmiTYELg6N6SzyZXYtTDlNiANi2Ff8lrgdp7Qh0Lb8t4gmHvbwRBVAC" \
  "https://api.pexels.com/v1/search?query=people" */

function App() {
  const [busqueda, setBusqueda] = useState('')
  const [mostrar, setMostrar] = useState(false)
  const [imagen, setImagen] = useState({})

  const actualizarInput = (e) => {

    setBusqueda(e.target.value)
  }

  const handleSubmit = (e) => {

    e.preventDefault()

    if (busqueda === '') return
    
    fetch(
      "https://api.pexels.com/v1/search?query=people", {
        headers: {'Authorization': 'qAmiTYELg6N6SzyZXYtTDlNiANi2Ff8lrgdp7Qh0Lb8t4gmHvbwRBVAC'}
      }
      )
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setImagen(data)
        setMostrar(true)
      })

    // setMostrar(true)
    // setImagen(data)
  }

  return (
    <>
      <h1>Galeria de Imagenes</h1>

      <form 
        className='formulario'
        onSubmit={handleSubmit}
      >
        <input 
          type='text'
          placeholder='Introduce busqueda'
          onChange={actualizarInput}
          value = {busqueda}
        />

        <button>Buscar</button>
      </form>

      {mostrar && <img alt='imagen gato' src={imagen.photos[5].src.small}/>}
    </>
  )
}

export default App
