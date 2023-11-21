import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Style.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FlipToFrontIcon from "@mui/icons-material/FlipToFront";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  //   bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
  borderRadius: 10,
  background: "linear-gradient(180deg, #460C4F,#460c4f,black)",
};

export default function Referal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        style={{
          fontSize: "1rem",
          textTransform: "capitalize",
          color: "brown",
        }}
        onClick={handleOpen}
      >
        Refer
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Button onClick={handleClose}>
              <ArrowBackIosIcon color="white" />
            </Button>
          <div style={{ display: "flex",flexDirection:'column',alignItems:"center",justifyContent:'center' }}>
            <p
              style={{
                fontSize: "1rem",
                // position: "relative",
                // left: "126px",
                textAlign: "center",
                color: "#FFFFFF ",
              }}
            >
              Get Credits
            </p>
            {/* </div> */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                // border: "1px solid",
                background: "#9797972B",
                borderRadius: "10px",
                width: "200px",
                // position: "relative",
                // left: "30%",
                // padding:'0px'
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1rem",
                  color: "#DCF88E",
                }}
              >
                120
              </p>{" "}
              <br />
              <p
                style={{
                  fontSize: "1rem",
                  padding: "0px",
                  color: "#DADADA",
                  textAlign: "center",
                }}
              >
                Earned Credits
              </p>
            </div>
          </div>
          <br /> <br />
          <Box className="refer-rainbow">
            <div>
              <p style={{ textAlign: "center", fontSize: "1.3vw" }}>
                Invite a friend and get credits
              </p>
              <p style={{ textAlign: "center", fontSize: "1.3vw" }}>
                Give a friend promo code and you'll get credits to use on
                Purchases
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  border: "2px dotted",
                  padding: "20px",
                  borderRadius: "25px",
                  background: "darkgrey",
                }}
              >
                <span style={{ position: "relative", top: "8px" }}>
                  <FlipToFrontIcon />
                </span>
                GBD21
              </span>
            </div>{" "}
            <br />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
