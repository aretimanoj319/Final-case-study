import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ApplyJob.css'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getEmp } from "../../redux/JobActions";

const ApplyJob=()=>{
    const params = useParams();
  const [simpleTextDisplay, setSimpleTextDisplay] = useState(false);
  const [values, setValues] = useState({
    JobId: params.id,
    Name: "",
    Email: "",
    Mobile: "",
    Experience: "",
  });
  const jobs =useSelector(state => state.users.jobs)
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmp());
  }, [dispatch]);

  const handleEditUser = (e) => {
    e.preventDefault();
  setValues({Name: "", Email: "", Mobile: "", Experience: "" });
  console.log(setValues);
  setSimpleTextDisplay(true);
  axios.post('http://localhost:1234/Appliedjobs',values).then(res => {
         console.log(values);
      })
    };
return (
    <>
    <div className="container">
            <div className="row" style={{position:"relative",top: "3rem"}}>
                <div className="col-12">
                <p className="titlestyle">Applay For Job</p>
              <form>
    <div className="form-group">
    <input type="text"  value={values.Name}  
     onChange={(e) => setValues({ ...values, Name: e.target.value })}
    className="form-control inputsapce" id="exampleInputEmail1" 
    aria-describedby="emailHelp" placeholder="Name"></input>
  </div>
  <div className="form-group">
    <input type="email"  value={values.Email} 
     onChange={(e) => setValues({ ...values, Email: e.target.value })}
    className="form-control inputsapce" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
  </div>
  <div className="form-group">
    <input type="number"  value={values.Mobile}
     onChange={(e) => setValues({ ...values, Mobile: e.target.value })} 
    className="form-control inputsapce" id="exampleInputPassword1" placeholder="Enter mobile number"></input>
    </div>
   
    <div className="form-group">
    <input type="text"  value={values.Experience}
     onChange={(e) => setValues({ ...values, Experience: e.target.value })}
     className="form-control inputsapce" id="exampleInputPassword1" placeholder="Experiance"></input>
    </div>
    <button type="submit"
     onClick={handleEditUser}
     className="btn btn-primary col-lg-12 col-12">Submit</button>
      {simpleTextDisplay ? (
          <div>
            <h1 className="text-danger">Application Details</h1>
            <h3>Job Id: {params.id}</h3>
            <p>{jobs[params.id].company}</p>
            <p>{jobs[params.id].salary}</p>
            <p>{jobs[params.id].location}</p>
            <p>{jobs[params.id].role}</p>
          </div>
        ) : (
          ""
        )}
    </form>
     </div>
    </div>
    </div>
    
    </>
    );
}
export default ApplyJob;