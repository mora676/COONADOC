import React from "react";
import { Link } from "react-router-dom";

const Options = () => {
  return (
    <div className="options-container">
      <ul>
          <Link to="subhome">
            <i className="bi bi-house-door"  />
          </Link>
          <Link to="seeclient">
            <i className="bi bi-gear" />
          </Link>
          <Link to="/documents">
            <i className="bi bi-file-earmark-text" />
          </Link>
      </ul>
    </div>
  );
};

export default Options;
