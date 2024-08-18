/* eslint-disable react/prop-types */
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CancelIcon from "@mui/icons-material/Cancel";

const RoundedCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  boxShadow: theme.shadows[3],
  minWidth: "150px",
  textAlign: "center",
  position: "relative",
}));

const ArrowLine = styled(Box)(({ theme }) => ({
  width: "40px",
  height: "1px",
  backgroundColor: theme.palette.grey[400],
  position: "relative",
  alignSelf: "center",
  "&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    right: "-10px",
    width: "10px",
    height: "10px",
    backgroundColor: theme.palette.grey[400],
    clipPath: "polygon(0 0, 100% 50%, 0 100%)",
    transform: "translateY(-50%)",
  },
}));

const ApprovalStatus = ({ status }) => {
  const statusEntries = Object.entries(status);

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {statusEntries.map(
        ([key, { statusValue, date, comment, dateOrComment }], index) => {
          let tooltipContent = "";
          if (statusValue === "submitted") {
            tooltipContent = `Submitted on: ${dateOrComment}`;
          } else if (statusValue === "approved") {
            tooltipContent = `Approved on: ${date}`;
          } else if (statusValue === "rejected") {
            tooltipContent = `Date: ${date}, Reason: ${comment}`;
          }

          return (
            <React.Fragment key={key}>
              <Grid item>
                <Tooltip title={tooltipContent} arrow>
                  <RoundedCard>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </Typography>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        {statusValue === "approved" && (
                          <CheckCircleIcon color="success" />
                        )}
                        {statusValue === "in process" && (
                          <HourglassEmptyIcon color="warning" />
                        )}
                        {statusValue === "rejected" && (
                          <CancelIcon color="error" />
                        )}
                        <Typography variant="body1" sx={{ ml: 1 }}>
                          {statusValue.charAt(0).toUpperCase() +
                            statusValue.slice(1)}
                        </Typography>
                      </Box>
                    </CardContent>
                  </RoundedCard>
                </Tooltip>
              </Grid>
              {index < statusEntries.length - 1 && <ArrowLine />}
            </React.Fragment>
          );
        }
      )}
    </Grid>
  );
};

export default ApprovalStatus;
