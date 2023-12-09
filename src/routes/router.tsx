import { createBrowserRouter } from "react-router-dom";
import backoffice from "@routes/backoffice";
import frontside from "@routes/frontside";

const router = createBrowserRouter([
  ...frontside,
  ...backoffice,
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

export default router;
