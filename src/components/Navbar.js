// import React from "react";
// import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { styleActions } from "../store/style";

// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";

import classes from "./Navbar.module.css";

// const navItems = ["Home", "About", "Contact"];
// const drawerWidth = 240;

// const Navar = () => {
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };
//   const isMenuOpen = useSelector((state) => state.style.navModalIsOpen);

//   const dispatchFn = useDispatch();

//   const onMenuClick = () => {
//     dispatchFn(styleActions.toggleNavModal());
//   };

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item} disablePadding>
//             <ListItemButton sx={{ textAlign: "center" }}>
//               <ListItemText primary={item} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <Box sx={{ display: "flex" }}>
//       {/* <CssBaseline /> */}
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
//           >
//             MUI
//           </Typography>
//           <Box sx={{ display: { xs: "none", sm: "block" } }}>
//             {navItems.map((item) => (
//               <Button key={item} sx={{ color: "#fff" }}>
//                 {item}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );

//   {
//     /* //   return (
// //     <>
// //       <div className={classes.menu}>
// //         <IconButton onClick={onMenuClick}>
// //           <MenuIcon />
// //         </IconButton>
// //       </div>
// //       {(window.screen.width <= 330 && isMenuOpen) || */
//   }
//   //         (!window.screen.width <= 330 && (
//   //           <div className={classes.navbar}>
//   //             <ul>
//   //               <NavLink
//   //                 to="/"
//   //                 className={({ isActive }) =>
//   //                   isActive ? classes.active : undefined
//   //                 }
//   //               >
//   //                 Home
//   //               </NavLink>
//   //               <NavLink
//   //                 to="/products/mobile"
//   //                 className={({ isActive }) =>
//   //                   isActive ? classes.active : undefined
//   //                 }
//   //               >
//   //                 Mobile
//   //               </NavLink>
//   //               <NavLink
//   //                 to="/products/electronics"
//   //                 className={({ isActive }) =>
//   //                   isActive ? classes.active : undefined
//   //                 }
//   //               >
//   //                 Electronics
//   //               </NavLink>
//   //               <NavLink
//   //                 to="/products/fashion"
//   //                 className={({ isActive }) =>
//   //                   isActive ? classes.active : undefined
//   //                 }
//   //               >
//   //                 Fashion
//   //               </NavLink>
//   //             </ul>
//   //           </div>
//   //         ))}
//   //     </>
//   //   );
// };

// export default Navar;

import * as React from "react";
import PropTypes from "prop-types";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const drawerWidth = 240;
const navItems = [
  { title: "Home", path: "/" },
  { title: "Mobile", path: "/products/mobile" },
  { title: "Electronics", path: "/products/electronics" },
  { title: "Fashion", path: "/products/fashion" },
  { title: "Cart", path: "/cart" },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }} onClick={navigateToHome}>
        eCommerce
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText className={classes["mobile-nav"]}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  {item.title}
                </NavLink>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{ display: "flex", marginBottom: "5rem" }}
      className={classes.navbar}
    >
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", cursor: "pointer" },
            }}
            onClick={navigateToHome}
          >
            eCommerce
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) =>
              item.title !== "Cart" ? (
                <Button
                  key={item.title}
                  sx={{ color: "#fff", fontSize: "16px" }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? classes.active : undefined
                    }
                  >
                    {item.title}
                  </NavLink>
                </Button>
              ) : (
                <IconButton key={item.title} sx={{ float: "right" }}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? classes.active : undefined
                    }
                  >
                    <ShoppingCartIcon />
                  </NavLink>
                </IconButton>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
