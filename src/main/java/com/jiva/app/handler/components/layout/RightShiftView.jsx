import { Grid } from "@mui/material";
import ScrollLayout from "./ScrollLayout";

export default function RightShiftView(props) {
  const { rightContent, children } = props;
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} lg={8}>
        {children}
      </Grid>
      <ScrollLayout>{rightContent}</ScrollLayout>
    </Grid>
  );
}
