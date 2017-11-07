import React from 'react'

const styles = {
  backgroundColor: 'gainsboro',
  width: 400,
  display: 'flex',
  flexDirection: 'column',
  justifyContent : 'space-between',
  alignItems: 'center',
  padding : 20,
  margin: 10,
}

const inputField = {
  width: 95,
  textAlign : 'center'
}

const person = (props) => {
  return ( 
    <div style={styles}>
      <h3>{props.nombre}</h3>
      <input style={inputField} type="text" onChange={props.changeName} value={props.nombre}/>
      <button onClick={props.click}>Delete person</button>
    </div>
  )  
}
export default person