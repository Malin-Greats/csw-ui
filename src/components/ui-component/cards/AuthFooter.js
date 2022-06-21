// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography variant="subtitle2" component={Link} href="https://malingreatssmartsystems.co.zw/" target="_blank" underline="hover">
      Developed by Malin Greats Smart Systens
    </Typography>
    {/* <Typography variant="subtitle2" component={Link} href="https://codedthemes.com" target="_blank" underline="hover">
      &copy; Malin Greats Pvt Ltd
    </Typography> */}
  </Stack>
);

export default AuthFooter;
