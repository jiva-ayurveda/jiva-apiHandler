import { global_img } from "config/images";
import { placeholder_size } from "config/values";
import { Box, Typography } from "@mui/material";

function DefaultPlaceholder({ maxwidth, image, desc, variant, subdesc }) {
  return (
    <Box
      sx={{
        maxWidth: placeholder_size.default,
        mx: "auto",
        p: 3,
        textAlign: "center",
        mt: 4,
      }}
    >
      <Box
        sx={{
          maxWidth: maxwidth,
          mx: "auto",
        }}
      >
        <img
          src={image}
          data-src={global_img.LAZY_LOADING}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Typography variant={variant} className="f-italic text-muted">
        {desc}
      </Typography>
      <p className="f-s-12 f-w-600 c-orange600 "> {subdesc} </p>
    </Box>
  );
}

DefaultPlaceholder.defaultProps = {
  variant: "h5",
  maxwidth: placeholder_size.sm,
};

export default DefaultPlaceholder;
