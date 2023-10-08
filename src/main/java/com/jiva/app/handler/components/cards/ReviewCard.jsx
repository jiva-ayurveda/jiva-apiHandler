import React from "react";

import MoreVert from "@mui/icons-material/MoreVert";
import StarBorder from "@mui/icons-material/StarBorder";
import ThumbDownAlt from "@mui/icons-material/ThumbDownAlt";
import ThumbDownAltOutlined from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAlt from "@mui/icons-material/ThumbUpAlt";
import ThumbUpAltOutlined from "@mui/icons-material/ThumbUpAltOutlined";
import Rating from "@mui/lab/Rating";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blue, grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { Avatar } from "@mui/material";

const LikeCheckbox = styled(Checkbox)(({ theme }) => ({
  root: {
    "&$checked": {
      color: blue["A400"],
    },
  },
  checked: {},
}));

function Review(props) {
  const { posts } = props;

  const [selectedValue, setSelectedValue] = React.useState(null);

  const handleLikeChecked = (index) => {
    if (index === selectedValue) {
      setSelectedValue(null);
    } else {
      setSelectedValue(index);
    }
  };
  return (
    <Card elevation="0">
      <CardHeader
        style={{ alignItems: "center" }}
        avatar={
          <Avatar
            aria-label="recipe"
            src="https://cdn.pixabay.com/photo/2021/01/30/09/59/coffee-5963334__340.jpg"
          />
        }
        title={<Typography>Express Sports</Typography>}
        subheader={
          <React.Fragment>
            <span> @david --</span>
            <Rating
              value={2}
              name="rating"
              size="small"
              readOnly
              emptyIcon={<StarBorder fontSize="inherit" />}
            />
          </React.Fragment>
        }
        action={
          <IconButton size="small">
            <MoreVert fontSize="small" />
          </IconButton>
        }
      />

      <CardContent className="py-0">
        <Typography paragraph color="textSecondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Typography>
      </CardContent>
      {/* <DisplayContent valid1={!!posts}> */}
      <Grid className="mt-3 p-2" container>
        {[...new Array(6)].map((item, index) => (
          <Grid key={index} className="" item xs={4}>
            <CardMedia
              image="https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601__340.jpg"
              sx={{
                height: 0,
                paddingTop: "56.25%",
                margin: "5px",
                borderRadius: "4px  ",
              }}
            />
          </Grid>
        ))}
      </Grid>
      {/* </DisplayContent> */}
      <CardActions disableSpacing className="pr-3">
        <div className="ml-auto" />
        <span className="d-flex align-items-center mr-4">
          <LikeCheckbox
            checked={selectedValue === 0}
            onChange={() => handleLikeChecked(0)}
            size="small"
            className="pr-1"
            icon={<ThumbUpAltOutlined />}
            checkedIcon={<ThumbUpAlt />}
          />
          <p className="f-w-500 mt-1">3k</p>
        </span>
        <span className="d-flex align-items-center pt-1">
          <LikeCheckbox
            checked={selectedValue === 1}
            onChange={() => handleLikeChecked(1)}
            size="small"
            className="pr-1"
            icon={<ThumbDownAltOutlined />}
            checkedIcon={<ThumbDownAlt />}
          />
          <p className="f-w-500">3k</p>
        </span>
      </CardActions>
    </Card>
  );
}

export default Review;
