// material-ui
import { styled } from '@mui/material/styles';

// project imports
import Header from 'components/landingpage/Header';
import Demos from 'components/landingpage/Demos';
import Footer from 'components/landingpage/Footer';
import AppBar from 'components/ui-component/extended/AppBar';
import Services from 'components/landingpage/Services';
const HeaderWrapper = styled('div')(({ theme }) => ({
  paddingTop: 30,
  overflowX: 'hidden',
  overflowY: 'clip',
  backgroundColor:'#F5F5F5',
  [theme.breakpoints.down('md')]: {
    paddingTop: 42
  }
}));

const SecondWrapper = styled('div')(({ theme }) => ({
  paddingTop: 160,
  [theme.breakpoints.down('md')]: {
    paddingTop: 60
  }
}));

// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
  <>
    <HeaderWrapper id="home">
      <AppBar />
      <Header />
    </HeaderWrapper>
    {/* <SecondWrapper>
      <Feature />
    </SecondWrapper> */}
    <SecondWrapper>
      <Demos />
    </SecondWrapper>
    <SecondWrapper>
      <Services />
    </SecondWrapper>
    {/* <SecondWrapper>
      <KeyFeature />
    </SecondWrapper>
    <SecondWrapper>
      <Subscribe />
    </SecondWrapper> */}
    <Footer />
  </>
);

export default Landing;
