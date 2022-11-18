import React from 'react'
import { Link } from 'react-router-dom'

const MacBookPro13 = () => {
  return (
    <div className="macbook-pro-13">
    <div className="macbook-pro-13-text text-center pt-5">
      <h1 className="mb-0 font-weight-bold">MacBook Pro 13"</h1>
      {/* <h3 className="macbook-super-m2 d-block mx-auto my-0"></h3> */}
      <p className="h6 text-muted">Available starting 6.24</p>
      <ul className="list-inline my-0">
        <li className="list-inline-item pr-2"><Link to="#">Learn more</Link></li>
        <li className="list-inline-item pl-3"><Link to="#">Order now</Link></li>
      </ul>
    </div>
    <div className="macbook-pro-13-image">
    </div>
  </div>

  )
}

export default MacBookPro13