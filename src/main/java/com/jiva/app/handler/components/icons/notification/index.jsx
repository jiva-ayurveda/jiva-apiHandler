import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { Avatar, ButtonBase } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NotificationViewer from "components/contentViewer/notification";
import NotificationPopper from "components/popper";
import { useState } from "react";

// ==============================|| NOTIFICATION ||============================== //

const MuiNotificationIcon = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenPopper = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClosePopper = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ButtonBase sx={{ borderRadius: "12px" }}>
        <Avatar
          variant="rounded"
          sx={{
            ...theme.typography.commonAvatar,
            ...theme.typography.mediumAvatar,
            transition: "all .2s ease-in-out",
            background: theme.palette.secondary.light,
            color: theme.palette.secondary.dark,
            '&[aria-controls="menu-list-grow"],&:hover': {
              background: theme.palette.secondary.dark,
              color: theme.palette.secondary.light,
            },
          }}
          aria-haspopup="true"
          onClick={handleOpenPopper}
          color="inherit"
        >
          <CircleNotificationsIcon stroke={1.5} size="1.3rem" />
        </Avatar>
      </ButtonBase>

      <NotificationPopper anchorEl={anchorEl} handleClose={handleClosePopper}>
        <NotificationViewer />
      </NotificationPopper>
    </>
  );
};

export default MuiNotificationIcon;
