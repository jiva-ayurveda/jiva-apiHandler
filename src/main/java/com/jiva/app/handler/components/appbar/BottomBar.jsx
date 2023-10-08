import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { componentDimension } from "config/values";

const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  height: componentDimension.appBarHeight,
}));

export default function BottomAppBar() {
  return (
    <Box sx={{ display: { xs: "flex", sm: "none" } }}>
      <DrawerHeader />

      <AppBar
        elevation={0}
        position="fixed"
        color="inherit"
        sx={{ top: "auto", bottom: 0 }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Icon Container */}
          <IconButton>
            <HomeIcon />
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Tooltip title="Profile">
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          {/* End Icon Container */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
