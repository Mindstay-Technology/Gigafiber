import React from "react";
import Bill from "./Bill";
import Offers from "./Offers";
import Bandwidth from "./Bandwidth";
import { Button, Box, Modal, Hidden } from "@mui/material";
import home from "./images/home.png";
import reciept from "./images/Receipt.png";
import card from "./images/Card Payment.png";
import { Link } from "react-router-dom";
import ReceiptIcon from "@mui/icons-material/Receipt";
import OffersM from "./OffersM";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import offer from "./images/Discount.png";
import CellTowerIcon from "@mui/icons-material/CellTower";

const styleB = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  backgroundColor: "white",
  // border: "2px solid #000",
  // boxShadow: 24,
  p: 4,
  borderRadius: 10,
  // boxShadow: "0 14.010417938232422 42.031253814697266 0 #0000000D inset",
};

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  // height:'100vh',
  transform: "translate(-50%, -50%)",
  width: "100%",
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

function Mnavinner() {
  const [openB, setOpenB] = React.useState(false);
  const handleOpenB = () => setOpenB(true);
  const handleCloseB = () => setOpenB(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      style={{
        height: "120px",
        background: "white",
        backgroundImage: "radial-gradient(white 60%,#AB10108A  )",
        boxShadow: " 0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
        webkitBoxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
        borderRadius: "16px",
      }}
    >
      <div
        style={{
          // height: "45px",
          height: "auto",
          width: "100%",
          border: "1px solid rgba(195, 26, 127, 0.2)",
          borderRadius: "5px",
          overflow: "hidden",
          padding: "10px",
          // visibility:'hidden'
          // background: "white",
          // marginTop: "20px",
        }}
      >
        <nav
          style={{
            display: "flex",
            // flexDirection:'column',
            justifyContent: "space-around",
            alignItems: "center",
            height: "100px",
            marginTop: "10px",
            backgroundAttachment: "fixed",
            // position:'fixed',
            zIndex: "",
            // padding:'10px',
            // visibility:'hidden'
          }}
        >
          <Link style={{ textDecoration: "none" }}>
            <Button
              sx={{
                display: "block",
                textTransform: "capitalize",
                color: "brown",
                fontSize: "1rem",
                padding: "10px",
              }}
            >
              <img src={home} alt="'" height={26} width={26} />
              <p> Home</p>
            </Button>
          </Link>

          {/* Bills */}

          <Button
            onClick={handleOpenB}
            style={{
              color: "brown",
              textTransform: "capitalize",
              // display:'block'
              display: "inline-block",
              fontSize: "1rem",
              padding: "10px",
            }}
          >
            {/* <img src={reciept} alt="'" color="brown" height={30} width={30} /> */}
            <ReceiptIcon sx={{ height: "34px", width: "34px" }} />
            <p>Bills</p>
          </Button>
          <Modal
            open={openB}
            onClose={handleCloseB}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box style={styleB}>
              <Bill />
            </Box>
          </Modal>

          {/* offers */}

          <span>
            <Button
              onClick={handleOpen}
              style={{
                color: "brown",
                textTransform: "capitalize",
                display: "block",
                fontSize: "1rem",
              }}
            >
              {/* <img src={reciept} alt="'" color="brown" height={30} width={30} /> */}
              <img src={offer} height={"40px"} width={"40px"} />
              <p>Offers</p>
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              // sx={{ overflow: "scroll", position: "fixed" }}
            >
              <Box style={style}>
                <Link
                  to={"/"}
                  style={{ position: "absolute", left: "5px", bottom: "20px" }}
                >
                  <ArrowBackIosIcon
                    sx={{ color: "brown" }}
                    onClick={handleClose}
                  />
                </Link>
                <OffersM />
              </Box>
            </Modal>
          </span>

          {/* plans */}
          <span>
            <Link style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  display: "block",
                  textTransform: "capitalize",
                  color: "brown",
                  fontSize: "1rem",
                }}
              >
                <CellTowerIcon sx={{ height: "34px", width: "34px" }} />{" "}
                <p>Plans</p>
              </Button>
            </Link>
          </span>
        </nav>
      </div>
      {/* </Hidden> */};
    </div>
  );
}

export default Mnavinner;
