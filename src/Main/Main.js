import { useState } from "react";

import "./main.css";

import Validator from "./Validator/Validator";

const Main = () => {
  const [emailphone, setemailphone] = useState({ email: false, phone: false });
  const emailvarhandler = () => {
    setemailphone({ email: true, phone: false });
  };
  const phonevarhandler = () => {
    setemailphone({ email: false, phone: true });
  };
  const skiphandler = () => {
    console.log("skip");
    setemailphone({ email: false, phone: false });
  };
  let emailphoneobj = { email: "kb*****r@g***l.com", phone: "8*******9" };
  console.log();
  // let btn = (<button onClick={emailvarhandler}>Email verification</button>
  // <button onClick={phonevarhandler}>Phone verification</button>);
  return (
    <div className="Main">
      {!(emailphone.email || emailphone.phone) ? (
        <button className="btn" onClick={emailvarhandler}>
          Email verification
        </button>
      ) : null}
      {!(emailphone.email || emailphone.phone) ? (
        <button className="btn" onClick={phonevarhandler}>
          Phone verification
        </button>
      ) : null}
      {emailphone.email && (
        <Validator
          type={"email"}
          skip={skiphandler}
          content={emailphoneobj.email}
        ></Validator>
      )}
      {emailphone.phone && (
        <Validator
          type={"phone"}
          skip={skiphandler}
          content={emailphoneobj.phone}
        ></Validator>
      )}
    </div>
  );
};

export default Main;
