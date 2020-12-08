import {connect} from 'react-redux';
import NavBar from './nav_bar.jsx';

import {loggedIn} from '../../selectors/auth_selectors';

const mapStateToProps = (state) => ({
    loggedIn: loggedIn(state),
});

export default connect(mapStateToProps, null)(NavBar);
