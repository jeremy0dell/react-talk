import React from 'react'

const MyComponent = ({ children }) =>
  <React.Fragment>
    { console.log(children) }
  </React.Fragment>

export const SecondComponent = ({ children }) => children({ name: 'Jeremy', company: 'Slalom', rating: 10 })

export default MyComponent
