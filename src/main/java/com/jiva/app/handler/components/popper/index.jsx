import { Paper, Popover } from "@mui/material";

export default function IndexPopper(props) {
  const { anchorEl, handleClose, children } = props;

  const open = Boolean(anchorEl);

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Paper>{children}</Paper>
    </Popover>
  );
}
