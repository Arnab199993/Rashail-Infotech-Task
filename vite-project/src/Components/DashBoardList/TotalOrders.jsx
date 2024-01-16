import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
const TotalOrdersList = ({ dashBoardData }) => {
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
          }}
        >
          <Typography variant="h6" gutterBottom>
            Total Orders
          </Typography>

          <Typography variant="subtitle1">January 2022</Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ ml: 6 }} variant="h6">
            {dashBoardData?.completed_orders}
          </Typography>
          <Typography sx={{ mr: 6 }} variant="h6">
            {dashBoardData?.pending_orders}
          </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" gutterBottom>
            Completed Orders
          </Typography>
          <Typography variant="h6" gutterBottom>
            Pending Orders
          </Typography>
        </div>
      </Paper>
    </div>
  );
};

export default TotalOrdersList;
