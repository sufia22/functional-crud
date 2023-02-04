import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Single.scss";

const Single = () => {
  const [student, setStudent] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5050/students/${id}`).then((res) => {
      setStudent(res.data);
    });
  }, []);
  return (
    <>
      <div className="single-box my-auto">
        <div className="header py-3 px-5 mb-5 bg-primary">
          <h2 className="text-white">Crud</h2>
          <Link className="btn header-btn mb-0" to={"/"}>
            Go back
          </Link>
        </div>
        <div className="container single-page">
          <div className="row">
            <div className="card shadow ">
              <div className="card-body d-flex">
                <div className="col-md-6">
                  <img className="single-photo" src={student.photo} alt="" />
                </div>
                <div className="col-md-6 ms-3 stu">
                  <div className="stu-info mt-4">
                    <h3 className="fw-bold">{student.name}</h3>
                    <hr />
                    <p>Age : {student.age}</p>
                    <p>Cell : {student.cell}</p>
                    <p>Location : {student.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
