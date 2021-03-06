import * as React from 'react';
// material-ui
import { Button, Checkbox, FormControlLabel,FormControl, Radio, RadioGroup, Grid, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useEffect, useState } from "react";
import useAuth from 'hooks/useAuth';
import { InputAdornment } from '@mui/material';
import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers';
import '@mui/lab';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// assets
import DateRangeIcon from '@mui/icons-material/DateRange';
// ==============================|| FORM WIZARD - BASIC  ||============================== //

export default function PersonDetailsForm(...others) {
  const [form, setForm] = useState({ first_name: "", last_name: "" });
  const [valueBasic, setValueBasic] = React.useState(new Date());
  const [valueGender, setValueGender] = React.useState('female');
  const [valueLabel, setValueLabel] = React.useState('checked');
  const { first_name, last_name } = form;
  const { updatePersonalDetails } = useAuth();

  const saveForm = () => {
    console.log('save form')
    updatePersonalDetails();
  };
  return (
    <>
      <Formik
              initialValues={{
                email: 'info@codedthemes.com',
                password: '123456',
                submit: null,
                first_name: '',
                last_name: ''
              }}
                  onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        await updatePersonalDetails(values.first_name,values.last_name);
    
                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                        }
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
      >


{({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
      <form noValidate onSubmit={handleSubmit} {...others}>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>

          <TextField required id="firstNameBasic"
          onBlur={handleBlur}
          onChange={handleChange}
          inputProps={{}} 
          name="first_name"
          value={values.first_name} 
          label="First name" 
          fullWidth autoComplete="given-name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="lastNameBasic" name="lastName" label="Last name" fullWidth autoComplete="family-name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Nationality" fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="cardNumber" label="National ID" fullWidth autoComplete="cc-number" />
        </Grid>
        <Grid item xs={12} md={6}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
                renderInput={(props) => <TextField fullWidth {...props} helperText="" />}
                label="Date of Birth"
                value={valueBasic}
                onChange={(newValue) => {
                  setValueBasic(newValue);
                }}
              />
    </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="h5" gutterBottom sx={{ mb: -0.5 }}>
        Gender
      </Typography>
        <FormControl>
                  <RadioGroup
                    row
                    aria-label="gender"
                    value={valueLabel}
                    onChange={(e) => setValueLabel(e.target.value)}
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                  </RadioGroup>
                </FormControl>
        </Grid>
        <Grid item xs={12}>
        <Button variant="contained" size="small" onClick={saveForm} sx={{ my: 3, ml: 1 }}>
                  Save Details
                </Button>
        </Grid>
      </Grid>
      </form>
      )}
      </Formik>
    </>
  );
}
