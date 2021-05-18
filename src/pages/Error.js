import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>error page</h2>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
