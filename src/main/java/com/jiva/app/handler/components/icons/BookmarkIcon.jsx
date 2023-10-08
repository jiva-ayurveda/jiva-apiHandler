import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { debounce, Tooltip } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Skeleton from "@mui/material/Skeleton";
import DisplayContent from "components/placeholder/DisplayContent";
import { useEffect, useState } from "react";

export default function MuiBookmark(props) {
  const { defaultValue, size, credentials } = props;
  const [defaultState, setDefaultState] = useState(undefined);

  useEffect(() => {
    setDefaultState(defaultValue);
  }, []);

  const handleBookmark = debounce((e) => {
    const status = e.target.checked;

    if (status != defaultValue) {
      credentials["status"] = e.target.checked;
    }
  }, 2000);

  return (
    <DisplayContent
      valid1={defaultState != undefined}
      content={<Skeleton variant="circular" width={30} height={30} />}
    >
      <Tooltip title="Bookmark">
        <Checkbox
          size={size}
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          name="bookmark"
          defaultChecked={!!defaultState}
          onChange={handleBookmark}
          sx={{
            color: "#ffffff",
            "&.Mui-checked": {
              color: "#ffffff",
            },
            backgroundImage:
              "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
          }}
          elevation={3}
        />
      </Tooltip>
    </DisplayContent>
  );
}
