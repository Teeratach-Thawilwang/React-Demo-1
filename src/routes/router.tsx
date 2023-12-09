import { createBrowserRouter } from "react-router-dom";

import backoffice from "@routes/Backoffice";
import frontside from "@routes/Frontside";

const router = createBrowserRouter([
  ...frontside,
  ...backoffice,
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);

export default router;
