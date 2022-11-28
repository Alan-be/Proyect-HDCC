import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LogoUniva from '../../assets/images/univaLogo.jpeg'
const pages = ['Pokedex', 'Marvel', 'GoogleMaps'];





function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{backgroundColor:"rgb(44,60,92)"}}>
      <Container maxWidth="xl">
        <div style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:" space-around"}}>
          <Toolbar disableGutters>
            <div style={{display:"flex", flexDirection:"row", width:"50%"}}>
              <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/4a/54/3c/4a543c29-6b14-d0ae-6508-78e9c436c6a4/source/512x512bb.jpg" width="30%" style={{marginRight:"1rem"}}/>
            </div>
            <div style={{display:"flex", flexDirection:"row", width:"50%"}}>

              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#Pokemon"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 100,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Pokedex
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#Marvel"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 100,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Marvel
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#Maps"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 100,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                GoogleMaps
              </Typography>
            </div>
            
          </Toolbar>
        </div>
        
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;