import React from 'react'
import { Link } from 'react-router-dom'

const Iphone13ProWatch = () => {
  return (
    // <!-- iPhone 13 pro && Watch Section -->
    <div className="row iphone-watch">
      <div className="iphone-13-pro col-md my-md-3 mr-md-2 ml-md-3">
        <div className="iphone-13-pro-text text-center pt-4 mt-3">
          <h1 className="font-weight-bold pt-4">iPhone 13 Pro</h1>
          <h3 className="h4 mt-0 mb-3">Oh. So. Pro.</h3>
          <ul className="list-inline">
            <li className="list-inline-item pr-2"><Link to="#">Learn more</Link></li>
            <li className="list-inline-item pl-3"><Link to="#">Buy</Link></li>
          </ul>
        </div>
        <div className="iphone-13-pro-image">
        </div>
      </div>
      {/* watch section */}
      <div className="watch pt-4 mt-3 col-md my-md-3 ml-md-2 mr-md-3">
        <div className="watch-icon-text text-center pt-4">
          <div className="watch-icon d-block mx-auto">
          </div>
          <div className="watch-text">
            <h3 className="h5 py-2">It's our largest display yet.</h3>
            <ul className="list-inline">
              <li className="list-inline-item pr-2"><Link to="#">Learn more</Link></li>
              <li className="list-inline-item pl-3"><Link to="#">Buy</Link></li>
            </ul>
          </div>
        </div>
        <div className="watch-image">
        </div>
      </div>
    </div>
  )
}

export default Iphone13ProWatch