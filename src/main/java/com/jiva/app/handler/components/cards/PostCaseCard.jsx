import { Box } from "@mui/system";
import TouchRippleEffect from "components/animation/TouchRippleEffect";
import AdaptLayout from "components/layout/media/AdaptLayout";

export default function ClassiCard(props) {
  const { srcUrl } = props;
  return (
    <Box
      sx={{
        p: "3px",
        cursor: "pointer",
        position: "relative",
      }}
    >
      <TouchRippleEffect>
        <AdaptLayout src={srcUrl} />
      </TouchRippleEffect>
    </Box>
  );
}
