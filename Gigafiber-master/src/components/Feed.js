import { Avatar, ListItemText, Typography,List, ListItem, Box } from "@mui/material";
import React from "react";
import gig from "./images/giglog.png";
import Divider from "@mui/material/Divider";


const details={
  fontFamily:'Poppins'
}

const Feed = () => {
  const details = [
    { a: "Plan name", b: "anil" },
    { a: "Exp date", b: "23/10/25" },
    { a: "account type", b: "Prepaid" },
    { a: "Plan Price", b: "5000.00" },
    { a: "Data Speed", b: "100mb/sec" },
    // { c:"View Plan Info",d:"Add Extra GB"}
    
  ];

  return (
    <Box
      flex={3}
      width="100%"
    >
      <div 
        className="box"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          width: "100%",
          height: "auto",
          background: "white",
          borderRadius: "1rem",
          padding: "0.8rem",
        }}
      > 
        <div className="Avatar_Name" >
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <Avatar src="" alt="" />
            <Typography style={{ fontSize: "1rem" ,fontFamily:'Poppins' }}>Dev</Typography>
          </div>
          <Typography fontSize="1rem" fontFamily={'Poppins'}>Current Plans</Typography>
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://cdn.pixabay.com/photo/2023/09/27/03/00/residential-8278516_1280.jpg"
            height="auto"
            width={"90%"}
            alt=""
          />
        </div>{" "}
        <br />
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}
        >
          <List sx={{ width: "100%", maxWidth: 500, bgcolor: "" }}>
            {details.map((detail, index) => (
              <ListItem
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",

                  fontFamily:'Poppins'
                  // gap: "300px",
                  // textAlign: "justify",
                  // boxSizing: "border-box",
                }}
              >
                <ListItem
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    margin: "auto",
                  }}
                >
                  <Avatar src={gig} />
                  <ListItemText sx={{fontFamily:'Poppins'}}>{detail.a}</ListItemText>
                </ListItem>
                <ListItemText>{detail.b}</ListItemText>
              </ListItem>
            ))}
            <Divider
              variant="inset"
              style={{ width: "100%", position: "relative", right: "4.4rem" }}
            />
            <ListItem disablePadding sx={{display:'flex',justifyContent:'space-evenly',alignItems:'center',gap:'100px'}}>
              <Typography>View Plan Info</Typography>
              <Typography sx={{position:'relative',left:'66px'}}>Add Extra Gb</Typography>
            </ListItem>
          </List>
        </div>
      </div>
  </Box>
  );
};

export default Feed;
