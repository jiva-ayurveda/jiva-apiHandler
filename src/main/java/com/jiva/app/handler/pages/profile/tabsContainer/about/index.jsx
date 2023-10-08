import ContactsIcon from "@mui/icons-material/Contacts";
import DoorBackIcon from "@mui/icons-material/DoorBack";
import GpsNotFixedIcon from "@mui/icons-material/GpsNotFixed";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Chip, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import { Box } from "@mui/system";
import DisplayContent from "components/placeholder/DisplayContent";
import { display_msg } from "config/messages";
import { profile_data } from "deletefolder/dummydata";
import { isDataArray, parseJsonObj } from "utils/parse";

export default function AboutTabPage(props) {
  const responseDta = profile_data.index;

  return (
    <div className="px-4 px-2">
      <DisplayContent
        valid1={responseDta.service_available == 2}
        content={
          <Paper
            sx={{
              width: 350,
              backgroundColor: green[50],
              p: 3,
              textAlign: "center",
              m: "40px auto",
            }}
            elevation={1}
          >
            <ManageAccountsIcon
              sx={{
                fontSize: 80,
                color: green[400],
              }}
            />

            <Typography variant="h4" sx={{ color: green[700] }}>
              {display_msg.profile.fullService}
            </Typography>
          </Paper>
        }
      >
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              {responseDta.startTime}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="success">
                <MeetingRoomIcon sx={{ color: "#fff" }} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Open
              </Typography>
              <Typography>{responseDta.openingTrade}</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              {responseDta.endTime}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="error">
                <DoorBackIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Close
              </Typography>
              <Typography>{responseDta.closingTrade}</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <div className="mt-3 text-center">
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((item) => (
            <Chip
              key={item}
              disabled={parseJsonObj(responseDta.openDays).indexOf(item) == -1}
              variant="outlined"
              className="m-1 elevation1"
              label={item}
            />
          ))}
        </div>
      </DisplayContent>

      <div className="mt-3">
        <div className="highlight my-3 bgc-white">
          <InfoOutlinedIcon className="highlight-icon" />
          <Typography className="highlight-typo">Info</Typography>
        </div>

        <Box
          sx={{
            minHeight: 150,
            position: "relative",
          }}
        >
          <Typography paragraph className="pt-1 c-grey-800 readnewline">
            {responseDta.description}
          </Typography>
        </Box>

        <DisplayContent valid1={true}>
          <div className="highlight my-3 bgc-white">
            <GpsNotFixedIcon className="highlight-icon" />
            <Typography className="highlight-typo">NearyBy Places</Typography>
          </div>
          <Box
            sx={{
              minHeight: 150,
              position: "relative",
            }}
          >
            {isDataArray(responseDta.nearbyplaces).map((item) => (
              <Chip
                key={item}
                className="m-1"
                variant="outlined"
                label={item}
              />
            ))}
          </Box>
        </DisplayContent>
        <div className="highlight mt-3 bgc-white">
          <ContactsIcon className="highlight-icon" />
          <Typography className="highlight-typo">Contacts</Typography>
        </div>
        <Box
          sx={{
            minHeight: 150,
            position: "relative",
          }}
        >
          <Typography paragraph className="c-grey-800 readnewline">
            3200000000
          </Typography>
        </Box>
      </div>
    </div>
  );
}
