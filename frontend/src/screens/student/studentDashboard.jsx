import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import {
  AccountCircle,
  Menu as MenuIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import ApprovalStatus from "../../components/student/approvalStatus";
import RequestForm from "../../components/student/requestForm";
import "../../style/student/StudentDashboard.css";

export const StudentDashboard = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("Status");
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleTabClick = (tab) => () => {
    setActiveTab(tab);
  };

  const [approvalStatus, setApprovalStatus] = React.useState({
    submittedDate: { statusValue: "submitted", dateOrComment: "2024-08-13" },
    subjectStaff: {
      statusValue: "approved",
      date: "2024-08-14",
      comment: "Document reviewed",
    },
    mentor: { statusValue: "in process", dateOrComment: "" },
    advisor: { statusValue: "waiting", dateOrComment: "" },
    hod: {
      statusValue: "approved",
      date: "2024-08-15",
      comment: "All requirements met",
    },
    library: {
      statusValue: "rejected",
      date: "2024-08-16",
      comment: "Need to submit some books",
    },
    accounts: {
      statusValue: "approved",
      date: "2024-08-17",
      comment: "Fee paid",
    },
  });

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar className="toolbar">
          {!isDesktop && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              sx={{ marginRight: 2 }}
              className="menuButton"
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" className="title">
            Student Dashboard
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="profile"
            sx={{
              marginLeft: "auto",
              color: "white",
              zIndex: theme.zIndex.drawer + 1,
            }}
          >
            <PersonIcon />
          </IconButton>
        </Toolbar>
        {isDesktop && (
          <Drawer
            variant="persistent"
            anchor="left"
            open={true}
            sx={{ width: 240, flexShrink: 0, zIndex: theme.zIndex.drawer }}
            className="drawer"
            classes={{ paper: "drawerPaper" }}
          >
            <List style={{ paddingTop: 75 }}>
              <ListItem
                button
                selected={activeTab === "Status"}
                onClick={handleTabClick("Status")}
                sx={{
                  bgcolor:
                    activeTab === "Status"
                      ? theme.palette.action.selected
                      : "transparent",
                }}
              >
                <ListItemText primary="Status" />
              </ListItem>
              <ListItem
                button
                selected={activeTab === "Request Form"}
                onClick={handleTabClick("Request Form")}
                sx={{
                  bgcolor:
                    activeTab === "Request Form"
                      ? theme.palette.action.selected
                      : "transparent",
                }}
              >
                <ListItemText primary="Request Form" />
              </ListItem>
            </List>
            <Divider />
          </Drawer>
        )}
      </AppBar>

      {!isDesktop && (
        <Drawer
          variant="temporary"
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{ width: 240, flexShrink: 0, zIndex: theme.zIndex.drawer }}
          className="drawer"
          classes={{ paper: "drawerPaper" }}
        >
          <List>
            <ListItem
              button
              selected={activeTab === "Status"}
              onClick={handleTabClick("Status")}
              sx={{
                bgcolor:
                  activeTab === "Status"
                    ? theme.palette.action.selected
                    : "transparent",
              }}
            >
              <ListItemText primary="Status" />
            </ListItem>
            <ListItem
              button
              selected={activeTab === "Request Form"}
              onClick={handleTabClick("Request Form")}
              sx={{
                bgcolor:
                  activeTab === "Request Form"
                    ? theme.palette.action.selected
                    : "transparent",
              }}
            >
              <ListItemText primary="Request Form" />
            </ListItem>
          </List>
          <Divider />
        </Drawer>
      )}

      <div className="content">
        {activeTab === "Status" && <ApprovalStatus status={approvalStatus} />}
        {activeTab === "Request Form" && <RequestForm />}
      </div>
    </>
  );
};

export default StudentDashboard;
