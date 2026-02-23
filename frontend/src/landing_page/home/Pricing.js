import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h2 className="fs-2">Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
           <a style={{textDecoration:"none"}} href="">See Pricing
                <i class="fa-solid fa-arrow-right-long"></i>
              </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mb-5">
            <div className="row text-center">
                <div className="col-6 border p-3">
                    <h1 className="mb-3">₹0</h1>
                    <p>Free equity delivery and <br/> direct mutual funds</p>
                </div>
                <div className="col-6 border p-3">
                    <h1 className="mb-3">₹20</h1>
                    <p>Free equity delivery and <br/> direct mutual funds</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
