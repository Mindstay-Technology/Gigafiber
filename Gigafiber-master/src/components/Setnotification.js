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
    <div style={{ background: "white",display:'flex',justifyContent:'center',alignItems:'center' }}>
      <div
        style={{
          background: "linear-gradient(#460C4F73,#4F0C0CC2)",

          fontFamily: "Poppins",
          fontSize: "22px",
          fontWeight: 600,
          lineHeight: "28px",
          letterSpacing: "0em",
          textAlign: "center",
          padding: "40px",
          width:'100%',
          display:'flex',
          alignItems:'center',
          justifyContent:'center'

        }}
      >
      <Link to={'/'} style={{position:'absolute',left:'5px',top:'5px'}}><ArrowBackIcon/></Link>
        <div
          style={{ background: "#FFFFFF", borderRadius: "20px", width: "40%",padding:'50px',paddingTop:'20px' }}
        >
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
                {/* <Switch
                edge="end"
                onChange={handleToggle("wifi")}
                checked={checked.indexOf("wifi") !== -1}
                // inputProps={{
                //   "aria-labelledby": "switch-list-label-wifi",
                // }}
              /> */}
                {/* <input type="checkbox" id="switch" class="checkbox" /> */}

                {/* <label for="switch" class="toggle"> */}
                {/* <p>OFF ON</p> */}
                {/* </label> */}
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </ListItem>
              <ListItem>
                {/* <ListItemIcon>
                <BluetoothIcon />
              </ListItemIcon> */}
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
                {/* <ListItemIcon>
                <WifiIcon />
              </ListItemIcon> */}
                <ListItemText
                  id="switch-list-label-wifi"
                  primary="App Updates"
                />
                {/* <Switch
                edge="end"
                onChange={handleToggle("wifi")}
                checked={checked.indexOf("wifi") !== -1}
                // inputProps={{
                //   "aria-labelledby": "switch-list-label-wifi",
                // }}
              /> */}
                {/* <input type="checkbox" id="switch" class="checkbox" /> */}

                {/* <label for="switch" class="toggle"> */}
                {/* <p>OFF ON</p> */}
                {/* </label> */}
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </ListItem>
              <ListItem>
                {/* <ListItemIcon>
                <BluetoothIcon />
              </ListItemIcon> */}
                <ListItemText
                  id="switch-list-label-bluetooth"
                  primary="Bill Remainder"
                />
                {/* <Switch
                edge="end"
                onChange={handleToggle("bluetooth")}
                checked={checked.indexOf("bluetooth") !== -1}
                inputProps={{
                  "aria-labelledby": "switch-list-label-bluetooth",
                }}
              /> */}
                {/* <input type="checkbox" id="switch" class="checkbox" />
              <label for="switch" class="toggle">
                <p>OFF ON</p>
              </label> */}
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

// import * as React from 'react';
// import Switch from '@mui/material/Switch';

// export default function Setnotification() {
//   const [checked, setChecked] = React.useState(true);

//   const handleChange = (event) => {
//     setChecked(event.target.checked);
//   };

//   return (
//     <Switch
//       checked={checked}
//       onChange={handleChange}
//       inputProps={{ 'aria-label': 'controlled' }}
//     />
//   );
// }
