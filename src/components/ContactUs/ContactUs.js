import React, { useState } from "react";
import "./ContactUs.css";
import contactUs from "../../../src/images/contact_us.jpg";
import axios from "axios";

const ContactUs = () => {
  const [values, setValues] = useState({
    Name: "",
    Email: "",
    Password: "",
    Message: "",
  });
  const handleEditcontactus = (e) => {
    e.preventDefault();
    axios.post("http://localhost:1234/contactus", values).then((res) => {
      console.log(values);
    });
  };

  return (
    <div className="container">
      <div className="row" style={{ position: "relative", top: "3rem" }}>
        <div className="col-6">
          <p className="titlestyle">Get In Touch</p>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control inputsapce"
                value={values.Name}
                onChange={(e) => setValues({ ...values, Name: e.target.value })}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Name"
              ></input>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control inputsapce"
                value={values.Email}
                onChange={(e) =>
                  setValues({ ...values, Email: e.target.value })
                }
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              ></input>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control inputsapce"
                value={values.Password}
                onChange={(e) =>
                  setValues({ ...values, Password: e.target.value })
                }
                id="exampleInputPassword1"
                placeholder="Password"
              ></input>
            </div>
            <div className="form-group">
              <textarea
                className="form-control inputsapce"
                value={values.Message}
                onChange={(e) =>
                  setValues({ ...values, Message: e.target.value })
                }
                id="exampleFormControlTextarea1"
                placeholder="Message"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={handleEditcontactus}
              className="btn btn-primary col-12"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="col-6 ">
          <img
            style={{ height: "400px" }}
            className="d-block w-100"
            src={contactUs}
            alt="First slide"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
