import DisplayContent from "components/placeholder/DisplayContent";
import ScrollableIconTab from "components/tabs/ScrollableIconTab";
import { profileTablist } from "config/navlist";
import { useState } from "react";
import AboutSection from "./about";
import PostSection from "./posts";
import PerformanceSection from "./performance";
import ServiceSection from "./services";

export default function TabsContainer() {
  const [selectedtab, setSelectedTab] = useState(2);

  const handleSelectedTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <ScrollableIconTab
        value={selectedtab}
        handleChange={handleSelectedTab}
        tablist={profileTablist()}
      >
        <DisplayContent valid1={selectedtab == 0}>
          <AboutSection />
        </DisplayContent>
        <DisplayContent valid1={selectedtab == 1}>
          <PostSection />
        </DisplayContent>
        <DisplayContent valid1={selectedtab == 2}>
          <PerformanceSection />
        </DisplayContent>
        <DisplayContent valid1={selectedtab == 3}>
          <ServiceSection />
        </DisplayContent>
      </ScrollableIconTab>
    </div>
  );
}
