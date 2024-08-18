/* eslint-disable react/prop-types */
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ResponsiveBar } from "@nivo/bar";

const RoundedCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  boxShadow: theme.shadows[3],
  minWidth: "150px",
  textAlign: "center",
  position: "relative",
  backgroundColor: theme.palette.background.paper,
  flexGrow: 1,
}));

const AuthorityStatus = ({ data }) => {
  const chartData = [
    { status: "Total", count: data.total },
    { status: "Pending", count: data.pending },
    { status: "Approved", count: data.approved },
    { status: "Rejected", count: data.rejected },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2} justifyContent="space-evenly">
        <Grid item xs={12} sm={3}>
          <RoundedCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total Requests
              </Typography>
              <Typography variant="body1">{data.total}</Typography>
            </CardContent>
          </RoundedCard>
        </Grid>
        <Grid item xs={12} sm={3}>
          <RoundedCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Pending
              </Typography>
              <Typography variant="body1">{data.pending}</Typography>
            </CardContent>
          </RoundedCard>
        </Grid>
        <Grid item xs={12} sm={3}>
          <RoundedCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Approved
              </Typography>
              <Typography variant="body1">{data.approved}</Typography>
            </CardContent>
          </RoundedCard>
        </Grid>
        <Grid item xs={12} sm={3}>
          <RoundedCard>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Rejected
              </Typography>
              <Typography variant="body1">{data.rejected}</Typography>
            </CardContent>
          </RoundedCard>
        </Grid>
      </Grid>

      <Box sx={{ height: 500, marginTop: 4 }}>
        <ResponsiveBar
          data={chartData}
          keys={["count"]}
          indexBy="status"
          margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          colors={{ scheme: "nivo" }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: "middle",
            legendOffset: -40,
            tickValues: [20,40,60,80,100],
          }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: "middle",
            legendOffset: 32,
          }}
          enableGridX={false} // Disable X-axis grid lines
          enableGridY={false} // Disable Y-axis grid lines
        />
      </Box>
    </Box>
  );
};

export default AuthorityStatus;
