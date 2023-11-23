import { Button,Box,Typography, } from '@mui/material'
import React from 'react'
import bglogo from './images/biglogo.png'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'


function LogoutM() {
  return (
    <div style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
    <Box
      sx={{
        width: "400px",
        // height: "90vh",
        borderRadius: "40px",
        bgcolor: "white",
        // position: "absolute",
        // top: "40%",
        // left: "10%",
        // left:'40%',
        margin:'auto',
        padding: "30px",
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}
    ><Link
            to={"/"}
            style={{ position: "absolute", left: "25px", top: "25%" }}
          >
            <ArrowBackIcon sx={{ height: "40px", width: "40px",color:'white' }} />
          </Link>
      <div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <img src={bglogo} alt="" height={50} width={200} />
        </div>
        <div>
          <Typography
            fontSize="2rem"
            textAlign={"center"}
          >
            Are you sure you want to Log out?
          </Typography> <br />
          <div style={{ display: "flex",flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
            <Button
              style={{
                background:
                  "linear-gradient(180deg, #730684 0%, #FF3737 100%)",
                  width:'120px',
                  fontSize:'1rem',
                  fontWeight:'600',
                  color:'white'

              }}
            >
              Log Out
            </Button> <br />
            <Button
              style={{
                border:
                  " 1px solid brown",
                  width:'80px',
                  color:'brown'
                  
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Box></div>
  )
}

export default LogoutM