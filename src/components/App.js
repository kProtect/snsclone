import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Nav from "./Nav";
import Login from './Login';
import DashBoard from "./Dashboard";
import NewTweet from "./NewTweet"
import TweetPage from "./TweetPage"
import Signup from "./Signup"
import { Routes, Route} from "react-router-dom"
import Payment from "./Payment";

const App = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },1000);
        props.dispatch(handleInitialData())
    },[])

    return (
        <Fragment>
            <div>
                <Nav />
                {loading === true ? null : (
                        <Routes>
                            <Route path="/" exact element={<DashBoard />}/>
                            <Route path="/tweet/:id" element={<TweetPage />}/>
                            <Route path="/add" exact element={<NewTweet />}/>
<<<<<<< HEAD
                            <Route path="/payment" exact element={<Payment />}/>
=======
>>>>>>> 5974f7a6499c3bd50132864d9d0cb9c733b89989
                            <Route path="/login" exact element={<Login />}/>
                            <Route path="/signup" exact element={<Signup />}/>
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