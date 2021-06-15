import React from 'react'

const Error = ({ errors }) => {
  if (errors.length === 0) return null

  return (
    <div className="errors">
      {errors.map((error, i) => <p className="error" key={i}>{error}</p>)}
    </div>
  )
}

export default Error