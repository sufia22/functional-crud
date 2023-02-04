import React, { useState } from "react";

const Contact = ({ title }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container my-5">
      <br />
      <hr />
      <br />
      <div className="row text-center">
        <div className="col">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <h1>{counter}</h1>
              <button
                onClick={() => setCounter((prevState) => prevState - 1)}
                className="btn btn-sm btn-danger"
              >
                --
              </button>
              &nbsp;
              <button
                onClick={() => setCounter((prevState) => prevState + 1)}
                className="btn btn-sm btn-warning"
              >
                ++
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
