import ShareIcon from "@mui/icons-material/Share";
import { IconButton, Stack, Tooltip } from "@mui/material";

export default function MuiShareIcon() {
  return (
    <div>
      <Stack direction="row" alignItems="center">
        <Tooltip title="Like">
          <IconButton size="small">
            <ShareIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <span>Share</span>
      </Stack>
    </div>
  );
}
