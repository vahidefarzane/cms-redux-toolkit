import React from "react";

import Users from "./pages/Users/Users";
import Courses from "./pages/Courses/Courses";
import Articles from "./pages/Articles/Articles";
import Infos from "./pages/Infos/Infos";

export default [
  { path: "/", element: <Users /> },
  { path: "/users", element: <Users /> },
  { path: "/courses", element: <Courses /> },
  { path: "/articles", element: <Articles /> },
  { path: "/infos", element: <Infos /> },
];
