import React from "react";
import man from "./images/man.png";
import man1 from "./images/manback.png";
import gig from "./images/giglog.png";
import { Divider } from "@mui/material";
import "./Style2.css";
import {
  List,
  ListItem,
  ListItemText,
  Box,
  Avatar,
  Typography,
} from "@mui/material";

function Moredetail() {
  return (
    <div className="more-main" style={{ background: "white" }}>
      <div className="more-bar">
        <img src={man} height={400} width={380} alt="" />
        <img src={man1} height={500} width={600} alt="" className="img2" />
      </div>
      <Box
        //   onClick={handleClose}
        display={"flex"}
        flexDirection={"coloumn"}
        gap={20}
        justifyContent={"center"}
        alignItems={"center"}
        className="box3rd"
      >
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "" }}>
          {[1, 2, 3, 4, 5].map((value) => (
            <ListItem key={value} disableGutters sx={{ gap: "10px" }}>
              <Avatar src={gig} />
              <ListItemText primary={`name ${value}`} />
              <Typography>gfhj</Typography>
            </ListItem>
          ))}
          <Divider
            variant="inset"
            style={{ width: "100%", position: "relative", right: "4.4rem" }}
          />
        </List>
      </Box>
    </div>
  );
}

export default Moredetail;
