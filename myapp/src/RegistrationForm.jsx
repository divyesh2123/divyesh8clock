import React from "react";
import { Formik, Form, Field } from "formik";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

// Initial form values
const initialValues = {
  title: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

// Validation schema
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  acceptTerms: Yup.boolean().oneOf([true], "You must accept the terms"),
});

// Formik + MUI Form
const UserForm = () => {
  const handleSubmit = (values) => {

    axios.post("http://localhost:4000/accounts/register",values).then(y=>{
        toast("Wow so easy!");
    })


    
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <Box sx={{ maxWidth: 500, mx: "auto", p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h5">User Registration</Typography>

            <TextField
              select
              label="Title"
              name="title"
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.title && Boolean(errors.title)}
              helperText={touched.title && errors.title}
            >
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
              <MenuItem value="Miss">Miss</MenuItem>
            </TextField>

            <TextField
              label="First Name"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.firstName && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              label="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.lastName && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              label="Password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />

            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.confirmPassword && Boolean(errors.confirmPassword)}
              helperText={touched.confirmPassword && errors.confirmPassword}
            />

            <FormControlLabel
              control={
                <Checkbox
                  name="acceptTerms"
                  checked={values.acceptTerms}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label="I accept the terms and conditions"
            />
            {touched.acceptTerms && errors.acceptTerms && (
              <Typography variant="body2" color="error">
                {errors.acceptTerms}
              </Typography>
            )}

            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
