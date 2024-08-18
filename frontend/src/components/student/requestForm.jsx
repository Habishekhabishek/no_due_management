import { useState } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RequestForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState("");

  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    reg_num: Yup.string().required("Registration Number is required"),
    esim_id: Yup.string().required("ESIM ID is required"),
    student_name: Yup.string().required("Student Name is required"),
    mail_id: Yup.string()
      .email("Invalid email format")
      .required("Mail ID is required"),
    department: Yup.string().required("Department is required"),
    semester: Yup.string().required("Semester is required"),
  });

  const initialValues = {
    reg_num: "",
    esim_id: "",
    student_name: "",
    mail_id: "",
    department: "",
    semester: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/submit", values);
      setSubmissionStatus("Form successfully submitted!");
      resetForm();
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message || "Error submitting form. Please try again."
        : "Error submitting form. Please try again.";
      setSubmissionStatus(errorMessage);
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Paper elevation={3} style={{ padding: 16 }}>
      <Typography variant="h5" gutterBottom>
        Request Form
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  fullWidth
                  label="Registration Number"
                  name="reg_num"
                  variant="outlined"
                  error={touched.reg_num && Boolean(errors.reg_num)}
                  helperText={<ErrorMessage name="reg_num" />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  fullWidth
                  label="ESIM ID"
                  name="esim_id"
                  variant="outlined"
                  error={touched.esim_id && Boolean(errors.esim_id)}
                  helperText={<ErrorMessage name="esim_id" />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  fullWidth
                  label="Student Name"
                  name="student_name"
                  variant="outlined"
                  error={touched.student_name && Boolean(errors.student_name)}
                  helperText={<ErrorMessage name="student_name" />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  fullWidth
                  label="Mail ID"
                  name="mail_id"
                  variant="outlined"
                  error={touched.mail_id && Boolean(errors.mail_id)}
                  helperText={<ErrorMessage name="mail_id" />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  fullWidth
                  label="Department"
                  name="department"
                  variant="outlined"
                  error={touched.department && Boolean(errors.department)}
                  helperText={<ErrorMessage name="department" />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  fullWidth
                  label="Semester"
                  name="semester"
                  variant="outlined"
                  error={touched.semester && Boolean(errors.semester)}
                  helperText={<ErrorMessage name="semester" />}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
              <Grid item xs={12}>
                {submissionStatus && (
                  <Typography variant="body2" color="textSecondary">
                    {submissionStatus}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default RequestForm;
