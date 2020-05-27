import React, { useState } from "react";

import Story from "../../components/Story";

import "./Stories.scss";

const INITIAL_STATE = {
  user: {
    id: "",
    avatar: "",
    name: "",
    username: "",
  },
  story : {
    id: "",
    userId: "",
    videoUrl: ""
  }
};

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);
  const [user, setUser] = useState(INITIAL_STATE.user);
  const [story, setStory] = useState(INITIAL_STATE.story)

  const getUserStory = (user, story) => {
    setUser(user);
    setStory(story);
    setShowStory(!showStory)
  }

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map((story, index) => {
            const user = getUserHandler(story.userId);
            return (
              user !== undefined && (
                <button
                  className={`user__thumb ${
                    index === 0 ? "user__thumb--hasNew" : null
                  }`}
                  key={user.id}
                  onClick={(e) => getUserStory(user, story)}
                >
                  <div className="user__thumb__wrapper">
                    <img src={user.avatar} alt={user.name} />
                  </div>
                </button>
              )
            );
          })}
        </div>
      </section>
      {showStory && <Story story={story} user={user} handleClose={e => setShowStory(!showStory)}/>}
    </React.Fragment>
  );
};

export default Stories;
