import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "../DashBoard/Title";
import Vector4 from "../../assets/Vector4.png";
import Box from "@mui/material/Box";
function preventDefault(event) {
  event.preventDefault();
}

export default function TotalAcceptedOrders({ dashBoardData }) {
  return (
    <React.Fragment>
      {/* <Title>Recent Deposits</Title> */}
      <div>
        <>
          <Box
            component="img"
            sx={{
              height: 30,
              width: 30,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              marginLeft: "6.3rem",
              marginTop: "2rem",
            }}
            alt="The house from the offer."
            src={Vector4}
          />
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            component="p"
            variant="h4"
          >
            {dashBoardData?.total_accepted_orders}
          </Typography>
          <Typography color="text.secondary" sx={{ textAlign: "center" }}>
            Total Accepted Orders
          </Typography>
          <div style={{ marginTop: "3rem", marginLeft: "2.5rem" }}>
            <Link color="primary" href="#" onClick={preventDefault}>
              View Detailed Report
            </Link>
          </div>
        </>
      </div>
    </React.Fragment>
  );
}
