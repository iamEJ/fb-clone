import React from "react";
import "./css/StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="story_reel">
      <Story
        title="Fallen Owl"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/f/f2/Eastern_Barn_Owl_%28Tyto_javanica_stertens%29%2C_Raigad%2C_Maharashtra.jpg"
        image="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
      />
      <Story
        title="Sleepy Owl"
        profileSrc="https://www.magrigg.co.uk/about-us/wp-content/uploads/2019/11/owl.jpg"
        image="https://i.pinimg.com/originals/03/44/7b/03447be73c5b73a3f66b411eaf05ff67.jpg"
      />
      <Story
        title="Snowy Owl"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/6/6d/Snowy_Owl_%28240866707%29.jpeg"
        image="https://i.pinimg.com/originals/a9/a8/3e/a9a83efe190ed9660b27be8047b94edd.jpg"
      />
      <Story
        title="Burrowing Owl"
        profileSrc="https://kids.sandiegozoo.org/sites/default/files/2017-07/animals-hero-burrowingowl.jpg"
        image="https://wallpaperaccess.com/full/30087.jpg"
      />
      <Story
        title="Buble Bee"
        profileSrc="https://ec.europa.eu/jrc/sites/jrcsh/files/styles/normal-responsive/public/adobestock_21730836.jpeg?itok=ckkJV_ez"
        image="https://images.hdqwalls.com/download/forest-mist-1366x768.jpg"
      />
    </div>
  );
}

export default StoryReel;
