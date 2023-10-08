import MiniDrawer from "components/drawer/MiniVariant";
import { homeNavlist } from "config/navlist";
import React from "react";
import ChildRoute from "router/ChildRoute";
import { homeRoutelist } from "router/childRoutelist";

export default function HomePage() {
  return (
    <div>
      <MiniDrawer navMenulist={homeNavlist()}>
        <ChildRoute routeslist={homeRoutelist()} />
      </MiniDrawer>
    </div>
  );
}
