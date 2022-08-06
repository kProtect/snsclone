import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import DashBoard from "./Dashboard";

const App = ({dispatch,loading}) => {

    useEffect(() => {
        dispatch(handleInitialData())
    })

    return (
    <div>
        {loading === true ? null : <DashBoard/>}
    </div>
    )
};

const mapStateToProps = ({authedUser}) => ( 
    {
        loading: authedUser === null,
    }
)

export default connect()(App)