import React from 'react'
import { Link } from 'react-router-dom'

const IpadairFitness = () => {
  return (
    // <!-- iPadair && Fitness+ Section -->
    <div className="row ipadair-fitness">
      {/* <!-- iPadair Section --> */}
      <div className="col-md my-md-0 mr-md-2 ml-md-3 ipadair">
        <div className="ipadair-icon-text text-center pt-4">
          <div className="ipadair-icon d-block mx-auto mt-5">
          </div>
          <div className="ipadair-text">
            <h3 className="h5 mt-2 mb-3">Light. Bright. Full of might.</h3>
            <ul className="list-inline">
              <li className="list-inline-item pr-2"><Link to="#">Learn more</Link></li>
              <li className="list-inline-item pl-3"><Link to="#">Buy</Link></li>
            </ul>
          </div>
        </div>
        <div className="ipadair-image">
        </div>
      </div>
      {/* Fitness+ Section */}
      <div className="col-md my-md-0 ml-md-2 mr-md-3 fitness">
        <div className="fitness-icon-text text-center pt-5 mt-3">
          <div className="fitness-icon d-block mx-auto">
          </div>
          <div className="fitness-text">
            <h3 className="h5 my-2">New Artist Spotlight workouts <br/> with music by Katy Perry.</h3>
            <ul className="list-inline">
              <li className="list-inline-item pr-2"><Link to="#">See what's new</Link></li>
              <li className=" try list-inline-item pl-3"><Link to="#">Try it free <sup>1</sup></Link></li>
            </ul>
          </div>
        </div>
        <div className="fitness-image">
        </div>
      </div>
    </div>
  )
}

export default IpadairFitness