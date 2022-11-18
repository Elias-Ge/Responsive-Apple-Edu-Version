import React from 'react'
import { Link } from 'react-router-dom'

const MacBookAir = () => {
  return (
    <div className="macbook-air">
    <div className="macbook-air-text col-md-12">
      <h1 className="font-weight-bold">MacBook Air</h1>
      {/* <h3 className="super-air-m2"></h3> */}
      <p className="h6 text-muted">Available next month</p>
      <ul className="list-inline">
        <li className="list-inline-item pr-1"><Link to="#">Learn more</Link></li>
        <li className="list-inline-item pl-2"><Link to="#">View pricing</Link></li>
      </ul>
    </div>
  </div>
  )
}

export default MacBookAir