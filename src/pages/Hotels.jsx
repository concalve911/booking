import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Box, Typography } from "@mui/material";
import { fetchHotelsRequest } from "../redux/slices/hotelsSlice";
import HotelCard from "../components/HotelCard";
import "./Hotels.scss";

const Hotels = () => {
  const dispatch = useDispatch();
  const { list: hotels, status, error } = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(fetchHotelsRequest());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  if (status === "succeeded" && !Array.isArray(hotels.hotels)) {
    return <div>Error: hotels data is not an array</div>;
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Available Hotels
      </Typography>
      <Grid container spacing={2}>
        {status === "succeeded" &&
          hotels.hotels.map((hotel) => (
            <Grid item xs={12} sm={6} md={3} key={hotel.id}>
              <HotelCard hotel={hotel} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Hotels;
