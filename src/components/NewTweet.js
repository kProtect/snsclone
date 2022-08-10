import { useState } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";
import { useNavigate } from "react-router-dom";


const NewTweet = ({dispatch,id}) => {

    const navigate = useNavigate();
    const [comment, setComment] = useState("");

    const handleChange = (e) => {
        const comment = e.target.value;

        setComment(comment);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(handleAddTweet(comment,id));


        setComment("");
        
        if (!id) {
            navigate("/");
        }
    }

    const textLimit = 280 - comment.length;

    return (
        <div>
            <h2 className="center"> New Comment </h2>
            <form className="new-comment" onSubmit={handleSubmit}>
                {/* {} */}
                <textarea 
                placeholder="what's on your mind" 
                value={comment} 
                onChange={handleChange} 
                className="textarea" 
                maxLength={280}
                />
                {textLimit <= 100 && <div className="text-length">{textLimit}</div>}
                <button className="post" type="submit" disabled={comment === ""}>
                    Post
                </button>
            </form>

        </div>
    )
}

export default connect()(NewTweet);