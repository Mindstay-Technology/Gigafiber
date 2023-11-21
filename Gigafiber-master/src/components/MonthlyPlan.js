import React from "react";
import { Box, Button } from "@mui/material";
import "./Style2.css";
import { Link } from "react-router-dom";
function MonthlyPlan() {
  return (
    <>
      <div className="monthly-main">
        <div className="monthly" width="">
          <ul type="none">
            <li>
              <input name="monthly-plan" type="radio" />
            </li>
            <li>
              <p className="text">PLAN 11500+GST</p>
            </li>
            <li>
              <p className="text">Unlimited300MBPS</p>
            </li>
            <li>
              <Link to="/moredetail">
                <Button className="button-monthly" style={{ color: "white" }}>
                  Full Details
                </Button>
              </Link>
            </li>
          </ul>
        </div>{" "}
        <br />
        <div className="monthly" width="">
          <ul type="none">
            <li>
              <input name="monthly-plan" type="radio" />
            </li>
            <li>
              <p className="text">PLAN 11500+GST</p>
            </li>
            <li>
              <p className="text">Unlimited300MBPS</p>
            </li>
            <li>
              <Link to="/moredetail">
                <Button className="button-monthly" style={{ color: "white" }}>
                  Full Details
                </Button>
              </Link>
            </li>
          </ul>
        </div>{" "}
        <br />
        <div className="monthly" width="">
          <ul type="none">
            <li>
              <input name="monthly-plan" type="radio" />
            </li>
            <li>
              <p className="text">PLAN 11500+GST</p>
            </li>
            <li>
              <p className="text">Unlimited300MBPS</p>
            </li>
            <li>
              <Button className="button-monthly" style={{ color: "white" }}>
                Full Details
              </Button>
            </li>
          </ul>
        </div>{" "}
        <br />
        <div className="monthly" width="">
          <ul type="none">
            <li>
              <input name="monthly-plan" type="radio" />
            </li>
            <li>
              <p className="text">PLAN 11500+GST</p>
            </li>
            <li>
              <p className="text">Unlimited300MBPS</p>
            </li>
            <li>
              <Button className="button-monthly" style={{ color: "white" }}>
                Full Details
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MonthlyPlan;
