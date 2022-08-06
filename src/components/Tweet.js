import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/etc";
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline,
} from "react-icons/ti";

const Tweet = ({tweet}) => {
  const handleLike = (e) => {
    e.preventDefault();

    // TODO: Handle like Tweet
  };

  const toParent = (e, id) => {
    e.preventDefault();

    // TODO: Redirect to parent Tweet
  };

  if (tweet === null) {
    return <p>This Tweet doesn't existd</p>;
  }

  const { name, avatar, timestamp, text, hasLiked, likes, replies, parent } = tweet;

  return (
    <div className="tweet">
      <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
      <div className="tweet-info">
        <div>
          <span>{name}</span>
          <div>{formatDate(timestamp)}</div>
          {parent && (
            <button
              className="replying-to"
              onClick={(e) => toParent(e, parent.id)}
            >
              Replying to @{parent.author}
            </button>
          )}
          <p>{text}</p>
        </div>
        <div className="tweet-icons">
          <TiArrowBackOutline className="tweet-icon" />
          <span>{replies !== 0 && replies}</span>
          <button className="heart-button" onClick={handleLike}>
            {hasLiked === true ? (
              <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
            ) : (
              <TiHeartOutline className="tweet-icon" />
            )}
          </button>
          <span>{likes !== 0 && likes}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, tweets }, { id }) => {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null,
  };
};

export default connect(mapStateToProps)(Tweet);