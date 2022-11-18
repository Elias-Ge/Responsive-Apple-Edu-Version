import React from "react"
import { Link } from 'react-router-dom'

const UnicefSection = () => {
  return (
    <div className="unicef-icon-text d-md-flex">
      <div className="unicef-icon col-md-4">
      </div>
      <div className="unicef-text col-md-8 text-md-left">
        <Link className="unicef-text" to="/donate/">
          Donate to support families affected by the war in Ukraine
        </Link>
      </div>
    </div>
  );
};

export default UnicefSection;
