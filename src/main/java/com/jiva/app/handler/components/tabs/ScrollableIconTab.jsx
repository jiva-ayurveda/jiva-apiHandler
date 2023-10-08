import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";

export default function ScrollableIconTab({
  value,
  handleChange,
  tablist,
  children,
}) {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        position: "relative",
      }}
    >
      <AppBar position="static" color="inherit" elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          sx={{
            borderBottom: (theme) => `1px solid ${theme.palette.grey[300]}`,
            bgcolor: "background.default",
          }}
        >
          {tablist.map((item) => {
            const { label, icon: Icon, iconPosition } = item;
            return (
              <Tab
                key={label}
                icon={<Icon />}
                iconPosition={iconPosition || "start"}
                label={label}
              />
            );
          })}
        </Tabs>
      </AppBar>
      <Box className="pt-4">{children}</Box>
    </Box>
  );
}

ScrollableIconTab.propTypes = {
  tablist: PropTypes.array.isRequired,
  value: PropTypes.number.isRequired,
};
