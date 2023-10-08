import PropTypes from "prop-types";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

// material-ui
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Avatar,
  Chip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level, isDrawerOpen }) => {
  const theme = useTheme();
  const location = useLocation();

  const Icon = item.icon;
  const itemIcon = item?.icon ? (
    <Icon stroke={1.5} size="1.3rem" />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width: 6,
        height: 6,
      }}
      fontSize={level > 0 ? "inherit" : "medium"}
    />
  );

  let itemTarget = "_self";
  if (item.target) {
    itemTarget = "_blank";
  }

  let listItemProps = {
    component: item.url
      ? forwardRef((props, ref) => (
          <Link ref={ref} {...props} to={item.url} target={itemTarget} />
        ))
      : undefined,
  };
  if (item?.external) {
    listItemProps = { component: "a", href: item.url, target: itemTarget };
  }

  let active = item.isactive
    ? item.isactive
    : !item.index
    ? location.pathname.includes(item.url)
    : location.pathname === item.url;

  return (
    <ListItemButton
      {...listItemProps}
      onClick={item.handleClick || undefined}
      disabled={item.disabled}
      sx={{
        mb: 0.5,
        alignItems: "flex-start",
        backgroundColor: level > 1 ? "transparent !important" : "inherit",
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`,
        "&.Mui-selected": {
          borderRight: (theme) => `2px solid ${theme.palette.indigo[500]}`,
        },
      }}
      selected={active}
    >
      <ListItemIcon sx={{ my: "auto", minWidth: !item?.icon ? 18 : 36 }}>
        {itemIcon}
      </ListItemIcon>
      <ListItemText
        sx={{ opacity: isDrawerOpen ? 1 : 0 }}
        primary={
          <Typography variant={"body1"} color="inherit">
            {item.title}
          </Typography>
        }
        secondary={
          item.caption && (
            <Typography
              variant="caption"
              sx={{ ...theme.typography.subMenuCaption }}
              display="block"
              gutterBottom
            >
              {item.caption}
            </Typography>
          )
        }
      />
      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number,
};

export default NavItem;
