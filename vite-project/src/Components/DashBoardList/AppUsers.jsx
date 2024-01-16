import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
const AppUsers = ({ dashBoardData }) => {
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
            App Users
          </Typography>

          <Typography variant="subtitle1">January 2022</Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ ml: 6 }} variant="h6">
            {dashBoardData?.registered_users}
          </Typography>
          <Typography sx={{ mr: 6 }} variant="h6">
            {dashBoardData?.pending_users}
          </Typography>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" gutterBottom>
              Registered Users
            </Typography>
            <Typography variant="h6" gutterBottom>
              Pending Users
            </Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default AppUsers;
