import Image from 'next/image';
import { useTheme, styled } from '@mui/material/styles';

// material-ui
import {Box, Button, ButtonBase, Container, Grid, Typography } from '@mui/material';
import Link from 'Link';
// project imports
import FadeInWhenVisible from './Animation';
import Categories from './Categories';
import AnimateButton from 'components/ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
const categories = ['Products', 'Pricing', 'Blog'];
// ==============================|| LANDING - DEMOS PAGE ||============================== //

const DemosPage = () => {
  const theme = useTheme();

  return (

  <Container>
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} lg={5} md={10}>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
          <Grid item xs={12} md={3} sm={6}>

          <Grid container spacing={1} sx={{ mb: 2 }}>
          <Grid item xs={12}>
            <Grid container spacing s={1}>
              <Grid item>
                <Typography variant="h5" color="#545BE8;
">
                AVAILABLE FOR YOU
                </Typography>
                
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" sx={{textAlign: 'left'}}>
            Shop <span>
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
            Unique
                  </Box>
              </span> 
              <br/>
Book Collections
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{fontSize: '18px',textAlign: 'left' }}>
            Support our authors and purchase their books at affordable prices. Dozens of genres for you choose from!
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'left', mt: 3 }}>
        <AnimateButton>
          <Button sx={{mt: 6, pl:6, pr: 6}} component={Link} href="/forms/components/autocomplete" variant="contained">
            See all
          </Button>
        </AnimateButton>
      </Grid>

          </Grid>
          {categories.map((category) => (
         <Grid item xs={12} md={3} sm={6}>
         <Categories/>
       </Grid>
          ))}
 
        </Grid>
      </Grid>

    </Grid>
  </Container>
);
};
export default DemosPage;
