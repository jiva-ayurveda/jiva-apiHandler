import CommentIcon from "@mui/icons-material/Comment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import MuiBookmarkIcon from "components/icons/BookmarkIcon";
import MuiFavoriteIcon from "components/icons/FavoriteIcon";
import MuiShareIcon from "components/icons/ShareIcon";
import PositionedMenu from "components/menus/PositionedMenu";
import { vertifeed_menulist } from "config/navlist";
import { singleViewSetting } from "config/slick-setting";
import Slider from "react-slick";
import { fShortenNumber } from "utils/functionality";
import { getLimitString, parseBitmapUrl, parseJsonObj } from "utils/parse";

const VertiFeedCard = (props) => {
  const { defaultdata } = props;

  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          maxWidth: 550,
          margin: "20px auto",
          borderBottom: "2px solid #ccc",
          position: "relative",
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              aria-label={defaultdata.user?.name}
              src={defaultdata.user?.avatar}
            />
          }
          action={
            <PositionedMenu
              positionIcon={<MoreVertIcon />}
              menulist={vertifeed_menulist()}
            />
          }
          title={<span className="c-pointer">{defaultdata.user?.name}</span>}
          subheader={defaultdata.user?.name_uuid}
        />
        <Slider {...singleViewSetting}>
          {parseJsonObj(defaultdata.bitmap).map((bitmap_src) => (
            <div key={bitmap_src}>
              <CardMedia
                sx={{
                  height: 0,
                  padding: "36.35%",
                  backgroundColor: "grey.300",
                }}
                image={parseBitmapUrl(bitmap_src)}
              />
            </div>
          ))}
        </Slider>
        <CardContent className="py-0">
          <Typography
            className="mt-2"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {getLimitString(defaultdata.caption, 110)}
          </Typography>
        </CardContent>

        <CardActions className="d-flex justify-content-between" disableSpacing>
          <Stack direction="row" alignItems="center" spacing={2}>
            <MuiFavoriteIcon defaultValue={true} />

            <span>
              <Stack direction="row" alignItems="center" className="ml-2">
                <Tooltip title="Comment">
                  <IconButton size="small">
                    <CommentIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
                <span>Comment</span>
              </Stack>
            </span>

            <MuiShareIcon defaultValue={true} />
          </Stack>

          <div className="ml-auto" />
          <MuiBookmarkIcon defaultValue={true} />
        </CardActions>

        <p className="c-grey600 ml-4 mb-2 f-s-12">
          <span className="f-w-600 mr-1">
            {fShortenNumber(defaultdata.like_count)}
          </span>
          likes,
          <span className="f-w-600 mx-1">
            {fShortenNumber(defaultdata.comments_count)}
          </span>
          comments
        </p>
      </Card>
    </div>
  );
};

export default VertiFeedCard;
