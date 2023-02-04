import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Home.scss";
import Modal from "../../Components/Modal/Modal";
import swal from "sweetalert";

const Home = () => {
  const [students, setStudents] = useState([]);
  // const [modalShow, setModalShow] = useState(false);

  // handle view

  // handle delete
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`http://localhost:5050/students/${id}`).then((res) => {
          setStudents(students.filter((data) => data.id !== id));
        });
      }
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5050/students?_sort=id&_order=desc")
      .then((res) => {
        setStudents(res.data);
      });
  }, [setStudents]);

  return (
    <>
      <div className="header py-3 px-5 mb-5 bg-primary">
        <h2 className="text-white">Crud</h2>
        <Link className="btn header-btn mb-0" to={"/create"}>
          Add student
        </Link>
      </div>
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-header bg-black">
                <h3 className="text-white text-center">Student Information</h3>
              </div>
              <div className="card-body">
                <table className="table table-striped table-border">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Cell</th>
                      <th>Location</th>
                      <th>Photo</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((stu, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{stu.name}</td>
                        <td>{stu.age}</td>
                        <td>{stu.cell}</td>
                        <td>{stu.location}</td>
                        <td>
                          <img className="table-photo" src={stu.photo} alt="" />
                        </td>

                        <td>
                          <Link
                            to={`/user/${stu.id}`}
                            className="btn btn-sm btn-primary mx-1"
                          >
                            <i class="bx bx-show"></i>
                          </Link>
                          <Link
                            to={`/edit/${stu.id}`}
                            className="btn btn-sm btn-warning mx-1"
                          >
                            <i class="bx bx-edit"></i>
                          </Link>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(stu.id)}
                          >
                            <i class="bx bx-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
