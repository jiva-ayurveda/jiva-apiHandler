import MoreIcon from "@mui/icons-material/MoreVert";
import { Avatar, Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import MuiNotificationIcon from "components/icons/notification";
import { componentDimension } from "config/values";
import { NavLink as RouterLink } from "react-router-dom";
import { profile_route } from "router/routeUrl";

const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  height: componentDimension.appBarHeight,
}));

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} color="inherit">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Serviconn
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <MuiNotificationIcon />
          <Tooltip title="Profile">
            <Avatar
              src={
                "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg"
              }
              className="elevation1 ml-2"
              component={RouterLink}
              to={`${profile_route.PROFILE}/1`}
            />
          </Tooltip>
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <DrawerHeader />
    </Box>
  );
}
