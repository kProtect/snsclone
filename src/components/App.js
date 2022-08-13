import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
import DashBoard from "./Dashboard";
import NewTweet from "./NewTweet"
import TweetPage from "./TweetPage"
import { Routes, Route} from "react-router-dom"
import Payment from "./Payment";

const App = (props) => {

    useEffect(() => {
        props.dispatch(handleInitialData())
    })

    return (
        <Fragment>
            <div className="container">
                <Nav />
                {props.loading === true ? null : (
                        <Routes>
                            <Route path="/" exact element={<DashBoard />}/>
                            <Route path="/tweet/:id" element={<TweetPage />}/>
                            <Route path="/add" exact element={<NewTweet />}/>
                            <Route path="/payment" exact element={<Payment />}/>
                        </Routes>
                    )}
            </div>
        </Fragment>
    );
};

const mapStateToProps = ({authedUser}) => ( 
    {
        loading: authedUser === null,
    }
)

export default connect(mapStateToProps)(App)