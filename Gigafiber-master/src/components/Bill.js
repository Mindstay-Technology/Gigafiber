import React from "react";
import table from "./images/tablesign.png";

const Bill = () => {
  return (
    <div style={{ padding: "30px" }}>
      <div
        style={{
          height: "auto",
          borderRadius: "20px",
          width: "100%",
          // border: "0px solid",
          boxShadow: '9px 14.010417938232422px 90.031253814697266px 0px #0000000D inset'

        }}
      >
        <table border="0px solid" style={{ borderRadius: "10px" }} width="100%">
          <tr>
            <th>Bill No</th>
            <th>Bill Date</th>
            <th>Bill Amount</th>
            <th rowSpan={2}>
              <button style={{ border: "none", cursor: "pointer" }}>
                <img src={table} alt="" />
              </button>
            </th>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>3456789</td>
            <td>10/3/23</td>
            <td>2000.00/--</td>
            <td></td>
          </tr>
        </table>
      </div>

      <br />
      <br />

      <div
        style={{
          height: "60px",
          borderRadius: "20px",
          width: "100%",
          // border: "1px solid",
          boxShadow: '9px 14.010417938232422px 90.031253814697266px 0px #0000000D inset'
        }}
      >
        <table border="0px solid" style={{ borderRadius: "10px" }} width="100%">
          <tr>
            <th>Bill No</th>
            <th>Bill Date</th>
            <th>Bill Amount</th>
            <th rowSpan={2}>
              <button style={{ border: "none", cursor: "pointer" }}>
                <img src={table} alt="" />
              </button>
            </th>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>3456789</td>
            <td>10/3/23</td>
            <td>2000.00/--</td>
            <td></td>
          </tr>
        </table>
      </div>

      <br />
      <br />
      <div
        style={{
          height: "60px",
          borderRadius: "20px",
          width: "100%",
          // border: "1px solid",
          boxShadow: '9px 14.010417938232422px 90.031253814697266px 0px #0000000D inset'
        }}
      >
        <table border="0px solid" style={{ borderRadius: "10px" }} width="100%">
          <tr>
            <th>Bill No</th>
            <th>Bill Date</th>
            <th>Bill Amount</th>
            <th rowSpan={2}>
              <button style={{ border: "none", cursor: "pointer" }}>
                <img src={table} alt="" />
              </button>
            </th>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <td>3456789</td>
            <td>10/3/23</td>
            <td>2000.00/--</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Bill;
