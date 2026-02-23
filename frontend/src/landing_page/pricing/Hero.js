import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 text-center">
        <h1 className=" fs-2 ">Charges</h1>
        <h3 className=" mt-2 fs-5 text-muted">List of all charges and taxes</h3>
      </div>
      <div className="row border-top p-5">
        <div className="col-4 p-3 text-center ">
          <img src="media/images/pricingEquity.svg" />
          <h3 className="mt-3 fs-4 mb-3"> Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-3 text-center">
          <img src="media/images/intradayTrades.svg" />
          <h3 className="mt-3 fs-4 mb-3"> Intraday and F&O trades</h3>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-3 text-center">
          <img src="media/images/pricingEquity.svg" />
          <h3 className="mt-3 fs-4 mb-3">Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are absolutely 
            free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
