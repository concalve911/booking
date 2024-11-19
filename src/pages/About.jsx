import React from "react";
import { Box, Typography } from "@mui/material";
import "./About.scss";

const About = () => (
  <Box sx={{ padding: 3 }}>
    <Typography variant="h4" gutterBottom>
      About Our Company
    </Typography>
    <Typography variant="body1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia
      odio vitae vestibulum vestibulum. Fusce venenatis purus non dolor
      consequat, vel feugiat ligula faucibus.
    </Typography>
  </Box>
);

export default About;
