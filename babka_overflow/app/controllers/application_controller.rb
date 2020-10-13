class ApplicationController < ActionController::Base

    # protect_from_forgery with: :null_session

    # helper_method :current_user, :logged_in? if needed
            
    def login!(user)
        session[:session_token] = user.reset_session_token!
    end
      
    def logout!
        current_user.reset_session_token!      
        session[:session_token] = nil
    end
      
    def current_user
        debugger
        @current_user ||= User.find_by(session_token: session[:session_token]);    
    end
      
    def logged_in?
        !!current_user
    end
     
    # require logged_in / out functionality here
end
