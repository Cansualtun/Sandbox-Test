import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">There is a technology world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information. It uses
          utility classNamees for typography and spacing to space content out
          within the larger container.
        </p>
        <p className="lead">
          <a className="btn btn-warning btn-lg" href="" role="button">
            Learn more
          </a>
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;