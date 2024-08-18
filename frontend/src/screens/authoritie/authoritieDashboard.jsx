import React, { useState } from "react";
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
import { Menu as MenuIcon, Person as PersonIcon } from "@mui/icons-material";
import AuthorityStatus from "../../components/authority/statusComponent";
import ApproveRejectComponent from "../../components/authority/approveReject";

export const AuthorityDashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Status");
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // Authority data
  const authorityData = {
    total: 100,
    pending: 10,
    approved: 85,
    rejected: 5,
  };

  // Form enable data
  const data = [
    {
      departname: "Computer",
      year: "1st Year",
      pending: 10,
      approved: 50,
      rejected: 2,
    },
    {
      departname: "Mechanical",
      year: "2nd Year",
      pending: 5,
      approved: 40,
      rejected: 3,
    },
    {
      departname: "Electrical",
      year: "3rd Year",
      pending: 8,
      approved: 45,
      rejected: 1,
    },
  ];

  const [formEnableData, setFormEnableData] = useState([
    {
      esimid: "E22CS001",
      studentname: "Vinoth",
      department: "Computer Science",
      year: 3,
      semester: 5,
      enabled: true,
    },
    {
      esimid: "E22CS002",
      studentname: "Karthik",
      department: "Computer Science",
      year: 3,
      semester: 5,
      enabled: false,
    },
    {
      esimid: "E22CS003",
      studentname: "Priya",
      department: "Computer Science",
      year: 3,
      semester: 5,
      enabled: true,
    },
    {
      esimid: "E22CS004",
      studentname: "Rajesh",
      department: "Computer Science",
      year: 3,
      semester: 5,
      enabled: false,
    },
    {
      esimid: "E22CS005",
      studentname: "Samantha",
      department: "Computer Science",
      year: 3,
      semester: 5,
      enabled: true,
    },
    {
      esimid: "E22ME001",
      studentname: "Arun",
      department: "Mechanical Engineering",
      year: 2,
      semester: 3,
      enabled: false,
    },
    {
      esimid: "E22ME002",
      studentname: "Mohan",
      department: "Mechanical Engineering",
      year: 2,
      semester: 3,
      enabled: true,
    },
    {
      esimid: "E22ME003",
      studentname: "Divya",
      department: "Mechanical Engineering",
      year: 2,
      semester: 3,
      enabled: false,
    },
    {
      esimid: "E22ME004",
      studentname: "Suresh",
      department: "Mechanical Engineering",
      year: 2,
      semester: 3,
      enabled: true,
    },
    {
      esimid: "E22ME005",
      studentname: "Anitha",
      department: "Mechanical Engineering",
      year: 2,
      semester: 3,
      enabled: true,
    },
    {
      esimid: "E22EE001",
      studentname: "Vikram",
      department: "Electrical Engineering",
      year: 4,
      semester: 7,
      enabled: true,
    },
    {
      esimid: "E22EE002",
      studentname: "Kavya",
      department: "Electrical Engineering",
      year: 4,
      semester: 7,
      enabled: false,
    },
    {
      esimid: "E22EE003",
      studentname: "Ravi",
      department: "Electrical Engineering",
      year: 4,
      semester: 7,
      enabled: true,
    },
    {
      esimid: "E22EE004",
      studentname: "Anil",
      department: "Electrical Engineering",
      year: 4,
      semester: 7,
      enabled: false,
    },
    {
      esimid: "E22EE005",
      studentname: "Meena",
      department: "Electrical Engineering",
      year: 4,
      semester: 7,
      enabled: true,
    },
    {
      esimid: "E22CE001",
      studentname: "Surya",
      department: "Civil Engineering",
      year: 1,
      semester: 2,
      enabled: true,
    },
    {
      esimid: "E22CE002",
      studentname: "Ramesh",
      department: "Civil Engineering",
      year: 1,
      semester: 2,
      enabled: false,
    },
    {
      esimid: "E22CE003",
      studentname: "Geetha",
      department: "Civil Engineering",
      year: 1,
      semester: 2,
      enabled: true,
    },
    {
      esimid: "E22CE004",
      studentname: "Kiran",
      department: "Civil Engineering",
      year: 1,
      semester: 2,
      enabled: false,
    },
    {
      esimid: "E22CE005",
      studentname: "Lavanya",
      department: "Civil Engineering",
      year: 1,
      semester: 2,
      enabled: true,
    },
    {
      esimid: "E22EC001",
      studentname: "Ashok",
      department: "Electronics & Communication",
      year: 3,
      semester: 6,
      enabled: true,
    },
    {
      esimid: "E22EC002",
      studentname: "Swathi",
      department: "Electronics & Communication",
      year: 3,
      semester: 6,
      enabled: false,
    },
    {
      esimid: "E22EC003",
      studentname: "Manoj",
      department: "Electronics & Communication",
      year: 3,
      semester: 6,
      enabled: true,
    },
    {
      esimid: "E22EC004",
      studentname: "Rekha",
      department: "Electronics & Communication",
      year: 3,
      semester: 6,
      enabled: false,
    },
    {
      esimid: "E22EC005",
      studentname: "Vimal",
      department: "Electronics & Communication",
      year: 3,
      semester: 6,
      enabled: true,
    },
  ]);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleTabClick = (tab) => () => {
    setActiveTab(tab);
  };

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
            Authority Dashboard
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
                selected={activeTab === "Report"}
                onClick={handleTabClick("Report")}
                sx={{
                  bgcolor:
                    activeTab === "Report"
                      ? theme.palette.action.selected
                      : "transparent",
                }}
              >
                <ListItemText primary="Report" />
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
              selected={activeTab === "Report"}
              onClick={handleTabClick("Report")}
              sx={{
                bgcolor:
                  activeTab === "Report"
                    ? theme.palette.action.selected
                    : "transparent",
              }}
            >
              <ListItemText primary="Report" />
            </ListItem>
          </List>
          <Divider />
        </Drawer>
      )}

      <div className="content">
        {activeTab === "Status" && <AuthorityStatus data={authorityData} />}
        {activeTab === "Report" && (
          <ApproveRejectComponent
            data={formEnableData}
            setData={setFormEnableData}
          />
        )}
      </div>
    </>
  );
};

export default AuthorityDashboard;
