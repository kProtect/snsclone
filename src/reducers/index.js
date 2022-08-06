import { combineReducers } from "@reduxjs/toolkit";
import authedUser from "./authedUser";
import users from "./users";
import tweets from "./tweets";

export default combineReducers({
    authedUser,
    users,
    tweets,
});