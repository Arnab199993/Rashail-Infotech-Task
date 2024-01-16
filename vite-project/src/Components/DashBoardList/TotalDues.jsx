import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
const TotalDuesList = ({ dashBoardData }) => {
  return (
    <div>
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            // border: "1px solid transparent",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Total Dues
          </Typography>

          <Typography variant="subtitle1">January 2022</Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ ml: 6 }} variant="h6">
            {dashBoardData?.total_amount}
          </Typography>
          <Typography sx={{ mr: 6 }} variant="h6">
            0
          </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" gutterBottom>
            Total Amount
          </Typography>
          <Typography variant="h6" gutterBottom>
            Total Vendors
          </Typography>
        </div>
      </Paper>
    </div>
  );
};

export default TotalDuesList;
