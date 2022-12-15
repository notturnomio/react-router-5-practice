import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page not found.</h2>
      <div>
        <Link className="btn" to="/quotes">
          Return
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
