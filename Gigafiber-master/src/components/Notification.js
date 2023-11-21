import React, { useState } from "react";
import {
  CssBaseline,
  Typography,
  List,
  ListItem,
  Divider,
  ListItemAvatar,
  Avatar,
  Box,
  Button,
  ListItemText,
  Badge,
  Modal,
  Hidden
} from "@mui/material";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
// import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Icons from "@mui/material/Icon";
import alarm from "./images/alarm.png";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShowMoreText from "react-show-more-text";

const styleN = {
  position: "absolute",
  top: "50%",
  left: "50%",
  // height:'100vh',
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "auto",
  bgcolor: "rgba(207, 216, 220, 1)",
  // border: "2px solid #000",
  boxShadow: 24,
  Typography: 4,
  borderRadius: "20px",
  outline: "none",
  // border:'none'
};

const Notification = () => {
  const [openN, setOpenN] = React.useState(false);
  const handleOpenN = () => setOpenN(true);
  const handleCloseN = () => setOpenN(false);

  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div>
      <Button onClick={handleOpenN}>
        <Badge badgeContent={4} color="success">
          <Hidden smDown><img src={alarm} alt="" height={50} width={50} /></Hidden>
          <Hidden smUp><NotificationsIcon sx={{color:'white',height:'40px',width:'40px'}}/></Hidden>
        </Badge>
      </Button>
      <Modal
        open={openN}
        onClose={handleCloseN}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={styleN} bgcolor="white">
          {/* <Notification /> */}
          <div style={{ borderRadius: "20px", width: "100%" }}>
            {/* <CssBaseline /> */}
            <div className="grid-container">
              <Typography variant="h5" className="sai" textAlign={"center"}>
                Notification
              </Typography>
              <div style={{ gap: "10px", display: "flex" }}>
                <Icons className="iconsgrid">
                  <DraftsOutlinedIcon color="secondary" />
                </Icons>
                <Icons className="iconsgrid" onClick={handleCloseN}>
                  <ClearOutlinedIcon onClose={handleCloseN} color="secondary" />
                </Icons>
              </div>
            </div>
            <Box padding={1.6}>
              <List
                sx={{
                  width: "100%",
                  // maxWidth: 360,
                  bgcolor: "#CFD8DC33",
                  // overflow: "scroll",
                }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Travis Howard"
                      src="/static/images/avatar/2.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Summer BBQ"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          to Scott, Alex, Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Cindy Baker"
                      src="/static/images/avatar/3.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Oui Oui"
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Sandra Adams
                        </Typography>
                        {" — Do you have Paris recommendations? Have you ever…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            </Box>
            <span
              style={{
                // height: "40px",
                background: "white",
                display: "block",
                textAlign: "center",
                width: "100%",
              }}
            >
              {isShowMore && (
                <p>
                  sapiente exercitationem odio quia, animi eos distinctio
                  tempora, ipsum hic vitae modi eum nostrum id perspiciatis
                  impedit dolores.
                </p>
              )}

              <Button onClick={toggleReadMoreLess} className="sai">
                {" "}
                {isShowMore ? "Read Less" : "Read More"}
              </Button>
            </span>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Notification;
