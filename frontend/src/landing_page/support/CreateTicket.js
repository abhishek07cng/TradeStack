import React from "react";

function CreateTicket() {
  const accordionData = [
    {
      title: "Account Opening",
      items: [
        "Resident Individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Zerodha Account",
      items: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      items: [
        "IPO",
        "Trading FAQS",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      title: "Funds",
      items: ["Add Money", "Withdraw Money", "Add bank Accounts", "eMandates"],
    },
    {
      title: "Console",
      items: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      title: "Coin",
      items: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Fixed Deposit (FD)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  return (
    <div className="accordion" id="accordionExample">
      <div className="row m-3">
        <div className="col-9">
          {accordionData.map((section, index) => {
            const collapseId = `collapse${index}`;
            return (
              <div className="mb-3" key={index}>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button custom-accordion-btn ${index !== 0 ? "collapsed" : ""}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${collapseId}`}
                    >
                      <div className="d-flex align-items-center w-100">
                        {/* Left Colored Section */}
                        <div className="icon-box me-3">
                          <i className="fa-solid fa-plus"></i>
                        </div>

                        <span className="fs-5 fw-medium">{section.title}</span>
                      </div>
                    </button>
                  </h2>

                  <div
                    id={collapseId}
                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul>
                        {section.items.map((item, i) => (
                          <li key={i}>
                            <a href="#">{item}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-3">
          <div
            className="py-2 px-2 borderColor mb-3"
            style={{ backgroundColor: "#fff4e5" }}
          >
            <ul>
              <li>
                <a href="">
                  Adjustment of F&O contracts of ANGELONE on account of Split
                </a>
              </li>
              <li>
                <a href="">Surveillance measure on scrips - February 2026</a>
              </li>
            </ul>
          </div>
          <div className="border">
            <div style={{ height: "40px", backgroundColor: "silver" }}>
              <h2 className="fs-6 py-2 px-3">QuickLinks</h2>
            </div>
            <div className="flex flex-col">
              <div className="py-3 px-3 border-bottom">
                <a href="" className="text-decoration-none link-hover">
                  1. Track Account Opening
                </a>
              </div>
              <div className="py-3 px-3 border-bottom ">
                <a href="" className="text-decoration-none link-hover ">
                  2. Track Segement Activation
                </a>
              </div>
              <div className="py-3 px-3 border-bottom">
                <a href="" className="text-decoration-none link-hover">
                  3. Intraday Margins
                </a>
              </div>
              <div className="py-3 px-3 border-bottom">
                <a href="" className="text-decoration-none link-hover">
                  4. Kite User Manual
                </a>
              </div>
              <div className="py-3 px-3 border-bottom">
                <a href="" className="text-decoration-none link-hover">
                  5. Learn how to create a Ticket
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
