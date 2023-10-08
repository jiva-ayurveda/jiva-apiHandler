import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { IconButton, Stack, Tooltip } from "@mui/material";

export default function FavoriteIcon() {
  return (
    <div>
      <Stack direction="row" alignItems="center">
        <Tooltip title="Like">
          <IconButton>
            <ThumbUpOffAltIcon />
          </IconButton>
        </Tooltip>
        <span>Like</span>
      </Stack>
    </div>
  );
}
