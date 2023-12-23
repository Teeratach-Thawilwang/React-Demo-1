import Home from "@pages/frontside/Home";
import StoryDetail from "@pages/frontside/StoryDetail";
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
  {
    path: "/story/:slug",
    element: <StoryDetail />,
  },
];

export default frontside;
