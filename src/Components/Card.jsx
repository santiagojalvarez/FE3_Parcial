import React from 'react'

const Card = ({nombre, color}) => {
    return (
        <div className='card'>
            <h1>Hola {nombre}</h1>
            <h3>Sabemos que tu color favorito es: {color}</h3>
        </div>
    )
}

export default Card