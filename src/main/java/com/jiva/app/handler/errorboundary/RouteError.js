import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DefaultPlaceholder from "components/placeholder/DefaultPlaceholder";
import { global_img } from "config/images";
import { placeholder_msg } from "config/messages";
import { useRouteError } from "react-router-dom";

export default function RootErrorBoundary() {
  let error = useRouteError();
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        p: 4,
        mt: 5,
      }}
    >
      <DefaultPlaceholder
        maxwidth={140}
        image={global_img.ROUTE_ERROR}
        desc={placeholder_msg.ROUTE_ERROR}
      />
      <div className="text-center">
        <Typography className="my-3 ">
          <pre>{error.message || JSON.stringify(error)}</pre>
        </Typography>

        <Button onClick={() => (window.location.href = "/")} variant="outlined">
          Click here to reload the app
        </Button>
      </div>
    </Box>
  );
}
