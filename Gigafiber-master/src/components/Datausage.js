import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./Style.css";

import "react-datepicker/dist/react-datepicker.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
// import Header from "./Header";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Datausage = () => {
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const handleChange = (range) => {
    const [startDate, endDate] = range;
    setStartDate(startDate);
    setEndDate(endDate);
  };
  return (
    <div
      style={{
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <div className="date-main">
          <label htmlFor="">From</label> 
          <DatePicker
            selectsStart
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            startDate={startDate}
            className="date"
          />
        </div> 
        <div className="date-main1">
          <label htmlFor="">To</label> 
          <DatePicker
            selectsEnd
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            endDate={endDate}
            startDate={startDate}
            minDate={startDate}
            className="date"
          />
        </div> */}
      <div className="main-container">
        <Link to={"/"} style={{position:'absolute',left:'5px',top:'30px'}}>
          <ArrowBackIosIcon />
        </Link>
        <form className="container" action="">
          <div className="container1">
            <fieldset className="legend">
              {/* <div> */}
              <legend>From</legend>
              <input type="date" name="start-date" className="boxx-width" />
              {/* </div> */}
            </fieldset>
            <fieldset className="legend">
              {/* <div> */}
              <legend>To</legend>
              <input type="date" name="end-date" className="boxx-width" />
              {/* </div> */}
            </fieldset>
          </div>
        </form>{" "}
        <br />
        <div className="container2">
          <div className="data-list">
            <p>Data</p>
            <p>Data Usage</p>
          </div>
          <div className="data-list">
            <p>02-07-2023</p>
            <p>1120.70MB</p>
          </div>
          <div className="data-list">
            <p>02-07-2023</p>
            <p>1120.70MB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datausage;
