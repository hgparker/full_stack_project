import React from 'react';

class NavBar extends React.Component {

    render() {
        return (
            <div className="NavBar">
                <div className="LeftNavBar">
                    <Link
                        to="/"
                    >
                        <img src={window.babkaURL}/>
                    </Link>
                </div>
                <div className="RightNavBar">
                    <button>
                        Button1
                    </button>
                    <button>
                        Button2
                    </button>
                    <button>
                        Button3
                    </button>

                </div>
            </div>
        );
    }
}

export default NavBar;


// this.props.loggedIn
// this.props.logout()
