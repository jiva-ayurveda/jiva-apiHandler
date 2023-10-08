import { CardMedia, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { NavLink as RouterLink } from "react-router-dom";
import { getLimitString } from "utils/parse";

export default function MuiList(props) {
  const { redirectlink, action, image, title, name_uuid, description } = props;

  return (
    <Grid
      container
      className="p-2"
      sx={{
        borderBottom: "1px solid #ccc",
      }}
      component={RouterLink}
      to={redirectlink}
    >
      <Grid item xs={2}>
        <CardMedia
          component="img"
          sx={{
            height: 50,
            width: 50,
            borderRadius: 3,
            mr: 2,
            border: `2px solid ${grey[300]}`,
          }}
          image={image}
        />
      </Grid>
      <Grid item xs={8} className="pl-1">
        <Typography noWrap>{title}</Typography>
        <p className="text-muted">
          <span className="f-italic f-w-600">{name_uuid} </span>
          {" — " + getLimitString(description, 40)}
        </p>
      </Grid>
      <Grid
        item
        xs={1}
        sx={{
          ml: "auto",
        }}
      >
        <span>{action}</span>
      </Grid>
    </Grid>
  );
}
