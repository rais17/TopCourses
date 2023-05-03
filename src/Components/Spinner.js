import React from 'react'
import "./Spinner.css"
const Spinner = () => {
  return (
    <div className="flex flex-col items-center space-y-2 w-screen min-h-screen pt-32">
      <div className='spinner'></div>
      <p className="text-bgDark text-lg font-semibold">Loading....</p>
    </div>
  )
}

export default Spinner