import {RouteObject} from "react-router/dist/lib/context";
import {Dashboard} from "./views/Dashboard.tsx";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: '/form',
    element: <div>form</div>
  }
]