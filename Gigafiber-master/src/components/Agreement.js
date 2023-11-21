import React from "react";

function Agreement() {
  return (
    <div style={{ background: "white",display:'flex',alignItems:"center",justifyContent:'center' }}>
      <div
        style={{
          background: "linear-gradient(#460C4F73,#4F0C0CC2)",
          padding: "20px",
          display:'flex',alignItems:"center",justifyContent:'center'
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "40px",
            fontSize: "0.8rem", 
            fontFamily: "'Poppins', sans-serif ",
            textOverflow:"clip"
          }}
        >
          <header
            style={{
              position: "relative",
              left: "50px",
              fontSize: "1.7rem ",
              padding: "10px",
            }}
          >
            Privacy Policy
          </header>
          <dl>
            <dt
              style={{ position: "relative", left: "25px", fontSize: "1.4rem" }}
            >
              1. Types data we collect
            </dt>{" "}
            <br />
            <dd style={{textAlign:'justify',height:'100vh',margin:'10px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non
              proident.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non
              proident.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non
              proident.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non
              proident.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Agreement;
