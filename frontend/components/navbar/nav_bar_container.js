import {connect} from 'react-redux';
import NavBar from './nav_bar.jsx';

import {loggedIn, currentUser} from '../../selectors/auth_selectors';
import {selectUsername} from "../../selectors/user_selectors";

const mapStateToProps = (state) => {
    let currentUserId = currentUser(state); 
    return {
        loggedIn: loggedIn(state),
        currentUsername: selectUsername(state, currentUserId) 
    };
}

export default connect(mapStateToProps, null)(NavBar);
