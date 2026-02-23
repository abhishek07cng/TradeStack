import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-6 ">
          <img src={imageURL} alt="Product Image" />
        </div>
        <div
          className="col-6 mt-5 p-5"
        >
          <div style={{ paddingLeft: "100px" }} className="mb-3">
            <h2 className="">{productName}</h2>
            <p className="">{productDescription}</p>
            <div>
              <a
                href={tryDemo}
                style={{ textDecoration: "none", marginRight: "30px" }}
              >
                Try Demo <i class="fa-solid fa-arrow-right-long "></i>
              </a>
              <a href={learnMore} style={{ textDecoration: "none" }}>
                Learn more <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
          <div className="mt-3 mb-3" style={{ paddingLeft: "100px" }}>
            <a style={{ marginRight: "20px" }} href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="media/images/appStoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
