import React, { useState } from "react";

// material-ui
import { Avatar, Button, Grid, Stack, TextField, Typography } from '@mui/material';

// project imports
import useAuth from 'hooks/useAuth';
import SubCard from 'components/ui-component/cards/SubCard';
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import BasicWizard from 'components/forms/forms-wizard/BasicWizard';
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

    const Profile = () => {
      const [img, setImg] = useState();
      const { user } = useAuth();
      console.log(user.first_name)
      const [data, setData] = useState({
        title: "",
        description: "",
        image_url: "",
    });
    const onImageChange = (e) => {
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
    };
  
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

    const doSubmit = async (e) => {
      e.preventDefault();
      const response = await API.createMyModelEntry(data);
      if (response.status === 400) {
          setErrors(response.data);
      }
    };
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item sm={6} md={4}>
        <SubCard title="Profile Picture" contentSX={{ textAlign: 'center' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
      <label htmlFor="icon-button-file">
      <Avatar alt="User 1" src={img ? img : Avatar1  } sx={{ width: 100, height: 100, margin: '0 auto' }} />
        <Input onChange={onImageChange} accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" align="center">
                Upload/Change Your Profile Image
              </Typography>
            </Grid>
            <Grid item xs={12}>
            <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Button variant="contained"
                       type="submit"
                       onClick={(e) => doSubmit(e)} 
        component="span"
        >
          Upload
        </Button>
      </label>
    </Stack>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
      <Grid item sm={6} md={8}>
      <BasicWizard />
      </Grid>
    </Grid>
  );
};

export default Profile;
