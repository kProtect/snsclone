import { useState } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";
import { useNavigate } from "react-router-dom";


const NewTweet = ({dispatch,id}) => {
    const navigate = useNavigate();
    const [text, setText] = useState("");

    const handleChange = (e) => {
        const text = e.target.value;

        setText(text);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(handleAddTweet(text,id));


        setText("");
        
        if (!id) {
            navigate("/");
        }
}

    const textLimit = 280 - text.length;

    return (
        <div>
            <h2 className="center"> New Comment </h2>
            <form className="new-text" onSubmit={handleSubmit}>
                <textarea 
                placeholder="what's on your mind" 
                value={text} 
                onChange={handleChange} 
                className="textarea" 
                maxLength={280}
                />
                {textLimit <= 100 && <div className="text-length">{textLimit}</div>}
                <button className="post" type="submit" disabled={text === ""}>
                    Post
                </button>
            </form>
        </div>
    );
};

export default connect()(NewTweet);