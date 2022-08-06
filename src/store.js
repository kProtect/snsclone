import {configureStore} from '@reduxjs/toolkit';
import authedUser from "./reducers/authedUser";
import users from "./reducers/users";
import tweets from "./reducers/tweets";

export const store = configureStore({
  reducer: {
    authedUser,
    users,
    tweets,
  },
});
