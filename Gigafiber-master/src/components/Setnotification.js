import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Switch from "@mui/material/Switch";
import WifiIcon from "@mui/icons-material/Wifi";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import "./Style2.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { Hidden } from "@mui/material";

function Setnotification() {
  const [checked, setChecked] = React.useState(["wifi"]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div
      style={{
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "linear-gradient(#460C4F73,#4F0C0CC2)",

          fontFamily: "Poppins",
          fontSize: "22px",
          fontWeight: 600,
          lineHeight: "28px",
          letterSpacing: "0em",
          textAlign: "center",
          // padding: "40px",
          width: "100%",
          // minWidth:'40%',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          // marginTop:'50px'
        }}
      >
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "20px",
            minWidth: "30%",
            maxWidth: "100%",
            padding: "50px",
            paddingTop: "20px",
            marginTop: "50px",
          }}
        >
          <Hidden smDown><Link
            to={"/"}
            style={{ position: "absolute", left: "25px", top: "5px" }}
          >
            <ArrowBackIcon sx={{ height: "40px", width: "40px" }} />
          </Link></Hidden>
          <Hidden smUp>
            <Link
              to={"/"}
              style={{ position: "absolute", left: "30px", top: "170px" }}
            >
              <ArrowBackIcon sx={{ height: "30px", width: "30px",color:'brown' }} />
            </Link>
          </Hidden>
          <p>Notification</p>
          <List
            sx={{ textAlign: "left" }}
            subheader={
              <ListSubheader>
                <h2>Common</h2>
              </ListSubheader>
            }
          >
            <List>
              <ListItem>
                {/* <ListItemIcon>
                <WifiIcon />
              </ListItemIcon> */}
                <ListItemText
                  id="switch-list-label-wifi"
                  primary="General Notification"
                />
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </ListItem>
              <ListItem>
                <ListItemText
                  id="switch-list-label-bluetooth"
                  primary="Sound"
                />

                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </ListItem>
              <ListItem>
                <ListItemText primary="Vibrate" />
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </ListItem>
            </List>{" "}
            <br />
            <List
              sx={{ textAlign: "left" }}
              subheader={
                <ListSubheader>
                  <h2>System & services update</h2>
                </ListSubheader>
              }
            >
              <ListItem>
                <ListItemText
                  id="switch-list-label-wifi"
                  primary="App Updates"
                />
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </ListItem>
              <ListItem>
                <ListItemText
                  id="switch-list-label-bluetooth"
                  primary="Bill Remainder"
                />
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </ListItem>
              <ListItem>
                <ListItemText primary="Promotion" />
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </ListItem>
              <ListItem>
                <ListItemText primary="Discount Available " />
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </ListItem>
              <ListItem>
                <ListItemText primary="Payment Request" />
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </ListItem>
            </List>
          </List>
        </div>
      </div>
    </div>
  );
}

export default Setnotification;
