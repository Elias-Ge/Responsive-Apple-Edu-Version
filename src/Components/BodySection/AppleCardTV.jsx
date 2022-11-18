import React from 'react'
import { Link } from 'react-router-dom'

const AppleCardTV = () => {
  return (
    <div className="row app-card-tv">
    {/* <!-- Card Section --> */}
    <div className="col-md my-md-3 mr-md-2 ml-md-3 app-card">
      <div className="app-card-icon-text text-center pt-5 mt-3">
        <div className="app-card-icon d-block mx-auto">
        </div>
        <div className="app-card-text">
          <h3 className="h5 my-3">Get up to 3% Daily Cash back <br /> with every purchase.</h3>
          <ul className="list-inline">
            <li className="list-inline-item pr-2"><Link to="#">Learn more</Link></li>
            <li className="list-inline-item pl-3"><Link to="#">Apply now</Link></li>
          </ul>
        </div>
      </div>
      <div className="app-card-image">
      </div>
    </div>
    {/* <!-- TV Section --> */}
    <div className="col-md my-md-3 ml-md-2 mr-md-3 tv my-3">
      <div className="tv-icon-text pt-5">
        <div className="tv-icon d-block mx-auto">
        </div>
        <div className="cha-cha-icon my-3">
        </div>
        <div className="tv-text text-center">
          <Link className="stream" to="#">Stream now</Link>
        </div>
      </div>
      <div className="tv-image">
      </div>
    </div>
  </div>
  )
}

export default AppleCardTV