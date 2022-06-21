import Image from 'next/image';
// material-ui
import { styled } from '@mui/material/styles';
import {Button,Stack, ButtonBase,Card, Grid, Typography, CardActions, CardContent} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Link from 'Link';
// project imports
import SubCard from 'components/ui-component/cards/SubCard';

// assets
const banner = '/assets/images/landing/services banner.png';

// styled constant
const Img = styled(Image)({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%'
});

// ===============================|| GRID - COMPLEX ||=============================== //

export default function ComplexGrid() {
  const theme = useTheme();
  const cardStyle = {
    background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
    border: '1px solid',
    borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[100]
  };
  return (

  <Grid sx={{  backgroundColor:'#272DB0', flexGrow: 1 }} container spacing={2}>
  <Grid item xs={6}>
  <ButtonBase sx={{ pl:10, width: { xs: '100%', sm: 200, md:600 } }}>
            <Img height="550%" width="550%" alt="complex" src={banner} />
          </ButtonBase>
  </Grid>
  <Grid item xs={5} >
  <Typography sx={{mt:12 , fontSize:18}} variant="h5" color="#FEDD5F;">
  OUR SERVICES
                </Typography>

                <Typography sx={{fontSize:40}} variant="h5" color="#FFFFFF;
;">
                Print. Publish. Sell.
                </Typography>

                <Typography sx={{mt:4, fontSize:18}} variant="h5" color="#DDDDDD;">
                We offer printing and/or publishing services to authors who want to share their stories with the world. Simply upload your work onto our website at no cost and start making sales!
Our process is centered around supporting authors and giving then a voice.

Already have your work published? Sell your books on our website and give thousands of people access to your work.
                </Typography>
<Grid sx={{mt:10}}>


                <Stack direction="row" sx={{  display: { xs: 'none', sm: 'block', pt:10 } }} spacing={12}>
              <Button sx={{paddingRight :5, paddingLeft :5, backgroundColor:"#545BE8"}} variant="contained" color="primary" component={Link} href="https://codedthemes.gitbook.io/berry" target="_blank">
              Learn More
              </Button>
              <Button
               sx={{paddingRight :4, paddingLeft :4}}
                component={Link}
                href="https://material-ui.com/store/items/berry-react-material-admin/"
                disableElevation
                
                variant="outlined"
                color="secondary"
              >
                 <Typography sx={{pt :.6, pb :.6}}  color="#DDDDDD;">
                 Start Selling
                 </Typography>
                
              </Button>
            </Stack>
            </Grid>
  </Grid>
</Grid>

  );
}
