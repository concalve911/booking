import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./HotelCard.scss";

const HotelCard = ({ hotel }) => (
  <Card className="hotel-card" sx={{ width: 140, height: 140 }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {hotel.name}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {hotel.location}
      </Typography>
      <Typography variant="body1" color="primary">
        ${hotel.price} per night
      </Typography>
    </CardContent>
  </Card>
);

export default HotelCard;
