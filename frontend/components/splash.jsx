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
            Ask a question or answer one.
            Comment, vote. <br></br>Get cozy in the discourse.
          </div>
          <div className="SplashLaunchBar">
              
          {/* export const conditionalLinkButton = (successCondition, buttonDestination, buttonStyle, buttonText) => { */}
            {conditionalLinkButton(true, "/login", "ButtonStyle1", "Log in")}
            {conditionalLinkButton(true, "/signup", "ButtonStyle2", "Sign up")}
            {conditionalLinkButton(true, "/questions", "ButtonStyle1", "All Questions")}
          
          </div>
      </div>
      <div className="SplashMiddleSection">
        middle
      </div>
      <div className="SplashLowerSection">
        lower
      </div>
    </div>
  );
}

export default Splash;