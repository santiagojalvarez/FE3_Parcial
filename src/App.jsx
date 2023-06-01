
import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [usuario,setUsuario] = useState({
    nombre:"",
    color:""
  })

  const[show, setShow] = useState(false)
  const [error, setError] = useState(false)


  const handleSubmit = (e) =>{
    e.preventDefault()
    usuario.nombre.length > 3 && usuario.nombre[0] !== " " && usuario.color.length >= 6 ? setShow(true) : setError(true)
  }



  return (
    <div className='App'>
      <h1>Carga de estudiantes</h1>
      <form onSubmit={handleSubmit} className='form'>
        <label>Ingresa tu nombre:</label>
        <input type="text" onChange={(e)=> setUsuario({...usuario, nombre: e.target.value})}/>

        <label>Ingresa tu color favorito (formato HEX):</label>
        <input type="text" onChange={(e)=> setUsuario({...usuario,color: e.target.value})}/>
        <button type='submit'>ENVIAR</button>
      </form>

      { show && <Card nombre={usuario.nombre} color={usuario.color}/>}
      {error && <p className='error'>Por favor chequea que la informacion sea correcta</p>}
    </div>
  )
}

export default App
