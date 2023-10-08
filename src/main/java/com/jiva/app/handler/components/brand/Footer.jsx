import { INDEX_ROUTE } from "router/routeUrl";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink as RouterLink } from "react-router-dom";

// const APP_DOMAIN_NAME = import.meta.env.VITE_APP_DOMAIN_NAME;
// const APP_PRODUCTION_HOUSE = import.meta.env.VITE_APP_PRODUCTION;

const APP_DOMAIN_NAME = "serviconn.com";
const APP_PRODUCTION_HOUSE = "king's production house";

// ==============================||  FOOTER ||============================== //

const AuthFooter = () => (
  <Box
    sx={{
      position: "absolute",
      bottom: 0,
      left: 10,
      right: 10,
    }}
  >
    <Stack direction="row" justifyContent="space-between">
      <Typography
        variant="subtitle2"
        component={RouterLink}
        to={INDEX_ROUTE}
        target="_blank"
      >
        {APP_DOMAIN_NAME}
      </Typography>
      <Typography
        variant="subtitle2"
        component={RouterLink}
        to={INDEX_ROUTE}
        target="_blank"
      >
        &copy; {APP_PRODUCTION_HOUSE}
      </Typography>
    </Stack>
  </Box>
);

export default AuthFooter;
