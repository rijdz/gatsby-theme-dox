import React, { useEffect } from "react";

const Likes = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <section className="twitterContainer">
      <div className="twitter-embed">
        <a
          className="twitter-timeline"
          data-theme="light"
          data-tweet-limit="7"
          data-chrome="noheader nofooter noborders"
          href="https://twitter.com/rijdz/likes"
        >
          Tweets by rijdz
        </a>
      </div>
    </section>
  );
};

export default Likes;