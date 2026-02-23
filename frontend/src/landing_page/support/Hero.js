import React from "react";

function Hero() {
  return (
    <div className="container-fluid bg-z-light-gray" id="supportpage">
      <div className="d-flex flex-col justify-content-between py-4 px-3">
        <h2>Support Portal</h2>
        <button type="button" class="btn btn-primary">
          My tickets
        </button>
      </div>
      <div className="py-3 px-3">
        <input
          className="p-3 search-input"
          style={{width:"100%"}}
          placeholder="Eg: How do I open my account, How do i activate F&O..." 
          id="supportinput"
        />
      </div>
    </div>
  );
}

export default Hero;
