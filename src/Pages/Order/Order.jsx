import { Component } from "react";

class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      bgColor: "pink",
    };
  }

  render() {
    const { counter, bgColor } = this.state;

    // handle bgcolor
    const handleBgColor = (color) => {
      this.setState((prevState) => ({
        ...prevState,
        bgColor: color,
      }));
    };

    return (
      <>
        <div className="box p-4" style={{ backgroundColor: bgColor }}>
          <div className="container my-5">
            <div className="row text-center">
              <div className="col">
                <h2>Class Component</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-5">
                <div className="card">
                  <div className="card-body">
                    <h1>{counter}</h1>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() =>
                        this.setState((prevState) => ({
                          ...prevState,
                          counter: prevState.counter - 1,
                        }))
                      }
                    >
                      --
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() =>
                        this.setState((prevState) => ({
                          ...prevState,
                          counter: prevState.counter + 1,
                        }))
                      }
                    >
                      ++
                    </button>
                    <hr />
                    <button
                      className="btn btn-danger"
                      onClick={() => handleBgColor("red")}
                    >
                      Red
                    </button>
                    <button
                      className="btn btn-success mx-2"
                      onClick={() => handleBgColor("green")}
                    >
                      Green
                    </button>
                    <button
                      className="btn btn-info"
                      onClick={() => handleBgColor("blue")}
                    >
                      Blue
                    </button>
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

export default Order;
