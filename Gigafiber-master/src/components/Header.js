import * as React from "react";
import { styled, useTheme, useState } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import {
  Avatar,
  Stack,
  Menu,
  MenuItem,
  Button,
  Badge,
  Grid,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import gig from "./images/giglog.png";
import { purple } from "@mui/material/colors";
import Feed from "./Feed";
import Rightbar from "./Rightbar";
import Mnavinner from "./Mnavinner";
import alarm from "./images/alarm.png";
import home from "./images/home.png";
import reciept from "./images/Receipt.png";
import request from "./images/request.png";
import offer from "./images/Discount.png";
import pass from "./images/Password Reset.png";
import card from "./images/Card Payment.png";
import bglogo from "./images/biglogo.png";
import plan from "./images/plans.png";
import data from "./images/Data Backup.png";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import privacy from "./images/priivacy1.png";
import speed from "./images/Speed.png";
import logout from "./images/logoutcurve.png";
import share from "./images/share.png";
import setting from "./images/setting.png";
import about from "./images/about.svg";
import Modal from "@mui/material/Modal";

import Bill from "./Bill";
import Notification from "./Notification";
import Profile from "./Profile";
import Logout from "./Logout";
import Offers from "./Offers";
import Referal from "./Referal";
import GridViewOutlined from "@mui/icons-material/GridViewOutlined";
import SpeedIcon from "@mui/icons-material/Speed";
import Bandwidth from "./Bandwidth"
import { Link } from "react-router-dom";
import "./Style.css";
import Hidden from "@mui/material/Hidden";
import Msidebar from "./Msidebar";
import "./Header.css";

const drawerWidth = 140;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(6)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(5.6)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  background:'antiquewhite',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

//notification

//bills
const styleB = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "whitesmoke",
  // border: "2px solid #000",
  // boxShadow: 24,
  p: 4,
  borderRadius: 10,
  // boxShadow: "0 14.010417938232422 42.031253814697266 0 #0000000D inset",
};

//profile

export default function Header() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //menu

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openn = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosep = () => {
    setAnchorEl(null);
  };

  //Bills

  const [openB, setOpenB] = React.useState(false);
  const handleOpenB = () => setOpenB(true);
  const handleCloseB = () => setOpenB(false);

  //profile

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          // background: "none",
          // background: "rgba(217, 234, 255, 1)",
          background: "white",
          height: "90px",
          display: "flex",
          justifyContent: "center",
          border: "none",
        }}
      >
        <div className="mbnav">
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              border: "1px solid brown",
              borderRadius: "10px",
            }}
          >
            <Hidden smDown>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 1,
                  ...(open && { display: "none" }),
                }}
              >
                <img
                  src={gig}
                  alt=""
                  style={{
                    paddingLeft: "4px",
                    marginBottom: "3px",
                    marginRight: "0px",
                  }}
                  height={45}
                  width={45}
                />
              </IconButton>
            </Hidden>
            {/* <Typography variant="h6" noWrap component="div"> */}
            <Hidden smDown>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon
                  sx={{
                    color: "brown",
                    // display: 'none',
                    // color: 'linear-gradient(to right , #3c033d, #b50505)',
                    fontSize: 40,
                    position: "relative",
                    // left: "0.8rem",
                  }}
                />
              </IconButton>
            </Hidden>
            {/* <Hidden smUp> */}
            {/* <IconButton> */}{" "}
            {/* <img
                  src={gig}
                  alt=""
                  style={{
                    paddingLeft: "4px",
                    marginBottom: "3px",
                    marginRight: "0px",
                  }}
                  height={55}
                  width={55}
                /> */}
            {/* <Msidebar /> */}
            {/* </IconButton> */}
            {/* </Hidden> */}
            {/* Mini variant drawer */}
            {/* </Typography> */}
            {/* innernav */}
            <Hidden smDown>
              <div
                style={{
                  // height: "45px",
                  height: "auto",
                  width: "100%",
                  border: "1px solid rgba(195, 26, 127, 0.2)",
                  borderRadius: "30px",
                }}
              >
                <nav
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    // marginTop: "10px",
                  }}
                >
                  <a href="#" className="atag" style={{ fontSize: "1.2vw" }}>
                    <img src={home} alt="'" height={22} width={22} />
                    Home
                  </a>

                  {/* Bills */}

                  <Button
                    className="atag"
                    onClick={handleOpenB}
                    style={{
                      color: "brown",
                      textTransform: "capitalize",
                      fontSize: "1.2vw",
                    }}
                  >
                    <img
                      src={reciept}
                      alt="'"
                      color="brown"
                      height={30}
                      width={30}
                    />
                    Bills
                  </Button>
                  <Modal
                    open={openB}
                    onClose={handleCloseB}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={styleB}>
                      <Bill />
                    </Box>
                  </Modal>

                  {/* bandwidth */}
                  <div>
                    <Bandwidth />
                  </div>

                  <Link to={'/BandwidthM'} className="atag" style={{ fontSize: "1.2vw" }}>
                    <img src={card} alt="'" height={30} width={30} />
                    Change Payterm
                  </Link>

                  {/* offers */}

                  <div>
                    <Offers />
                  </div>
                  <Button
                    style={{
                      // height: "30px",
                      height: "auto",
                      width: "auto",
                      border: "1px solid",
                      borderRadius: "30px",
                      background:
                        "linear-gradient(180deg, #730684 0%, #B50510 100%)",
                      color: "whitesmoke",
                      fontSize: "1vw",
                    }}
                  >
                    New Connection
                  </Button>
                </nav>
              </div>
            </Hidden>
            <Hidden smUp>
              <h4
                style={{
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: "1.2rem",
                }}
              >
                Dev Satnoor
              </h4>
            </Hidden>
            <span style={{ width: "6rem" }}></span>
            {/* Notification */}
            <div>
              <Notification />
            </div>

            {/* menu */}
            
            <Hidden smDown>
              <div>
                <Button
                  className="trans"
                  onClick={handleClick}
                  // sx={{ height: "20px", width: "5px" }}
                >
                  <Avatar src="" sx={{ height: "50px", width: "50px" }} />
                </Button>

                <Menu
                  // id="basic-menu"
                  anchorEl={anchorEl}
                  open={openn}
                  onClose={handleClosep}
                  // MenuListProps={{
                  //   "aria-labelledby": "basic-button",
                  // }}
                >
                  <MenuItem>
                    <Profile />
                    {/* <Profile1 /> */}
                  </MenuItem>
                  <Button>
                    <MenuItem
                      onClick={handleClosep}
                      sx={{
                        color: "brown",
                        fontSize: "1rem",
                        textTransform: "capitalize",
                      }}
                    >
                      My Menu
                    </MenuItem>
                  </Button>{" "}
                  <br />
                  <Button sx={{ padding: "0.5px" }}>
                    <MenuItem
                      // onClick={handleClosep}
                      sx={{ color: "brown", fontSize: "1rem" }}
                    >
                      <Referal />
                    </MenuItem>
                  </Button>
                  <MenuItem>
                    <Logout />
                  </MenuItem>
                </Menu>
              </div>
            </Hidden>
            <Hidden className="menu" smUp>
              <IconButton>
                <Msidebar />
              </IconButton>
            </Hidden>
          </Toolbar>
        </div>
      </AppBar>
      <Hidden smDown>
        <Drawer variant="permanent" open={open} className="drawer">
          <DrawerHeader sx={{ mt: "12px", mb: "6px" }}>
            <IconButton onClick={handleDrawerClose}>
              {/* {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )} */}
              <img src={bglogo} alt="" height={50} width={120} />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List sx={{ marginBottom: "50px", height: "200vh", background:'antiquewhite', }}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "14px",
                  alignItems: "center",
                  marginLeft: "10px",
                  marginBottom: "10px",
                }}
              >
                <GridViewOutlined
                  sx={{ height: "22px", width: "22px", color: "brown" }}
                />{" "}
                <Typography sx={{ fontSize: "0.8rem" }} color={"brown"}>
                  Plans
                </Typography>
              </div>
            </Link>{" "}
            <Link to={"/Datausage"} style={{ textDecoration: "none" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "14px",
                  alignItems: "center",
                  marginBottom: "10px",
                  marginLeft: "10px",
                }}
              >
                <img src={data} height={"24em"} width={"24em"} />
                <Typography sx={{ fontSize: "0.8rem" }} color={"brown"}>
                  Data Uasage
                </Typography>
              </div>
            </Link>{" "}
            {/* <br /> */}
            <Link to={"/Setting"} style={{ textDecoration: "none" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "14px",
                  alignItems: "center",
                  marginLeft: "12px",
                  marginBottom: "10px",
                  // textDecoration:"none"
                }}
              >
                {/* <GridViewOutlined sx={{ height: "40px", width: "40px" }} />{" "} */}
                <img src={setting} height="22em" width={"22em"} />
                <Typography sx={{ fontSize: "0.8rem" }} color={"brown"}>
                  Setting
                </Typography>
              </div>
            </Link>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "14px",
                  alignItems: "center",
                  marginLeft: "12px",
                  marginBottom: "10px",
                }}
              >
                <img src={about} height="24em" width={"24em"} />
                <Typography sx={{ fontSize: "0.8rem" }} color={"brown"}>
                  About us
                </Typography>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/Agreement"}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "14px",
                  alignItems: "center",
                  marginLeft: "10px",
                  marginBottom: "10px",
                }}
              >
                <img src={privacy} height={"24em"} width={"24em"} />
                <Typography sx={{ fontSize: "0.8rem" }} color={"brown"}>
                  Privacy
                </Typography>
              </div>
            </Link>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "14px",
                  alignItems: "center",
                  marginLeft: "13px",
                  marginBottom: "10px",
                }}
              >
                <SpeedIcon
                  style={{
                    height: "0.8  em",
                    width: "0.8em",
                    color: "brown",
                  }}
                />
                <Typography sx={{ fontSize: "0.8rem" }} color={"brown"}>
                  Speed Test
                </Typography>
              </div>
            </Link>
            <Link to={"/logoutm"} style={{ textDecoration: "none" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "14px",
                  alignItems: "center",
                  marginLeft: "14px",
                }}
              >
                <img src={logout} alt="" height={"18em"} width={"18em"} />
                <Typography sx={{ fontSize: "0.8rem" }} color={"brown"}>
                  Log Out
                </Typography>
              </div>
            </Link>
            <Divider /> <br /> <br />
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "14px",
                  alignItems: "center",
                  padding: "5px",
                  background:
                    "linear-gradient(180deg, #730684 0%, #B50505 100%)",
                }}
              >
                {/* <QuestionAnswerIcon /> */}
                <ForumOutlinedIcon
                  sx={{ color: "white", height: "25px", width: "25px" }}
                />
                <Typography sx={{ fontSize: "0.8rem" }} color={"white"}>
                  Chat
                </Typography>
              </div>
            </Link>
          </List>
        </Drawer>
      </Hidden>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 1, width: "90%", height: "auto" }}
      >
        <DrawerHeader />

        <Hidden smDown>
          <Stack
            marginLeft={4}
            direction={{ xs: "column", sm: "column", lg: "row", md: "row" }}
            marginTop={5}
            spacing={4}
            marginRight={4}
          >
            <Grid xs={10} sm={10} md={8} lg={12}>
              <Feed />
            </Grid>
            <Grid xs={10} sm={10} md={4} lg={12}>
              <Rightbar />
            </Grid>
          </Stack>
        </Hidden>

        {/* Mobile View  */}

        <Hidden  smUp>
          <Stack marginTop={4} spacing={2}>
            <Grid xs={10} sm={10} md={8} lg={12}>
              <Feed />
            </Grid>
            <Grid xs={10} sm={10} md={4} lg={12}>
              <Rightbar />
            </Grid>
              <Grid
                sx={{ position: "sticky", bottom: "0px", }}
              >
                <Mnavinner />
              </Grid>
          </Stack>
        </Hidden>
      </Box>
    </Box>
  );
}
