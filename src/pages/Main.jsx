import React from "react";
import { Box, Typography } from "@mui/material";
import HotelSearchForm from "../components/HotelSearchForm";
import "./main.scss";

const Main = () => {
  const onSubmit = (values) => {
    console.log("Form Data: ", values);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.destination) {
      errors.destination = "Destination is required";
    }
    if (!values.checkin) {
      errors.checkin = "Check-in date is required";
    }
    if (!values.checkout) {
      errors.checkout = "Check-out date is required";
    }
    if (!values.adults) {
      errors.adults = "Number of adults is required";
    }
    return errors;
  };

  return (
    <div className="wrapper">
      <Box className="main" sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Search Hotels
        </Typography>
        <HotelSearchForm onSubmit={onSubmit} validate={validate} />
      </Box>
    </div>
  );
};

export default Main;
