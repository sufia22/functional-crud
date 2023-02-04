import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    cell: "",
    location: "",
    photo: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

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
    axios.patch(`http://localhost:5050/students/${id}`, input);
    navigate("/");
  };

  useEffect(() => {
    axios.get(`http://localhost:5050/students/${id}`).then((res) => {
      setInput(res.data);
    });
  }, []);

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
                  <h3>Edit student</h3>
                </div>
                <div className="card-body">
                  <form onSubmit={handleForm}>
                    <div className="my-3">
                      <label htmlFor="">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={input.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="my-3">
                      <label htmlFor="">Age</label>
                      <input
                        type="text"
                        className="form-control"
                        name="age"
                        value={input.age}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="my-3">
                      <label htmlFor="">Cell</label>
                      <input
                        type="text"
                        className="form-control"
                        name="cell"
                        value={input.cell}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="my-3">
                      <label htmlFor="">Location</label>
                      <input
                        type="text"
                        className="form-control"
                        name="location"
                        value={input.location}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="my-3">
                      <label htmlFor="">Photo</label>
                      <input
                        type="text"
                        className="form-control"
                        name="photo"
                        value={input.photo}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="my-3">
                      <button className="btn btn-primary w-100">Update</button>
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

export default Edit;
