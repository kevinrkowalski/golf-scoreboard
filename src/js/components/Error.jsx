import React from 'react'

const Error = ({ errors }) => {
  return (
    <div className="errors">
      {errors.map((error, i) => <p className="error" key={i}>{error}</p>)}
    </div>
  )
}

export default Error