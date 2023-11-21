import { Button,Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



const styleband = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: "auto",
    // backgroundColor:'white',
  
    backgroundImage:
      "linear-gradient(to right bottom, #976ba8, #a96498, #b55e86, #bb5c71, #bb5d5d)",
  
    // border: "2px solid #000",
    // boxShadow: 24,
    p: 4,
    borderRadius: 20,
    // boxShadow: "0 14.010417938232422 42.031253814697266 0 #0000000D inset",
  };


function BandwidthM() {
  return (
    <div>
         <Box
          style={styleband}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: "30px",
          }}
        >
          <Button
            style={{
              border: "0.1px solid",
              width: "300px",
              borderRadius: "20px",
              border:'none',
              outline:'none',
              background: "linear-gradient(#650b7c,#c31a1a)",
              boxShadow:
                "0px 14.010417938232422px 42.031253814697266px 0px #0000000D inset",
            }}
          >
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                border: "none",
                outline: "none",
              }}
              to={"/monthly"}
            >
              Monthly Premium Plan
            </Link>
          </Button>
          <br />
          <Button
            style={{
              color: "white",
              border: "1px solid",
              width: "300px",
              borderRadius: "20px",
              border: "none",
              outline: "none",
              background: "linear-gradient(#650b7c,#c31a1a)",
            }}
          >
            Quarterly Premium Plan
          </Button>{" "}
          <br />
          <Button
            style={{
              color: "white",
              border: "1px solid",
              width: "300px",
              border: "none",
              outline: "none",
              borderRadius: "20px",
              background: "linear-gradient(#650b7c,#c31a1a)",
              boxShadow:
                "0px 14.010417938232422px 42.031253814697266px 0px #0000000D inset",
            }}
          >
            Semi Annual Premium Plan
          </Button>{" "}
          <br />
          <Button
            style={{
              color: "white",
              border: "1px solid",
              width: "300px",
              borderRadius: "20px",
              border:'none',
              outline:'none',
              background: "linear-gradient(#650b7c,#c31a1a)",
            }}
          >
            Annual Premium Plan
          </Button>
        </Box>

    </div>
  )
}

export default BandwidthM