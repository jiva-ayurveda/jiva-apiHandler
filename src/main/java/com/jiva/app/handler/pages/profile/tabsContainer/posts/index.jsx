import { Grid } from "@mui/material";
import PostCaseCard from "components/cards/PostCaseCard";
import { profile_data } from "deletefolder/dummydata";

export default function PostSection() {
  return (
    <div>
      {/* <PostCaseCard /> */}
      <Grid container>
        {profile_data.tabs.posts.map((itemObj) => (
          <Grid key={itemObj.id} item xs={4}>
            <PostCaseCard srcUrl={itemObj.img} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
