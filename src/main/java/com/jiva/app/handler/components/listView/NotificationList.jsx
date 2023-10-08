// material-ui
import {
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { directory_location } from "config/images";
import { timeAgo } from "utils/functionality";
import { parseBitmapUrl } from "utils/parse";

// styles
const ListItemWrapper = styled("div")(({ theme }) => ({
  cursor: "pointer",
  padding: 16,
  "&:hover": {
    background: theme.palette.primary.light,
  },
  "& .MuiListItem-root": {
    padding: 0,
  },
}));

// ==============================|| NOTIFICATION LIST ITEM ||============================== //

const NotificationList = ({ childObj }) => {
  const theme = useTheme();

  return (
    <>
      <Divider sx={{ my: 0 }} />

      <List
        sx={{
          width: "100%",
          maxWidth: 330,
          py: 0,
          borderRadius: "10px",
          [theme.breakpoints.down("md")]: {
            maxWidth: 300,
          },
          "& .MuiListItemSecondaryAction-root": {
            top: 22,
          },
          "& .MuiDivider-root": {
            my: 0,
          },
          "& .list-container": {
            pl: 7,
          },
        }}
      >
        <ListItemWrapper>
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar
                alt={childObj.user.fullname}
                src={parseBitmapUrl(
                  childObj.user.avatar,
                  directory_location.avatar
                )}
              />
            </ListItemAvatar>
            <ListItemText primary={childObj.user.fullname} />
            <ListItemSecondaryAction>
              <Grid container justifyContent="flex-end">
                <Grid item xs={12}>
                  <Typography variant="caption" display="block" gutterBottom>
                    {timeAgo(childObj.created_at)}
                  </Typography>
                </Grid>
              </Grid>
            </ListItemSecondaryAction>
          </ListItem>
          <Grid container direction="column" className="list-container">
            <Grid item xs={12} sx={{ pb: 2 }}>
              <Typography variant="subtitle2">{childObj.message}</Typography>
            </Grid>
          </Grid>
        </ListItemWrapper>
        <Divider />
      </List>
    </>
  );
};

export default NotificationList;
