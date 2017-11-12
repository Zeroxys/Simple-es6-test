import React from 'react'

const Galan = (props) => {
  return (
    <h3 onClick={props.click}>Soy un componente y me llamo {props.name}</h3>
  )
}

export default Galan
