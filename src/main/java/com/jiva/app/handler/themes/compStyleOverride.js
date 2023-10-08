import { componentDimension } from "config/values";

export default function componentStyleOverrides(theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          zIndex: 1300,
          borderBottom: `1px solid ${theme.colors?.grey300}`,
          borderTop: `1px solid ${theme.colors?.grey300}`,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: componentDimension.appBarPadding,
        },
      },
    },
  };
}
