import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";

function MaterialCircularProgress(props) {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

export default function MaterialProgress(props) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        height: "100%",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent",
        zIndex: (theme) => theme.zIndex.drawer + 3,
      }}
    >
      <MaterialCircularProgress {...props} />
    </Box>
  );
}

MaterialProgress.defaultProps = {
  size: 40,
};
