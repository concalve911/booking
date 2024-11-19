import React from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { Form, Field } from "react-final-form";
import "./Main.scss";

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
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Box
                className="search-block"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  maxWidth: 400,
                  margin: "0 auto",
                }}
              >
                <Field name="destination">
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      label="Destination"
                      variant="outlined"
                      fullWidth
                      error={meta.touched && meta.error}
                      helperText={meta.touched && meta.error ? meta.error : ""}
                    />
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
                  fullWidth
                >
                  Submit
                </Button>
              </Box>
            </form>
          )}
        />
      </Box>
    </div>
  );
};

export default Main;
