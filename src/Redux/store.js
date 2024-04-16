import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./store/users";
import coursesReducer from "./store/courses";
import articlesReducer from "./store/articles";

export default configureStore({
  reducer: {
    users: usersReducer,
    courses: coursesReducer,
    articles: articlesReducer,
  },
});
