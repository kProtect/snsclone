import { useState } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";
import { useNavigate } from "react-router-dom";
import { Textarea } from '@chakra-ui/react'


const NewTweet = ({dispatch,id}) => {
    const navigate = useNavigate();
    const [text, setText] = useState("");


    await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", position: "", level: "" });
   navigate("/");
 }

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
                <Textarea 
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