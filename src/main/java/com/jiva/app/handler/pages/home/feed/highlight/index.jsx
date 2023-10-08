import { Star } from "@mui/icons-material";
import LeakAddIcon from "@mui/icons-material/LeakAdd";
import { Box, Paper, Typography } from "@mui/material";
import ThrSecListView from "components/listView/ThrSecList";
import DefaultPlaceholder from "components/placeholder/DefaultPlaceholder";
import DisplayContent from "components/placeholder/DisplayContent";
import { home_img } from "config/images";
import { home_data } from "deletefolder/dummydata";
import { fShortenNumber } from "utils/functionality";

export default function FeedHighlight() {
  return (
    <div>
      <Paper variant="outlined" sx={{ mb: 3 }}>
        <Box
          sx={{
            p: "15px 20px",
            borderBottom: (theme) => `2px solid ${theme.palette.grey[500]}`,
            display: "flex",
            alignItems: "center",
            borderRadius: 2,
          }}
        >
          <LeakAddIcon />
          <Typography className="ml-2">Suggested Providers</Typography>
        </Box>
        <DisplayContent
          valid1={true}
          content={
            <DefaultPlaceholder
              image={home_img.feed.highlight.PROVIDER_PLACEHOLDER}
            />
          }
        >
          {home_data.highlight.provider.map((childObj) => (
            <ThrSecListView
              redirectlink=""
              image={childObj.avatar}
              title={childObj.name}
              description={childObj.caption}
              name_uuid={childObj.name_uuid}
              action={
                <span className="f-s-12 f-w-600">
                  <Star color="warning" />
                  {fShortenNumber(childObj.rating)}
                </span>
              }
            />
          ))}
        </DisplayContent>
      </Paper>
    </div>
  );
}
