import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { ButtonGroup } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";


const Header = () => {

  const navigate = useNavigate()


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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link to={`/`} style={{ color: "white", textDecoration: "none" }}>
              CLX
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    to={`/sell`}
                    style={{ color: "Black", textDecoration: "none" }}
                  >
                    Sell
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    to={`/sold`}
                    style={{ color: "Black", textDecoration: "none" }}
                  >
                    Sold items
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    to={`/purchased`}
                    style={{ color: "Black", textDecoration: "none" }}
                  >
                    Purchased items
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Link to={`/`} style={{ color: "white", textDecoration: "none" }}>
              CLX
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Link
                to={`/sell`}
                style={{ color: "white", textDecoration: "none" }}
              >
                Sell
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Link
                to={`/sold`}
                style={{ color: "White", textDecoration: "none" }}
              >
                Sold items
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, display: "block" }}
            >
              <Link
                to={`/purchased`}
                style={{ color: "White", textDecoration: "none" }}
              >
                Purchased items
              </Link>
            </Button>
          </Box>
          {/* {user ? ( 
            <>
            Hi {user.name}
             <Button color="inherit" onClick={onLogout}> */}
            {" "}
            {/* <Link
              to={`/signin`}
              style={{ color: "White", textDecoration: "none" }}
            > */}
              {/* Logout */}
            {/* </Link> */}
          {/* </Button>
          </>
          ) : (  */}
            <Button color="inherit">
            {" "}
            <Link
              to={`/`}
              style={{ color: "White", textDecoration: "none" }}
            >
              Signin
            </Link>
          </Button>
          {/* //      <Box sx={{ flexGrow: 0 }}>
          //   <Tooltip title="profile">
          //     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          //       <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          //     </IconButton>
          //   </Tooltip>
            
          // </Box> */}
          {/* )} */}
        
      
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
