import DisplayContent from "components/placeholder/DisplayContent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PerfectScrollbar from "react-perfect-scrollbar";

export default function ScrollLayout({ children }) {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <DisplayContent valid1={smallScreen}>
      <Grid item lg={4}>
        <Box
          sx={{
            display: "flex",
            minHeight: "100vh",
            position: "sticky",
            top: 95,
          }}
        >
          <Box
            sx={{
              minHeight: "inherit",
              overflowX: "hidden",
              flexBasis: "100%",
              maxHeight: 0,
            }}
          >
            <PerfectScrollbar
              component="div"
              style={{
                height: "25vh",
                paddingRight: "5px",
              }}
            >
              <div className="px-2">{children}</div>
            </PerfectScrollbar>
          </Box>
        </Box>
      </Grid>
    </DisplayContent>
  );
}
