import {RouteObject} from "react-router/dist/lib/context";
import App from "./App.tsx";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App/>,
  },
  {
    path: '/form',
    element: <div>form</div>
  }
]