import React from "react";
import { Button, Modal, Box } from "@mui/material";
import pass from "./images/Password Reset.png";
import "./band.css";
// import Mplan from "../components/Mplan";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
// import { Link } from "@mui/material";
// import Mplan from "./mplan";

const styleband = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: "auto",
  // backgroundColor:'white',

  backgroundImage:
    "linear-gradient(to right bottom, #976ba8, #a96498, #b55e86, #bb5c71, #bb5d5d)",

  // border: "2px solid #000",
  // boxShadow: 24,
  p: 4,
  borderRadius: 20,
  // boxShadow: "0 14.010417938232422 42.031253814697266 0 #0000000D inset",
};

const Bandwidth = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          color: "brown",
          textTransform: "capitalize",
          fontSize: "1rem",
        }}
      >
        <img src={pass} alt="" color="brown" height={35} width={40} />
        Change Bandwidth
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={styleband}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: "30px",
          }}
        >
          <Button
            style={{
              border: "0.1px solid",
              width: "300px",
              borderRadius: "20px",
              border:'none',
              outline:'none',
              background: "linear-gradient(#650b7c,#c31a1a)",
              boxShadow:
                "0px 14.010417938232422px 42.031253814697266px 0px #0000000D inset",
            }}
          >
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                border: "none",
                outline: "none",
              }}
              to={"/monthly"}
            >
              Monthly Premium Plan
            </Link>
          </Button>
          <br />
          <Button
            style={{
              color: "white",
              border: "1px solid",
              width: "300px",
              borderRadius: "20px",
              border: "none",
              outline: "none",
              background: "linear-gradient(#650b7c,#c31a1a)",
            }}
          >
            Quarterly Premium Plan
          </Button>{" "}
          <br />
          <Button
            style={{
              color: "white",
              border: "1px solid",
              width: "300px",
              border: "none",
              outline: "none",
              borderRadius: "20px",
              background: "linear-gradient(#650b7c,#c31a1a)",
              boxShadow:
                "0px 14.010417938232422px 42.031253814697266px 0px #0000000D inset",
            }}
          >
            Semi Annual Premium Plan
          </Button>{" "}
          <br />
          <Button
            style={{
              color: "white",
              border: "1px solid",
              width: "300px",
              borderRadius: "20px",
              border:'none',
              outline:'none',
              background: "linear-gradient(#650b7c,#c31a1a)",
            }}
          >
            Annual Premium Plan
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Bandwidth;
