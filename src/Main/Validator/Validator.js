import { useState } from "react";
import "./Validator.css";

import {
  FaEnvelope,
  FaPaperPlane,
  FaMobileAlt,
  FaAngleRight,
} from "react-icons/fa";

const Validator = (props) => {
  const [sendverification, setsendverification] = useState(false);
  const sendverificationhandler = () => {
    setsendverification(true);
  };
  const skiphandler = () => {
    props.skip();
  };
  if (!sendverification) {
    return (
      <div className="Validator">
        <h2 className="valheading">{props.type.toUpperCase()} verification</h2>
        <span className="iconimage">
          {props.type === "email" ? <FaEnvelope /> : <FaMobileAlt />}
        </span>
        <h3>your {props.type} is not verified</h3>
        <p>
          send a verification {props.type === "email" ? "email" : "code"} to{" "}
          {props.content}
        </p>
        <button className="valbtn" onClick={sendverificationhandler}>
          send verification {props.type === "email" ? "email" : "code"}
        </button>
        <button className="skipbtn" onClick={skiphandler}>
          skip for now
          <span className="skipicon">
            <FaAngleRight />
          </span>
        </button>
      </div>
    );
  } else {
    return (
      <div className="Verification">
        <span className="iconimage">
          <FaPaperPlane />
        </span>
        <h3>
          check {props.type === "email" ? "email" : "code"} has been sent to you
        </h3>
        <p>
          Check the {props.type} that's associated with your account for the
          verification code
        </p>
        <label className="verilbl">verification code:</label>
        <input className="veriinput" type="text"></input>
        <button className="veribtn">verify</button>
        <button className="veribtn">
          sent me another {props.type === "email" ? "email" : "code"}
        </button>
        <button className="skipbtn" onClick={skiphandler}>
          skip for now
          <span className="skipicon">
            <FaAngleRight />
          </span>
        </button>
      </div>
    );
  }
};

export default Validator;
