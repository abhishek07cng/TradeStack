import React from "react";


function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-6 mt-5">
          <div className=" mt-5 p-5 ">
            <h2 className="">{productName}</h2>
            <p className="">{productDescription}</p>
            <div>
              <a href={learnMore} style={{ textDecoration: "none" }}>
                Learn more <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-6 mr-5 pr-5 mb-3">
          <img src={imageURL} alt="Product Image" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
