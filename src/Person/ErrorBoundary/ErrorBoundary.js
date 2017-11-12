import React from 'react'

export default class ErrorBoundary extends Component {
  constructor () {
    super()
    this.state = {
      hasError : false,
      errorMessage : ''
    }
  }

  ComponentDidCatch = (err, info) => {
    
  }
 
  render () {
    return <h1>Something went wrong</h1>
  }
}
