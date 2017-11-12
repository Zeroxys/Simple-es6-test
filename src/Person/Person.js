import React from 'react'
import Radium from 'radium'

const styles = {
  backgroundColor: 'gainsboro',
  width: 400,
  display: 'flex',
  flexDirection: 'column',
  justifyContent : 'space-between',
  alignItems: 'center',
  padding : 20,
  margin: 10,
  boxShadow: '2px 2px 2px #000000',
  ':hover' : {
    backgroundColor: 'crimson',
    color: 'grey'
  },

  mediaQueries : {
    '@media (min-width: 500px)' : {
      backgroundColor: 'grey'
    }
  }
}

const inputField = {
  width: 95,
  textAlign : 'center'
}

const Person = (props) => {
  return ( 
    <div style={[styles, styles.mediaQueries]}>
      <h3>{props.nombre}</h3>
      <input style={inputField} type="text" onChange={props.changeName} value={props.nombre}/>
      <button onClick={props.click}>Delete person</button>
    </div>
  )  
}
export default Radium(Person)