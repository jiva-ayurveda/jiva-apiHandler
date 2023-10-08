import { Divider, List, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { NavLink as RouterLink } from "react-router-dom";
import NavCollapse from "./NavCollapse";
import NavItem from "./NavItem";

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const NavItemContainer = ({ navMenulist, isDrawerOpen }) => {
  const theme = useTheme();

  // menu list collapse & items
  const items = navMenulist?.map((menu) => {
    if (menu.show) return null;

    switch (menu.type) {
      case "collapse":
        return (
          <NavCollapse
            key={menu.id}
            isDrawerOpen={isDrawerOpen}
            menu={menu}
            level={1}
          />
        );
      case "item":
        return (
          <NavItem
            key={menu.id}
            item={menu}
            isDrawerOpen={isDrawerOpen}
            level={1}
          />
        );
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return (
    <>
      <List
        className="pt-0"
        subheader={
          navMenulist.title && (
            <Typography
              variant="caption"
              sx={{ ...theme.typography.menuCaption }}
              display="block"
              gutterBottom
              component={RouterLink}
            >
              {navMenulist.title}
              {navMenulist.caption && (
                <Typography
                  variant="caption"
                  sx={{ ...theme.typography.subMenuCaption }}
                  display="block"
                  gutterBottom
                >
                  {navMenulist.caption}
                </Typography>
              )}
            </Typography>
          )
        }
      >
        {items}
      </List>

      <Divider sx={{ mt: 0.25, mb: 1.25 }} />
    </>
  );
};

NavItemContainer.propTypes = {
  navMenulist: PropTypes.array,
};

export default NavItemContainer;
