import AppWatermark from "components/loaders/AppWatermark";
import LinearIndeterminate from "components/loaders/LinearIndeterminate";
import DisplayContent from "components/placeholder/DisplayContent";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useFetchers, useNavigation } from "react-router-dom";
import { snackbar_slice } from "store/reducers/global";
import MainAppBar from "components/appbar/MainAppBar";
import BottomAppBar from "components/appbar/BottomBar";

export default function GlobalConfig({ children }) {
  let navigation = useNavigation();
  let fetchers = useFetchers();
  const dispatch = useDispatch();

  const { snackbar, serviceloading } = useSelector((state) => ({
    snackbar: state.global.snackbar,
    serviceloading: state.global.serviceloading,
  }));

  const closeSnackbar = () => {
    dispatch(snackbar_slice({}));
  };

  let fetcherInProgress = fetchers.some((f) =>
    ["loading", "submitting"].includes(f.state)
  );

  if (navigation.state !== "idle") return <AppWatermark />;

  if (fetcherInProgress) return <AppWatermark />;

  return (
    <>
      <MainAppBar />
      <DisplayContent valid1={serviceloading}>
        <LinearIndeterminate />
      </DisplayContent>
      <DisplayContent valid1={snackbar.severity}>
        <Snackbar
          open={!!snackbar.severity}
          autoHideDuration={3000}
          onClose={closeSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={closeSnackbar}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            <p> {snackbar.msg} </p>
          </Alert>
        </Snackbar>
      </DisplayContent>
      {children}
      <BottomAppBar />
    </>
  );
}
