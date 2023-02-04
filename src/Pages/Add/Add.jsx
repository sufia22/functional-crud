import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Add.scss";

const Add = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    cell: "",
    location: "",
    photo: "",
  });
  const navigate = useNavigate();

  // handle input
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // handle form
  const handleForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5050/students", input).then((res) => {
      setInput({
        name: "",
        age: "",
        cell: "",
        location: "",
        photo: "",
      });
    });
    navigate("/");
  };

  return (
    <>
      <div className="add">
        <div className="header py-3 px-5 mb-5 bg-primary">
          <h2 className="text-white">Crud</h2>
          <Link className="btn header-btn mb-0" to={"/"}>
            Go back
          </Link>
        </div>
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="card shadow">
                <div className="card-header d-flex align-middle justify-content-between">
                  <h3>Add student</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={handleForm}>
                    <div className="my-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        value={input.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="my-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Age"
                        name="age"
                        value={input.age}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="my-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Cell"
                        name="cell"
                        value={input.cell}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="my-3">
                      <input
                        type="text"
                        className="form-control"
                        name="location"
                        placeholder="Location"
                        value={input.location}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="my-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Photo"
                        name="photo"
                        value={input.photo}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="my-3">
                      <button className="btn btn-primary w-100">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
