import { Insights, Dashboard, Products } from "./pages";
import ExploreIcon from "@material-ui/icons/Explore";
import Looks4Icon from "@material-ui/icons/Looks4";
import ShowChartIcon from "@material-ui/icons/ShowChart";

export default {
  items: [
    {
      path: "/",
      name: "Dashboard",
      type: "link",
      icon: ExploreIcon,
      component: Dashboard
    },
    {
      path: "/products",
      name: "Products",
      type: "link",
      icon: Looks4Icon,
      component: Products
    },
    {
      path: "/insights",
      name: "Insights",
      type: "link",
      icon: ShowChartIcon,
      component: Insights
    }
  ]
};
