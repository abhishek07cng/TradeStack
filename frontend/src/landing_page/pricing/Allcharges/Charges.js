import React from "react";

function Charges() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Charges for account opening</h2>
      <div className="table-responsive">
        <table className="table table-hover table-striped border">
          <thead>
            <tr>
              <th
                scope="col"
                className="text-muted"
                style={{ fontSize: "15px", padding: "14px" }}
              >
                Type of account
              </th>
              <th
                scope="col"
                className="text-muted"
                style={{ fontSize: "15px", padding: "14px" }}
              >
                Charges
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className=" text-muted "
                style={{ fontSize: "15px", padding: "14px" }}
              >
                Online account
              </td>
              <td
                className="text-start "
                style={{ fontSize: "15px", padding: "14px" }}
              >
                <span className="badge bg-success">FREE</span>
              </td>
            </tr>
            <tr>
              <td
                className=" text-muted "
                style={{ fontSize: "15px", padding: "14px" }}
              >
                Offline account
              </td>
              <td
                className="text-start "
                style={{ fontSize: "15px", padding: "14px" }}
              >
                <span className="badge bg-success">FREE</span>
              </td>
            </tr>
            <tr>
              <td
                className=" text-muted "
                style={{ fontSize: "15px", padding: "14px" }}
              >
                NRI account (offline only)
              </td>
              <td
                className="text-start text-muted"
                style={{ fontSize: "15px", padding: "14px" }}
              >
                ₹ 500
              </td>
            </tr>
            <tr>
              <td
                className="text-muted"
                style={{ fontSize: "15px", padding: "14px" }}
              >
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td
                className="text-start text-muted"
                style={{ fontSize: "15px", padding: "14px" }}
              >
                ₹ 500
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Charges;
