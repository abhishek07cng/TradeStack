import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 ">
        <h1 className="text-center ">People</h1>
      </div>
      <div className="row p-3 text-center">
        <div className="col-6 pl-5 pt-5 pb-5 fs-5 text-muted">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h4 className="mt-3">Nithin Kamath</h4>
          <h6 className="text-muted">Founder & CEO</h6>
        </div>
        <div className="col-6 p-5 fs-5 text-muted text-start">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>{" "}
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on
            <a
              className="text-decoration-none"
              href="https://nithinkamath.me/"
              target="blank"
            >
              {" "}
              Homepage{" "}
            </a>{" "}
            &nbsp;/&nbsp;
            <a
              className="text-decoration-none"
              href="https://tradingqna.com/u/nithin/summary"
              target="blank"
            >
              TradingQnA
            </a>
            &nbsp;/&nbsp;
            <a
              className="text-decoration-none"
              href="https://twitter.com/nithinkamath"
              target="blank"
            >
              Twitter
            </a>{" "}
            &nbsp;
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
