import Home from "@pages/frontside/Home";
import Widget from "@pages/frontside/Widget";

const frontside = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/widget/:slug",
    element: <Widget />,
  },
];

export default frontside;
