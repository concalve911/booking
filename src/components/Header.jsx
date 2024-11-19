import React from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    navigate(newValue);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Hotel Booking
        </Typography>
        <Tabs
          value={location.pathname}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="secondary"
        >
          <Tab label="Home" value="/" />
          <Tab label="About" value="/about" />
          <Tab label="Hotels" value="/hotels" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
