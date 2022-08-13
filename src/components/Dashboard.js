import { connect } from "react-redux";
import Tweet from "./Tweet"

const DashBoard = (props) => {
    return (
     <div style={{display:'flex' , alignItems:'center', justifyContent:'center'}}>
        <h3 className="center" style={{color:'black'}} >Your Timeline</h3>
        <ul className="dashboard-list" >
            {props.tweetIds.map((id) => (
                    <li key={id} >
                        <div>
                            <Tweet id={id}  />
                        </div>
                    </li>
                ))}
        </ul>
    </div>
    );
};

const mapStateToProps = ({ tweets }) => ({
        tweetIds: Object.keys(tweets).sort (
            (a, b) => tweets[b].timestamp - tweets[a].timestamp
        ),
    });

export default connect (mapStateToProps)(DashBoard);