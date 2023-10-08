import { Settings } from "@mui/icons-material";
import BlockIcon from "@mui/icons-material/Block";
import BoomarkIcon from "@mui/icons-material/Bookmark";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeIcon from "@mui/icons-material/Home";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ReportIcon from "@mui/icons-material/Report";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { account_route, home_route, INDEX_ROUTE } from "router/routeUrl";
import InfoIcon from "@mui/icons-material/Info";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

// Home List..
export const homeNavlist = (isAuthenticate, handleLogout) => {
  isAuthenticate = false;
  return [
    {
      id: INDEX_ROUTE,
      type: "item",
      icon: HomeIcon,
      title: "Home",
      url: INDEX_ROUTE,
      index: true,
    },
    {
      id: home_route.BOOKMARK,
      type: "item",
      url: home_route.BOOKMARK,
      icon: BoomarkIcon,
      title: "Bookmark",
      show: isAuthenticate,
    },
    {
      id: home_route.BOOKMARK,
      type: "item",
      url: home_route.BOOKMARK,
      icon: ManageHistoryIcon,
      title: "Work History",
      show: isAuthenticate,
    },
    {
      id: account_route.ACCOUNT,
      type: "item",
      url: account_route.ACCOUNT,
      icon: Settings,
      title: "Account",
      show: isAuthenticate,
    },
    {
      id: "logout",
      type: "item",
      icon: ExitToAppIcon,
      title: "Logout",
      show: isAuthenticate,
      handleClick: handleLogout,
    },
  ];
};

// Profile Tab List..
export const profileTablist = () => {
  return [
    {
      icon: InfoIcon,
      label: "About",
    },
    {
      icon: StickyNote2Icon,
      label: "Posts ",
    },
    {
      icon: AnalyticsIcon,
      label: "Performance ",
    },
    {
      icon: SettingsSuggestIcon,
      label: "Services ",
    },
  ];
};

// Home List

export const vertifeed_menulist = () => {
  return [
    {
      menu: "Connect",
      icon: <PersonAddIcon />,
      isDivider: true,
    },
    {
      menu: "Mute",
      icon: <VolumeOffIcon />,
    },
    {
      menu: "Block",
      icon: <BlockIcon />,
    },
    {
      menu: "Report",
      icon: <ReportIcon />,
    },
  ];
};
