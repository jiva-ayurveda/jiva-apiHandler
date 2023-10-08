import Box from "@mui/material/Box";
import DisplayContent from "components/placeholder/DisplayContent";
import MaterialProgress from "./MaterialCircularProgress";

export default function LoadingWrapper({ loading, children }) {
  return (
    <DisplayContent
      valid1={loading}
      content={
        <Box sx={{ minHeight: 250 }}>
          <MaterialProgress />
        </Box>
      }
    >
      {children}
    </DisplayContent>
  );
}
