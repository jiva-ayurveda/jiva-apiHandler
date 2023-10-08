import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import { componentDimension } from "config/values";
import NavItemContainer from "./navItems";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({ navMenulist, children }) {
  const theme = useTheme();

  const isWebView = useMediaQuery(theme.breakpoints.up("md"));

  const DrawerHeader = styled("div")(({ theme }) => ({
    // necessary for content to be below app bar
    height: componentDimension.appBarHeight,
  }));

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        open={isWebView}
        sx={{ display: { sm: "block", xs: "none" } }}
      >
        <DrawerHeader />
        <NavItemContainer isDrawerOpen={isWebView} navMenulist={navMenulist} />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1 }}
        className={`${componentDimension.containerPadding}`}
      >
        {children}
      </Box>
    </Box>
  );
}
