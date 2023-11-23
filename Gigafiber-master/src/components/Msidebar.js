import * as React from "react";
import Box from "@mui/material/Box";
import { List, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import logo from "./images/giglog.png";
import GridViewOutlined from "@mui/icons-material/GridViewOutlined";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import data from "./images/Data Backup.png";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import privacy from "./images/priivacy1.png";
import speed from "./images/Speed.png";
import logout from "./images/logoutcurve.png";
import share from "./images/share.png";
import setting from "./images/setting.png";
import about from "./images/about.svg";
import Logout from "./Logout";
import SpeedIcon from "@mui/icons-material/Speed";
import MenuIcon from "@mui/icons-material/Menu";
import RecyclingIcon from "@mui/icons-material/Recycling";
import card from "./images/Card Payment.png";
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import Bandwidth from "./Bandwidth";
import "./Header.css"

const style = {
  position: "absolute",
  top: "145px",
  left: "5px",
  // top: '-190px',
  // left: '25%',
  // transform: 'translate(-50%, -50%)',
  width: 300,
  // height:'auto',
  // overFlow:'auto',
  bgcolor: "background.paper",
  border: "0.1px solid #000",
  boxShadow: 24,
  p: 4,
  fontFamily: "Poppins",
  fontSize: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  
  // alignItems:'center'
};


const div ={
                  display: "flex",
                  flexDirection: "row",
                  gap: "24px",
                  alignItems: "center",
                  marginLeft: "10px",
                  marginBottom: "10px",
                
}

const link={
  textDecoration:'none',
  
}

export default function Msidebar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Refer = useNavigate()
  const handleClick =() =>{
      Refer("/referal")
  }
  return (
    <div style={{ height: "auto", overflow: "scroll" }}>
      <Button onClick={handleOpen}>
        {/* <img src={logo} height={55} width={50} alt="" /> */}
        <MenuIcon className="menu" sx={{ height: "50px", width: "50px", color: "white" }} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={style}>
          <List sx={{ overflow: "scroll" }}>
            <Link to={"/bandwidthm"} style={link}>
              <div
                style={div}
              >
                <RecyclingIcon sx={{color:'brown',height:'40px',width:'40px'}}/>
                <Typography sx={{color:'brown'}}>Change Bandwidth</Typography>
              </div>
            </Link>
            <Link to={"/bandwidthm"} style={link}>
              <div
                style={div}
              >
                <img src={card} alt="'" height={40} width={40} />
                <Typography sx={{color:'brown'}}>Change Payterm</Typography>
              </div>
            </Link>
            <Link to={"/Datausage"} style={link}>
              <div
                style={div}
              >
                <img src={data} height='40px' width='40px' />
                <Typography sx={{color:'brown'}}>Data Usage</Typography>
              </div>
            </Link>
            <Link to={"/setting"} style={link}>
              <div
                style={div}
              >
                <img src={setting} height="40px" width={"40px"} />
                <Typography sx={{color:'brown'}}>Setting</Typography>
              </div>
            </Link>
            <Link to={""} style={link}>
              <div
                style={div}
              >
                {/* <RecyclingIcon /> */}
                <SpeedIcon
                  style={{
                    height: "1.5em",
                    width: "1.5em",
                    color: "brown",
                  }}
                />
                <Typography sx={{color:'brown'}}>Speed Test</Typography>
              </div>
            </Link>
            <Link to={"/Agreement"} style={link}>
              <div
                style={div}
              >
                {/* <RecyclingIcon /> */}<img src={privacy} height={"40px"} width={"40px"} />
                <Typography sx={{color:'brown'}}>Privacy Policy</Typography>
              </div>
            </Link>
            <Link to={"/referm"}  style={link}>
              <div 
                style={div} 
              >
                <ShareRoundedIcon sx={{color:'brown',height:'38px',width:'38px'}}/>
                <Typography sx={{color:'brown'}}>Refer a Friend</Typography>
              </div>
            </Link>
            <Link to={"/logoutm"} style={link}>
              <div
                style={div}
              >
              <img src={logout} alt="" height={"30em"} width={"30em"} />
                <Typography sx={{color:'brown'}}>Log Out</Typography>
              </div>
            </Link>
            <Divider />
            <Link to={""} style={link}>
              <div
                style={div}
              >
                <ForumOutlinedIcon
                  sx={{ color: "brown", height: "35px", width: "35px" }}
                />
                <Typography  sx={{color:'brown'}}>Chat</Typography>
              </div>
            </Link>
          </List>
        </Box>
      </Modal>
    </div>
  );
}
