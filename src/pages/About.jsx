import React from "react";
import { Box, Typography } from "@mui/material";
import HotelSearchForm from "../components/HotelSearchForm";
import "./About.scss";

const About = () => {
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
    <Box sx={{ padding: 3, textAlign: "center" }}>
      <HotelSearchForm onSubmit={onSubmit} validate={validate} />
      <Typography sx={{ marginTop: 5 }} variant="h4" gutterBottom>
        About Our Company
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
        odio vitae vestibulum vestibulum. Fusce venenatis purus non dolor
        consequat, vel feugiat ligula faucibus.
      </Typography>
    </Box>
  );
};

export default About;
