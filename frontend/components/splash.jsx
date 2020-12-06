import React from "react";
import {conditionalLinkButton} from "./conditional_buttons";

const Splash = (props) => {
  return (
    <div className="SplashElements">
      <div className="SplashUpperSection">
          <div className="SplashWeLove">
            We &lt;3 puppies who code
          </div>
          <div className="SplashIntroductory">
            Babka Overflow is a clone of Stack Overflow.
            Ask a question or answer one. <br></br>
            Comment, vote. <br></br>Get cozy in the discourse.
          </div>
          <div className="SplashLaunchBar">
              
            {conditionalLinkButton(true, "/login", "ButtonStyle3", "Log in")}
            {conditionalLinkButton(true, "/signup", "ButtonStyle4", "Sign up")}
            {conditionalLinkButton(true, "/questions", "ButtonStyle3", "All Questions")}
          
          </div>
      </div>
      <div className="SplashMiddleSection">
        <div className="SplashFor">
          For recruiters, by a jobseeker
        </div>

        <div className="SplashOrangeBar"> </div>

        <div className="SplashAbout">
        Babka Overflow is a full stack clone of Stack Overflow.
        It offers user account authentication and creation, the ability to post and edit questions,
        the ability to post and edit answers to those questions,
        the ability to post and edit comments on answers,
        and the ability to vote on questions and answers.
        Don't take this &lt;div&gt;'s word for it, though. Click around for yourself and see!
        Below is some more information about the specific technologies used in the site.        

        </div>
      </div>
      <div className="SplashLowerSection">
        <div className="SplashTech1">

        </div>
        <div className="SplashTech2">

        </div>
        <div className="SplashTech3">

        </div>
        <div className="SplashTech4">

        </div>
      </div>
    </div>
  );
}

export default Splash;