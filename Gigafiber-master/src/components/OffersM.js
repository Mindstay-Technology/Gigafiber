import React from 'react'
import {
    Box,
    Typography,
    Modal,
    Button,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    List,
    ListItem,
    ListItemText,
    Avatar,
    Hidden,
  } from "@mui/material";
import { Link } from 'react-router-dom';
import gig from "./images/giglog.png";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


const style = {
    position: "relative",
    top: "50%",
    left: "50%",
    // height:'100vh',
    transform: "translate(-50%, -50%)",
    width: "400px",
    backgroundColor: "white",
    // border: "2px solid #000",
    boxShadow: 24,
    Typography: 4,
    borderRadius: "20px",
    outline: "none",
    // border:'none'
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    // height:"auto",
    // overflow:'scroll'
  };

function OffersM() {



    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



  return (
    <div>
         {/* <Box style={style}> */}
          
          <Accordion className="accord">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <input type="radio" name="plan" /> PLAN 11500 + GST
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {" "}
                <Box
                  display={"flex"}
                  flexDirection={"coloumn"}
                  gap={20}
                  justifyContent={"center"}
                  // onClick={handleClose}
                  // height={"100vh"}
                  overflow={"auto"}

                  // borderRadius={20}
                >
                  <List sx={{ width: "100%", maxWidth: 360, bgcolor: "" }}>
                    {[1, 2, 3, 4, 5].map((value) => (
                      <ListItem key={value} disableGutters sx={{ gap: "10px" }}>
                        <Avatar src={gig} />
                        <ListItemText primary={`name ${value}`} />
                        <Typography>gfhj</Typography>
                      </ListItem>
                    ))}
                    <Link to={"/payment"}>
                      <Button
                        sx={{
                          background: "linear-gradient(#904bac,#8e3035)",
                          color: "white",
                        }}
                      >
                        Pay Now
                      </Button>
                    </Link>
                  </List>
                </Box>
              </Typography>
            </AccordionDetails>
          </Accordion>{" "}
          <br />
          <Accordion className="accord">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <input type="radio" name="plan" /> PLAN 11500 + GST
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Box
                  display={"flex"}
                  flexDirection={"coloumn"}
                  gap={20}
                  justifyContent={"center"}

                  // borderRadius={20}
                >
                  <List sx={{ width: "100%", maxWidth: 360, bgcolor: "" }}>
                    {[1, 2, 3, 4, 5].map((value) => (
                      <ListItem key={value} disableGutters sx={{ gap: "10px" }}>
                        <Avatar src={gig} />
                        <ListItemText primary={`name ${value}`} />
                        <Typography>gfhj</Typography>
                      </ListItem>
                    ))}
                    <Link to={"/Payment"}>
                      <Button
                        sx={{
                          background: "linear-gradient(#904bac,#8e3035)",
                          color: "white",
                        }}
                      >
                        Pay Now
                      </Button>
                    </Link>
                  </List>
                </Box>
              </Typography>
            </AccordionDetails>
          </Accordion>{" "}
          <br />
          <Accordion className="accord">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <input type="radio" name="plan" /> PLAN 11500 + GST
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Box
                  // onClick={handleClose}
                  display={"flex"}
                  flexDirection={"coloumn"}
                  gap={20}
                  justifyContent={"center"}
                >
                  <List sx={{ width: "100%", maxWidth: 360, bgcolor: "" }}>
                    {[1, 2, 3, 4, 5].map((value) => (
                      <ListItem key={value} disableGutters sx={{ gap: "10px" }}>
                        <Avatar src={gig} />
                        <ListItemText primary={`name ${value}`} />
                        <Typography>gfhj</Typography>
                      </ListItem>
                    ))}
                    <Link to={"/Payment"}>
                      <Button
                        sx={{
                          background: "linear-gradient(#904bac,#8e3035)",
                          color: "white",
                        }}
                      >
                        Pay Now
                      </Button>
                    </Link>
                  </List>
                </Box>
              </Typography>
            </AccordionDetails>
          </Accordion>{" "}
          <br />
          <Link to={""} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Button
              type="submit"
              sx={{
                background: "linear-gradient(#904bac,#8e3035)",
                color: "white",
              }}
            >
              Add Plan
            </Button>
          </Link>
        {/* </Box> */}
    </div>
  )
}

export default OffersM