import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Version1 from "./pages/Version1";
import Version2 from "./pages/Version2";
import Version3 from "./pages/Version3";
import Version4 from "./pages/Version4";
import Version5 from "./pages/Version5";
import Version6 from "./pages/Version6";
import Version7 from "./pages/Version7";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Version7 },
      { path: "v1", Component: Version1 },
      { path: "v2", Component: Version2 },
      { path: "v3", Component: Version3 },
      { path: "v4", Component: Version4 },
      { path: "v5", Component: Version5 },
      { path: "v6", Component: Version6 },
      { path: "v7", Component: Version7 },
    ],
  },
]);