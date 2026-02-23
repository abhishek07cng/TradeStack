import React from "react";

function DematAMC() {
  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-muted">Demat AMC (Annual Maintenance Charge)</h3>

      <div className="border rounded table-responsive">
        <table className="table mb-0 p-2">
          <thead>
            <tr>
              <th
                scope="col "
                className="text-muted"
                style={{ fontSize: "15px", padding: "14px" }}
              >
                Value of holdings
              </th>
              <th
                scope="col"
                className="text-muted"
                style={{ fontSize: "15px", padding: "14px" }}
              >
                AMC
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td
                className="text-muted"
                style={{ fontSize: "15px", padding: "14px" }}
              >
                Up to ₹4 lakh
              </td>
              <td
                className="text-muted"
                style={{ fontSize: "15px", padding: "14px" }}
              >
                <span className="badge bg-success">FREE*</span>
              </td>
            </tr>
            <tr>
              <td
                className="text-muted"
                style={{ fontSize: "15px", padding: "14px" }}
              >
                Above ₹4 lakh and up to ₹10 lakh
              </td>
              <td
                className="text-muted"
                style={{ fontSize: "15px", padding: "14px" }}
              >
                ₹100 per year, charged quarterly*
              </td>
            </tr>

            <tr>
              <td
                className="text-muted"
                style={{ fontSize: "15px", padding: "14px" }}
              >
                Above ₹10 lakh
              </td>
              <td
                className="text-muted"
                style={{ fontSize: "15px", padding: "14px" }}
              >
                ₹300 per year, charged quarterly
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DematAMC;
