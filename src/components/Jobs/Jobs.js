import React, { useEffect } from "react";
import "./Jobs.css";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getEmp } from "../../redux/JobActions";
const Jobs = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const { jobs } = useSelector((state) => state.users);

  console.log(jobs);
  // console.log(jobs.users.jobs);
  useEffect(() => {
    dispatch(getEmp());
  },
  );
  const applayjob = (id) => {
    navigate(`/applyjob/${id}`);
  };
  return (
    <>
      <div className="container-fluid " style={{ marginTop: "1rem" }}>
        <div className="row justify-content-center">
          <div className="col-8">
            <p className="title">To Apply any Job please Click on Card</p>
            {jobs &&
              jobs.map((job) => {
                return (
                  <div key={job.id} onClick={() => applayjob(job.id)}>
                    {/* <h3>{job.jobrole}</h3> */}
                    <Card className="Cardsty">
                      <Card.Body>
                        <Card.Title style={{ fontFamily: "ui-serif" }}>
                          {job.jobrole}
                        </Card.Title>
                        <Card.Subtitle style={{ fontFamily: "ui-serif" }}>
                          {job.company}
                        </Card.Subtitle>
                        <Card.Text className="cardtextfro">
                          <i className="fa-solid fa-suitcase iconclass"></i>
                          {job.experiance}Yrs
                        </Card.Text>
                        <Card.Text className="cardtextfro">
                          <i className="fa-solid fa-indian-rupee-sign iconclass"></i>
                          {job.salary}PA
                        </Card.Text>
                        <Card.Text className="cardtextfro">
                          <i className="fa-solid fa-location-dot iconclass"></i>
                          {job.location}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
