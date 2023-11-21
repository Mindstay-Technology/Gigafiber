import {
  Box,
  Avatar,
  Modal,
  Button,
  List,
  ListItem,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import cam from "./images/cam.png";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import "./Profile.css"
const styleP = {
  // position: "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  // width: "80%",
  // height: "auto",
  bgcolor: "whitesmoke",

  // border: "2px solid #000",
  // boxShadow: 24,
  // p: 4,
  
  // padding: "200px",
  // boxShadow: "0 14.010417938232422 42.031253814697266 0 #0000000D inset",
};

const Profile = () => {
  const [openP, setOpenP] = useState(false);
  const handleOpenP = () => setOpenP(true);
  const handleCloseP = () => setOpenP(false);

  const pdetails = [
    { a: "Contact No.", b: "1234567899" },
    { a: "Email", b: "d&700@gmail.com" },
    { a: "Email", b: "d&700@gmail.com" },
    { a: "Email", b: "d&700@gmail.com" },
    { a: "Address", b: <textfield>frtyuiggtyui</textfield> },
  ];

  const navigate = useNavigate();

  return (
    // <div>
    <Box >
      <Button
        id="basic-button"
        aria-controls={openP ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openP ? "true" : undefined}
        onClick={handleOpenP}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ textTransform: "capitalize", fontSize: "1rem", color: "brown" }}
      >
        Profile
      </Button>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={openP}
        onClose={handleCloseP}
      >
        {/* <div> */}
          
        <Box className={styleP} > 
          <div
            className="container"
            style={{ padding: "20px" }}
          >
            <div className="photocontainer">
              <Button onClick={handleCloseP} sx={{position:'absolute',left:'10%',top:'5%'}}>
                <ArrowBackIcon />
              </Button>
              <img
                src="https://cdn.pixabay.com/photo/2023/09/18/13/46/building-8260627_640.jpg"
                alt="img"
                height={"200px"}
                // width={"90%"}
                width={"auto"}
                // maxWidth={'200px'}

                style={{
                  borderRadius: "50%",
                  // maxWidth: "65%",
                  minWidth: "100px",
                }}
              />
              <button id="cam-button">
                <img src={cam} alt="" height={"auto"} />
              </button>
            </div>
            <div className="text-container" style={{ textAlign: "center" }}>
              <Typography
                style={{
                  marginTop: "opx",
                  marginBottom: "0px",
                  color: "#055EB5",
                  fontSize: "3rem",
                  fontFamily: "Poppins",
                }}
              >
                Devaraj Satnoor
              </Typography>
              <Typography fontSize="2rem">Software Engineer</Typography>
            </div>
            {/* </div> */}
            <div>
              {/* <div style={{ display: "flex", gap: "0.5rem" }}>
              <Avatar src="" alt="" />
              <span style={{ fontSize: "1rem" }}>Contact No</span>
            </div>
            <Typography variant="h6">12345678</Typography>
          </div>{" "}
          <br />
          <div className="profile-details">
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <Avatar src="" alt="" />
              <span style={{ fontSize: "1rem" }}>Contact No</span>
            </div> */}
              {/* <Typography variant="h6">12345678</Typography> */}
              <List>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlignLast: "auto",
                    fontSize: "1rem",
                    fontFamily: "Poppins",
                  }}
                >
                  {pdetails.map((pdetail, index) => (
                    <ListItem key={index}>
                      <ListItem>
                        <IconButton></IconButton>
                        <p>{pdetail.a}</p>
                      </ListItem>
                      <p>{pdetail.b}</p>
                    </ListItem>
                  ))}
                </div>
              </List>
            </div>
          </div>
          </Box>
        {/* </div> */}
      </Modal>
    </Box>
  );
};

export default Profile;
