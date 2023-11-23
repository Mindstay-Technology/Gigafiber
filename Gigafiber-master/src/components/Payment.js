

import { List } from "@mui/icons-material";
import { Button, Hidden, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

function Payment() {
  const products = [
    { x: "Customer Name", y: 10 },
    { x: "Account No", y: 1120 },
    { x: "Plan Name", y: "11500/-" },
    { x: "Plan Validity", y: "6 Months" },
  ];

  const amount = [
    { a: "Money", b: "2000" },
    { a: "Tax(Sgst + Cgst )", b: "260" },
    { a: "Discount( 10% )", b: "200" },
    { a: "Total Pay", b: "2060" },
    { a: "Pay Through", b: "UPI" },
  ];

  return (
    <div style={{ background: "white" }}>
    <Hidden smDown>
      <div
        style={{
          background: "linear-gradient(#3C0850A1,#E9353542)",
          padding: "px",
          // width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundRepeat: "no-repeat",
          // marginTop:'30px'
          
        }}
      >
        <div
          style={{
            width: "25%",
            height:'50vh',
            background: "linear-gradient(#DCDEEA,#FFFFFF00)",
            borderRadius: "20px",
            padding: "20px",
            paddingBottom: "3px",
            position:'relative',
          top:'60px'
          }}
        >
          {" "}
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                // fontFamily: "Poppins",
                padding: "10px",
                // width:'80%'
              }}
            >
              <Typography variant="">{product.x}</Typography>
              <Typography variant="">{product.y}</Typography>
            </div>
          ))}
        </div>
        <div
          style={{
            background: "white",
            paddingTop: "3px",
            borderRadius: "20px",
            margin:'auto',
            width: "22%",
            height:'40vh',
            position:'relative',
            bottom:'70px',
            padding:'20px'
          }}
        >
          {amount.map((money, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textJustify: "auto",
                padding: "10px",
              }}
            >
              <Typography variant="">{money.a}</Typography>
              <Typography variant="">{money.b}</Typography>
            </div>
          ))}
        </div>{" "}
        {/* <br /> */}
        <div>
          <Button className="markodenic-button" sx={{color:'white'}}>Pay Now</Button>
        </div>
      </div>
      </Hidden>


      <Hidden smUp>
      <Link
              to={"/"}
              style={{ position: "absolute", left: "20px", top: "120px" }}
            >
              <ArrowBackIcon sx={{ height: "30px", width: "30px",color:'brown' }} />
            </Link>
      <div
        style={{
          background: "linear-gradient(#3C0850A1,#E9353542)",
          padding: "px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundRepeat: "no-repeat",
          marginTop:'100px'
        }}
      >
      {/* <Hidden smUp> */}
            
          {/* </Hidden> */}
        <div
          style={{
            width: "90%", // Adjusted width for better mobile view
            background: "linear-gradient(#DCDEEA,#FFFFFF00)",
            borderRadius: "20px",
            padding: "20px",
            paddingBottom: "3px",
            marginTop: "20px", // Added margin for separation
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row", // Changed to column for better mobile view
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <Typography variant="subtitle1">{product.x}</Typography>
              <Typography variant="subtitle1">{product.y}</Typography>
            </div>
          ))}
        </div>
        <div
          style={{
            background: "white",
            paddingTop: "3px",
            borderRadius: "20px",
            margin: "20px 0", // Added margin for separation
            width: "90%", // Adjusted width for better mobile view
            padding: "20px",
          }}
        >
          {amount.map((money, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row", // Changed to column for better mobile view
                justifyContent: "space-between",
                alignItems: "center",
                textJustify: "auto",
                padding: "10px",
              }}
            >
              <Typography variant="subtitle1">{money.a}</Typography>
              <Typography variant="subtitle1">{money.b}</Typography>
            </div>
          ))}
        </div> <br /> <br />  <br />
        <div>
          <Button
            className="markodenic-button"
            sx={{
              color: 'white',
              backgroundColor: '#3C0850',
              borderRadius: '8px',
              // width: '90%', // Adjusted width for better mobile view
              margin: '20px 0', // Added margin for separation
              padding:'10px'
            }}
          >
            Pay Now
          </Button>
        </div>
      </div>
      </Hidden>
    </div>
  );
}

export default Payment;
