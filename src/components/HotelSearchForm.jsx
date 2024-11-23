import React, { useEffect } from "react";
import {
  Button,
  TextField,
  Box,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelsRequest } from "../redux/slices/hotelsSlice";

const HotelSearchForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const { list: hotels, status } = useSelector((state) => state.hotels);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchHotelsRequest());
    }
  }, [dispatch, status]);

  const validateFields = (values) => {
    const errors = {};
    const currentDate = new Date().toISOString().split("T")[0];

    if (!values.destination) {
      errors.destination = "Destination is required";
    }

    if (!values.checkin) {
      errors.checkin = "Check-in date is required";
    } else if (values.checkin < currentDate) {
      errors.checkin = "Check-in date cannot be in the past";
    }

    if (!values.checkout) {
      errors.checkout = "Check-out date is required";
    } else if (values.checkout <= values.checkin) {
      errors.checkout = "Check-out date must be after check-in date";
    }

    if (!values.adults) {
      errors.adults = "Number of adults is required";
    } else if (values.adults < 0) {
      errors.adults = "Number of adults cannot be negative";
    }

    if (!values.children) {
      errors.children = "Number of children is required";
    } else if (values.children < 0) {
      errors.children = "Number of children cannot be negative";
    }

    return errors;
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validateFields}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Box
            className="search-block"
            sx={{
              display: "flex",
              gap: 2,
              maxWidth: 1000,
              margin: "0 auto",
            }}
          >
            <Field name="destination">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  select
                  label="Destination"
                  variant="outlined"
                  fullWidth
                  error={meta.touched && meta.error}
                  helperText={meta.touched && meta.error ? meta.error : ""}
                >
                  {status === "loading" ? (
                    <MenuItem disabled>
                      <CircularProgress size={24} />
                    </MenuItem>
                  ) : Array.isArray(hotels) ? (
                    hotels.map((hotel) => (
                      <MenuItem key={hotel.id} value={hotel.name}>
                        {hotel.name}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem disabled>No hotels available</MenuItem>
                  )}
                </TextField>
              )}
            </Field>

            <Field name="checkin" type="date">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label="Check-in"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  fullWidth
                  error={meta.touched && meta.error}
                  helperText={meta.touched && meta.error ? meta.error : ""}
                />
              )}
            </Field>

            <Field name="checkout" type="date">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label="Check-out"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  fullWidth
                  error={meta.touched && meta.error}
                  helperText={meta.touched && meta.error ? meta.error : ""}
                />
              )}
            </Field>

            <Field name="adults" type="number">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label="Adults"
                  variant="outlined"
                  fullWidth
                  error={meta.touched && meta.error}
                  helperText={meta.touched && meta.error ? meta.error : ""}
                />
              )}
            </Field>

            <Field name="children" type="number">
              {({ input, meta }) => (
                <TextField
                  {...input}
                  label="Children"
                  variant="outlined"
                  fullWidth
                  error={meta.touched && meta.error}
                  helperText={meta.touched && meta.error ? meta.error : ""}
                />
              )}
            </Field>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                width: "auto",
                height: 56,
                paddingLeft: "45px",
                paddingRight: "45px",
                paddingTop: "11px",
                paddingBottom: "11px",
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      )}
    />
  );
};

export default HotelSearchForm;
