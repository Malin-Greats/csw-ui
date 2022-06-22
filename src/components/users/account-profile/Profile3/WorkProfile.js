import React, { useState } from "react";

// material-ui
import { Avatar, Button, Grid, Stack, TextField, Typography } from '@mui/material';

// project imports
import useAuth from 'hooks/useAuth';
import SubCard from 'components/ui-component/cards/SubCard';
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import WorkProfileWizard from 'components/forms/forms-wizard/WorkProfileWizard';
import {Checkbox, FormControlLabel,FormControl, FormGroup, Radio, RadioGroup} from '@mui/material';
import { styled } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
// assets
const Avatar1 = '/assets/images/users/avatar-1.png';
const Input = styled('input')({
  display: 'none',
});
// ==============================|| PROFILE 3 - PROFILE ||============================== //

    const WorkProfile = () => {
      const [img, setImg] = useState(); handleChange
      const [disciplined, setDisciplined] = React.useState(false);
      const [handleChange, setHandleChange] = React.useState(false);
      const [valueForeignPractice, setValueForeignPractice] = React.useState('no');
      const [valuePrivatePractice, setValuePrivatePractice] = React.useState('no');
      const [foreignPractice, setForeignPractice] = React.useState(false);
      const [privatePractice, setPrivatePractice] = React.useState(false);

      const { user } = useAuth();
      const [data, setData] = useState({
        title: "",
        description: "",
        image_url: "",
    });
    const onImageChange = (e) => {
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
    };
    const doSubmit = async (e) => {
      e.preventDefault();
      const response = await API.createMyModelEntry(data);
      if (response.status === 400) {
          setErrors(response.data);
      }
    
    const [errors, setErrors] = useState({
        title: "",
        description: "",
        image_url: "",
    });

    const handleImageChange = (e) => {
      console.log("upload image")
      let newData = { ...data };
      newData["image_url"] = e.target.files[0];
      setData(newData);
    };
  const changeDisciplined = (e) => {
    console.log('save form')
    console.log(e)
    setValueDisciplined(e)
    if (e === 'yes') {
      setDisciplined(true);
    } else {
      setDisciplined(false);
    }
  };

  const changePrivatePractice = (e) => {
    console.log('save form')
    console.log(e)
    setValuePrivatePractice(e)
    if (e === 'yes') {
      setPrivatePractice(true);
    } else {
      setPrivatePractice(false);
    }
  };

  const changeForeignPractice = (e) => {
    console.log('save form')
    console.log(e)
    setValueForeignPractice(e)
    if (e === 'yes') {
      setForeignPractice(true);
    } else {
      setForeignPractice(false);
    }
  };
};
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item sm={6} md={4}>
      {/* {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
      <form noValidate onSubmit={handleSubmit} {...others}> */}
      <SubCard title="Practice Experience" contentSX={{ textAlign: 'center' }} sx={{mb:5}}>
      <Grid item xs={12} sm={6} sx={{pb:5}}>
        <Typography variant="h5" gutterBottom sx={{ mb: -0.5 }}>
        Private Practice?      </Typography>
        
      <FormControl>
                  <RadioGroup
                    row
                    aria-label="Disciplined"
                    value={valuePrivatePractice}
                    onChange={(e) => changePrivatePractice(e.target.value)}
                    name="PrivatePractice-radio-buttons-group"
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h5" gutterBottom sx={{ mb: -0.5 }}>
        Practice outside Zimbabwe?      </Typography>
        
      <FormControl>
                  <RadioGroup
                    row
                    aria-label="foreignPractice"
                    value={valueForeignPractice}
                    onChange={(e) => changeForeignPractice(e.target.value)}
                    name="foreignPractice-radio-buttons-group"
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                </FormControl>
        </Grid>  
      </SubCard>
      {/* </form>
      )} */}

      </Grid>
      <Grid item sm={6} md={8}>
      <WorkProfileWizard privatePractice={privatePractice} foreignPractice={foreignPractice}  />
      </Grid>
    </Grid>
  );
};


export default WorkProfile;
