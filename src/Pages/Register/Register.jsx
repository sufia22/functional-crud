import React, { Component } from "react";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {
        name: "",
        email: "",
        cell: "",
        skill: "",
        location: "",
      },
    };
  }

  render() {
    const { name, email, cell, skill, location } = this.state.input;

    // handle change
    const handleChange = (e) => {
      this.setState((prevState) => ({
        ...prevState,
        input: {
          ...prevState.input,
          [e.target.name]: e.target.value,
        },
      }));
    };

    return (
      <>
        <div className="box">
          <div className="container my-5">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="card shadow">
                  <div className="card-header">
                    <h3 className="text-center">Register</h3>
                  </div>
                  <div className="card-body">
                    <form action="">
                      <div className="my-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          name="name"
                          value={name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="my-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          value={email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="my-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Cell"
                          name="cell"
                          value={cell}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="my-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Skill"
                          name="skill"
                          value={skill}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="my-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Location"
                          name="location"
                          value={location}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="my-3">
                        <button type="submit" className="btn btn-primary w-100">
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
  }
}

export default Register;
