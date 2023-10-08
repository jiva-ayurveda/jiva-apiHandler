import { LoadingButton } from "@mui/lab";
import {
  Box,
  CardActions,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import NotificationCard from "components/cards/NotificationCard";

import NotificationList from "components/listView/NotificationList";
import DefaultPlaceholder from "components/placeholder/DefaultPlaceholder";
import DisplayContent from "components/placeholder/DisplayContent";
import { global_img } from "config/images";
import { placeholder_msg } from "config/messages";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { fShortenNumber } from "utils/functionality";

export default function NotificationViewer(props) {
  const [pageIndex, setPageIndex] = useState(1);

  const notifylist = [];
  const notify_loading = false;
  const notify_data = {};

  const handlePageRequest = () => {
    if (notify_data.next_page_url) {
      setPageIndex(pageIndex + 1);
    }
  };

  return (
    <div>
      <NotificationCard border={false} elevation={16} content={false} boxShadow>
        <Box
          sx={{
            p: "10px",
            borderBottom: (theme) => `1px solid ${theme.palette.grey[300]}`,
          }}
        >
          <Stack direction="row" spacing={2}>
            <Typography variant="subtitle1">All Notification</Typography>
            <Chip
              size="small"
              color="primary"
              label={fShortenNumber(notifylist.length)}
            />
          </Stack>
        </Box>
        <DisplayContent
          valid1={notifylist.length > 0}
          content={
            <DefaultPlaceholder
              image={global_img.NOTIFICATION_PLACEHOLDER}
              desc={placeholder_msg.NO_NOTIFICATION}
            />
          }
        >
          <Grid item xs={12}>
            <PerfectScrollbar
              style={{
                overflowX: "hidden",
              }}
            >
              {notifylist.map((childObj) => (
                <NotificationList key={childObj.id} childObj={childObj} />
              ))}
            </PerfectScrollbar>
          </Grid>
        </DisplayContent>

        <Divider />
        <DisplayContent valid1={notify_data.next_page_url}>
          <CardActions
            sx={{
              p: 1.25,
              justifyContent: "center",
            }}
          >
            <LoadingButton
              loading={notify_loading}
              onClick={handlePageRequest}
              size="small"
            >
              View more
            </LoadingButton>
          </CardActions>
        </DisplayContent>
      </NotificationCard>
    </div>
  );
}
