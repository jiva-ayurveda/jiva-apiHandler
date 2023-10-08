import { INDEX_ROUTE } from "router/routeUrl";
import { ButtonBase, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// ==============================|| MAIN LOGO ||============================== //

// const APP_NAME = import.meta.env.VITE_APP_NAME;
const APP_NAME = "Serviconn";

const LogoSection = () => (
  <ButtonBase disableRipple component={Link} to={INDEX_ROUTE}>
    <Typography variant="h5" color="secondary">
      {APP_NAME}
    </Typography>
  </ButtonBase>
);

export default LogoSection;
