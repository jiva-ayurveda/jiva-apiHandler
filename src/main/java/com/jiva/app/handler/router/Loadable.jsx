import AppWatermark from "components/loaders/AppWatermark";
import { Suspense } from "react";

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<AppWatermark />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
