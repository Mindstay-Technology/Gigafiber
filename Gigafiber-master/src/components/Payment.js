// import React from "react";
// import "./Style.css";
// import Button from "@mui/material/Button";

// function Payment() {
//   return (
//     <div style={{ background: "white" }}>
//       <div
//         style={{
//           background:
//             "linear-gradient(rgba(30, 8, 80, 0.63),rgba(233, 53, 53, 0.26))",
//           padding: "40px",
//           borderRadius: "20px",
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             background: "linear-gradient(#DCDEEA,#FFFFFF00)",
//             borderRadius: "20px",
//           }}
//         >
//           <div className="data-list">
//             <p>Customer name</p>
//             <p>stella</p>
//           </div>
//           <div className="data-list">
//             <p>Account No</p>
//             <p>0000000000</p>
//           </div>
//           <div className="data-list">
//             <p>fg</p>
//             <p>jjkl;</p>
//           </div>
//           <div className="data-list">
//             <p>ghjk</p>
//             <p>tyhu</p>
//           </div>
//         </div>
//         <div style={{ background: "white", borderRadius: "20px",padding:'40px' }}>
//           <div className="data-list">
//             <p>fdftyui</p>
//             <p>tryuio</p>
//           </div>
//           <div className="data-list">
//             <p>fdftyui</p>
//             <p>tryuio</p>
//           </div>
//           <div className="data-list">
//             <p>fdftyui</p>
//             <p>tryuio</p>
//           </div>
//           <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'10px'}}>
//             <Button style={{
//               background: "linear-gradient(180deg, #46096B 0%, #6B0909 100%)",color:'white',width:'200px'
//             }}>Pay Now</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Payment;

import { List } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import "./Style.css";

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
        }}
      >
        <div
          style={{
            width: "30%",
            height:'40vh',
            background: "linear-gradient(#DCDEEA,#FFFFFF00)",
            borderRadius: "20px",
            padding: "20px",
            paddingBottom: "3px",
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
            // display: "flex",
            // justifyContent: "space-around",
            // flexDirection:'column',
            background: "white",
            // padding: "500px",
            paddingTop: "3px",
            borderRadius: "20px",
            margin:'auto',
            width: "30%",
            height:'45vh',
            position:'relative',
            bottom:'60px'
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
                // margin:'auto'
                // gap: 50,
                // fontFamily: "Poppins",
                // fontSize:'2vw'
              }}
            >
              <Typography variant="">{money.a}</Typography>
              <Typography variant="">{money.b}</Typography>
            </div>
          ))}
        </div>{" "}
        {/* <br /> */}
        <div
          style={{
            //   background: "linear-gradient(180deg, #46096B 0%, #6B0909 100%)",
            //   textAlign: "center",
            //   width: "200px",
            //   borderRadius:'20px',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button className="markodenic-button">Pay Now</Button>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Payment;
