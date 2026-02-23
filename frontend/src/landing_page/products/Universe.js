import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row mb-5 text-center p-3 flex justify-content-center align-items-center">
        <h4 className="mt-5 mb-3">The Zerodha Universe</h4>
        <p className="mt-2">
          Extend your trading and investment experience even further with our
          partner platforms.
        </p>

        <div className="col-4 p-3 mt-5 text-center ">
          <a
            className="text-decoration-none text-muted mt-2"
            href="https://www.zerodhafundhouse.com/"
            target="blank"
          >
            <img
              className=" w-50 mb-3"
              src="media/images/zerodhaFundhouse.png"
              alt="Universe Image"
            />
            <br />
            <span className=" text-muted" style={{ fontSize: "14px" }}>
              Our asset management venture <br />
              that is creating simple and transparent index <br />
              funds to help you save for your goals.
            </span>
          </a>
        </div>

        <div className="col-4 p-3 mt-5 text-center ">
          <a
            className="text-decoration-none text-muted mt-2"
            href="https://sensibull.com/"
            target="blank"
          >
            <img
              className=" w-50 mb-3"
              src="media/images/sensibullLogo.svg"
              alt="Universe Image"
            />
            <br />
            <span className="text-muted " style={{ fontSize: "14px" }}>
              Options trading platform that lets you <br />
              create strategies, analyze positions, and examine <br />
              data points like open interest, FII/DII, and more.
            </span>
          </a>
        </div>

        <div className="col-4 p-3 mt-5 text-center h-50">
          <a
            className="text-decoration-none text-muted mt-2"
            href="https://www.tijorifinance.com/dashboard/"
            target="blank"
          >
            <img
              className="w-50 mb-2"
              src="media/images/tijori.svg"
              alt="Universe Image"
            />
            <br />
            <span className="text-muted " style={{ fontSize: "14px" }}>
              Investment research platform <br />
              that offers detailed insights on stocks,
              <br /> sectors, supply chains, and more.
            </span>
          </a>
        </div>

        <div className="col-4 p-3 mt-5 text-center mb-5">
          <a
            className="text-decoration-none text-muted mt-2"
            href="https://www.streak.tech/"
            target="blank"
          >
            <img
              className=" w-50 mb-3"
              src="media/images/streakLogo.png"
              alt="Universe Image"
            />
            <br />
            <span className=" text-muted" style={{ fontSize: "14px" }}>
              Systematic trading platform <br /> that allows you to create and
              backtest <br />
              strategies without coding.
            </span>
          </a>
        </div>

        <div className="col-4 p-3 mt-5 text-center mb-5">
          <a
            className="text-decoration-none text-muted mt-2"
            href="https://smallcase.zerodha.com/"
            target="blank"
          >
            <img
              className=" w-50 mb-3"
              src="media/images/smallcaseLogo.png"
              alt="Universe Image"
            />
            <br />
            <span className=" text-muted" style={{ fontSize: "14px" }}>
              Thematic investing platform <br />
              that helps you invest in diversified <br />
              baskets of stocks on ETFs.
            </span>
          </a>
        </div>

        <div className="col-4 p-3 mt-5 text-center mb-5">
          <a
            className="text-decoration-none text-muted mt-2"
            href="https://joinditto.in/"
            target="blank"
          >
            <img
              className=" w-50 mb-3"
              src="media/images/dittoLogo.png"
              alt="Universe Image"
            />
            <br />
            <span className=" text-muted" style={{ fontSize: "14px" }}>
              Personalized advice on life <br /> and health insurance. No spam <br /> and no
              mis-selling.
            </span>
          </a>
        </div>
        <button
          className="btn btn-primary pl-3 pt-2 pb-2 pr-3 fs-4 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
