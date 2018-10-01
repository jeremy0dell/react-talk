import React from 'react'

const Logger = ({ children, toLog, ...props }) =>
  <div>
    { children(toLog) }
  </div>

export default Logger
