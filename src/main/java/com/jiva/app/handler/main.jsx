import AppWatermark from "components/loaders/AppWatermark";
import DisplayContent from "components/placeholder/DisplayContent";
import Router from "./router";

function App() {
  const isLoading = false;

  return (
    <DisplayContent valid1={!isLoading} content={<AppWatermark />}>
      <Router />
    </DisplayContent>
  );
}

export default App;
