import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import { Link as RouterLink } from "react-router-dom";

function PositionedMenu(props) {
  const { positionIcon, iconHelperText, menulist, arrowMode } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip title={iconHelperText}>
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "target-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {positionIcon}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              [arrowMode]: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {menulist.map((item) => {
          const { icon: Icon, label, onClick, link } = item;

          if (item.hide) return null;

          return (
            <MenuItem
              onClick={onClick}
              component={link ? RouterLink : undefined}
              to={link}
              key={item.label}
            >
              <ListItemIcon className={item.className}>
                <Icon fontSize="small" />
              </ListItemIcon>
              <ListItemText className={item.className}>{label}</ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </React.Fragment>
  );
}

PositionedMenu.defaultProps = {
  arrowMode: "right",
};

export default PositionedMenu;
