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
import AdbIcon from "@mui/icons-material/Adb";
import logoHeader from "../img/logoHeader.png"



import { Link } from "react-router-dom";



function ResponsiveAppBar() {
  // === gestion menu de gauche (burger ou liste suivant la taille)
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // -- afficher le menu à la position de la cible de l'event
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // -- fermer le menu -> la position est nulle
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  // === gestion menu de droite (profil user)
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* ==========  icone android à gauche 
                  s'affiche uniquement si taille écran = md */}

          {/* ==========  libellé à gauche qui
                  s'affiche uniquement si taille écran = md */}
          <Link to={"/"}>
            <img src={logoHeader}/>
          </Link>
          {/* menu burger qui s'affiche uniquement si taille écran = md */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/* icon burger */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu} // ouvre/ferme le menu
              color="red"
            >
              <MenuIcon />
            </IconButton>
            {/* le menu en popup si taille écran < md */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav} // position du menu
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)} // affiché / caché en fonction du state
              onClose={handleCloseNavMenu} // fonction exécutée quand on ferme le menu
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/"}>
                  <Typography textAlign="center">Accueil</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/StandList"}>
                  <Typography textAlign="center">Les Stands</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/ExhibitorList"}>
                  <Typography textAlign="center">Les Exposant</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/EventList"}>
                  <Typography textAlign="center">Les Events</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/TicketOffice"}>
                  <Typography textAlign="center">Billeterie</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/ExhibitorSpace"}>
                  <Typography textAlign="center">Escpace Exposant</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/MyCart"}>
                  <Typography textAlign="center">Mon Panier</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          {/* ==========  icone android à gauche 
                  s'affiche uniquement si taille écran < md */}

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            Mon appli
          </Typography>
          {/* ==========  menu de gauche mais affiché dans la navbar
             si la taille de l'écran est assez grande = md */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to={"/"}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Accueil
              </Button>
            </Link>
            <Link to={"/Stands"}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Les Stands
              </Button>
            </Link>
            <Link to={"/ExhibitorList"}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Les Exposants
              </Button>
            </Link>
            <Link to={"/EventList"}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Les Events
              </Button>
            </Link>
            <Link to={"/TicketOffice"}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Billeterie
              </Button>
            </Link>
            <Link to={"/ExhibitorSpace"}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Espace exposant
              </Button>
            </Link>
            <Link to={"/MyCart"}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Mon panier
              </Button>
            </Link>
          </Box>
          {/* ==========  menu profil user à droite 
                  toujours identique quelle que soit la taille de l'écran
          */}
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
