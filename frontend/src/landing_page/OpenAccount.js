import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mt-5 mb-5">
      <div className="row text-center">
        <h1 className="fs-2 ">Open a Zerodha account</h1>
        <p className="fs-4 m-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades
        </p>
        <button
          className="btn btn-primary pl-3 pt-2 pb-2 pr-3 fs-3 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
