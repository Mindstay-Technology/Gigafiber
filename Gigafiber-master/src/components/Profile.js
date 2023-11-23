import {
  Box,
  Modal,
  Button,
  List,
  ListItem,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import cam from "./images/cam.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";



const styleP = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  backgroundColor:'white',
  boxShadow: "0 14.010417938232422 42.031253814697266 0 #0000000D inset",
  borderRadius:'10px',
  padding:'20px',
  maxHeight: "100vh",  // Set a maximum height for the container
  overflowY: "auto",
};

const Profile = () => {
  const [openP, setOpenP] = useState(false);
  const handleOpenP = () => setOpenP(true);
  const handleCloseP = () => setOpenP(false);

  const pdetails = [
    { a: "Contact No.", b: "1234567899" },
    { a: "Email", b: "d&700@gmail.com" },
    { a: "Address", b: "Bangalore" },
    { a: "Service Adress", b: "xyz,Bangalore" },
    { a: "Pincode", b: 123456 },
  ];

  // const naviga te = useNavigate();

  return (
    <div >
    {/* // <Box > */}
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
        <Box style={styleP} >
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
                width={"200px"}
                // width={"auto"}
                // maxWidth={'200px'}

                style={{
                  borderRadius: "50%",
                }}
              />
              <button id="cam-button">
              {/* <input type="file" for='hi' style={{opacity:'0.1'}}/> */}
                <img src={cam} alt="" id="hi"  height={"auto"} />
              </button>
            </div>
            <div className="text-container" style={{ textAlign: "center" }}>
              <Typography
                style={{
                  color: "#055EB5",
                  fontSize: "3rem",
                  fontFamily: "Poppins",
                }}
              >
                Devaraj Satnoor
              </Typography>
              <Typography fontSize="2rem">Software Engineer</Typography>
            </div>
            <div>
              <List>
                <div
                  style={{
                    // display: "flex",
                    // flexDirection: "column",
                    // justifyContent:'space-around',
                    gap:'10px',
                    textAlignLast: "auto",
                    fontSize: "1rem",
                    fontFamily: "Poppins",
                    margin:'auto'
                  }}
                >
                  {pdetails.map((pdetail, index) => (
                    <ListItem key={index} sx={{display:'flex',gap:'400px',textAlign:'justify'}}>
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
          </div >
          </Box> 
      </Modal>
      </div>
  );
};

export default Profile;
