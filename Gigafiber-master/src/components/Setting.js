import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Setting() {
  return (
    <div style={{ background: "white",display:'flex',justifyContent:'center',alignItems:'center' }}>
      <div
        style={{
          background: "linear-gradient(#460C4F73,#4F0C0CC2)",
          borderRadius: "20px",
          padding: "20px",
          width: "80%",
          height: "100vh",
        }}
      >
      <Link to={'/'}><ArrowBackIcon/></Link>

        <dt
          style={{
            fontFamily: " Poppins",
            fontSize: "4vw",
            fontWeight: "400",
            lineHeight: "33px",
            letterSpacing: "0em",
            textAlign: "left",
            padding: "40px",
          }}
        >
          Setting
        </dt>
        <dd>
          <Link
            to={"/Setnotification"}
            style={{
              textDecoration: "none",
              fontSize: "2.5vw",
              padding: "40px",
              fontFamily: " Poppins",
            //   fontSize: "4vw",
              fontWeight: "400",
              lineHeight: "33px",
              letterSpacing: "0em",
              textAlign: "left",
              padding: "40px",
            }}
          >
            {" "}
            <input type="radio" />
            Notification
          </Link>
        </dd>
      </div>
    </div>
  );
}

export default Setting;
