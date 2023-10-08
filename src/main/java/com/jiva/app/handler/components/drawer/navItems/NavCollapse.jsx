import PropTypes from "prop-types";

// material-ui
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// project imports
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
import NavItem from "./NavItem";

// ==============================|| SIDEBAR MENU LIST COLLAPSE ITEMS ||============================== //

const NavCollapse = ({ menu, level, isDrawerOpen }) => {
  const theme = useTheme();
  const location = useLocation();

  let isSelected = location.pathname.includes(menu.parentUrl);

  // menu collapse & item
  const menus = menu.children?.map((item) => {
    switch (item.type) {
      case "collapse":
        return (
          <NavCollapse
            key={item.id}
            menu={item}
            isDrawerOpen={isDrawerOpen}
            level={level + 1}
          />
        );
      case "item":
        return (
          <NavItem
            key={item.id}
            isDrawerOpen={isDrawerOpen}
            item={item}
            level={level + 1}
          />
        );
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  const Icon = menu.icon;
  const menuIcon = menu.icon ? (
    <Icon
      strokeWidth={1.5}
      size="1.3rem"
      style={{ marginTop: "auto", marginBottom: "auto" }}
    />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: isSelected ? 8 : 6,
        height: isSelected ? 8 : 6,
      }}
      fontSize={level > 0 ? "inherit" : "medium"}
    />
  );

  return (
    <>
      <ListItemButton
        sx={{
          borderRadius: `12px`,
          mb: 0.5,
          alignItems: "flex-start",
          backgroundColor: level > 1 ? "transparent !important" : "inherit",
          py: level > 1 ? 1 : 1.25,
          pl: `${level * 24}px`,
        }}
        selected={isSelected}
        component={RouterLink}
        to={menu.parentUrl}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: "auto",
            justifyContent: "center",
          }}
        >
          {menuIcon}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography
              variant={isSelected ? "h5" : "body1"}
              color="inherit"
              sx={{ my: "auto" }}
            >
              {menu.title}
            </Typography>
          }
          secondary={
            menu.caption && (
              <Typography
                variant="caption"
                sx={{ ...theme.typography.subMenuCaption }}
                display="block"
                gutterBottom
              >
                {menu.caption}
              </Typography>
            )
          }
        />
        {isSelected ? (
          <KeyboardArrowUpIcon
            stroke={1.5}
            size="1rem"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          />
        ) : (
          <KeyboardArrowDownIcon
            stroke={1.5}
            size="1rem"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          />
        )}
      </ListItemButton>
      <Collapse in={isSelected} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{
            position: "relative",
            "&:after": {
              content: "''",
              position: "absolute",
              left: "32px",
              top: 0,
              height: "100%",
              width: "1px",
              opacity: 1,
              background: theme.palette.primary.light,
            },
          }}
        >
          {menus}
        </List>
      </Collapse>
    </>
  );
};

NavCollapse.propTypes = {
  menu: PropTypes.object,
  level: PropTypes.number,
};

export default NavCollapse;
