import React from 'react'
import { Link } from 'react-router-dom'

const Iphone13 = () => {
  return (
    <div className="iphone-13">
    <div className="iphone-13-text text-center pt-4 mt-3 pt-md-5">
      <h1 className="font-weight-bold">iPhone 13</h1>
      <h3 className="h4 mt-2 mb-3">Your new superpower.</h3>
      <ul className="list-inline">
        <li className="list-inline-item pr-2"><Link to="#">Learn more</Link></li>
        <li className="list-inline-item pl-3"><Link to="#">Buy</Link></li>
      </ul>
    </div>
    <div className="iphone-13-image">
    </div>
  </div>
  )
}

export default Iphone13