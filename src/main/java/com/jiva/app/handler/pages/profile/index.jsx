import { componentDimension } from "config/values";
import BioSection from "./BioSection";
import { Grid } from "@mui/material";
import TabsContainer from "./tabsContainer";

export default function ProfilePage() {
  return (
    <div className={`${componentDimension.containerPadding}`}>
      <Grid container justifyContent="center" sx={{ p: 2 }}>
        <Grid item lg={8} md={10} xs={12} className="mt-4">
          <BioSection />
          <TabsContainer />
        </Grid>
      </Grid>
    </div>
  );
}
