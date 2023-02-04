import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: {
        name: "",
        email: "",
        cell: "",
        skill: "",
      },
    };
  }

  render() {
    const { title, subtitle } = this.props;
    const { name, email, cell, skill } = this.state.input;

    // handle input change
    const handleInputChange = (e) => {
      this.setState((prevState) => ({
        ...prevState,
        input: {
          ...prevState.input,
          [e.target.name]: e.target.value,
        },
      }));
    };

    return (
      <div className="box p-4">
        <div className="container my-5">
          <div className="row">
            <div className="col">
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-5">
              <div className="card">
                <div className="card-body">
                  <form action="">
                    <div className="my-3">
                      <label htmlFor="">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="my-3">
                      <label htmlFor="">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="my-3">
                      <label htmlFor="">Cell</label>
                      <input
                        type="text"
                        className="form-control"
                        name="cell"
                        value={cell}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="my-3">
                      <label htmlFor="">Skill</label>
                      <input
                        type="text"
                        className="form-control"
                        name="skill"
                        value={skill}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="my-3">
                      <button className="btn btn-primary">Register</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
