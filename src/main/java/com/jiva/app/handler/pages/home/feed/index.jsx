import RightShiftView from "components/layout/RightShiftView";
import FeedHighlight from "./highlight";
import VertiFeedCard from "components/cards/VertiFeedCard";
import { home_data } from "deletefolder/dummydata";

export default function FeedPage() {
  return (
    <div>
      <RightShiftView rightContent={<FeedHighlight />}>
        <VertiFeedCard defaultdata={home_data.feed} />
        <VertiFeedCard defaultdata={home_data.feed} />
      </RightShiftView>
    </div>
  );
}
