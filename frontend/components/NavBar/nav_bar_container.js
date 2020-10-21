import {connect} from 'react-redux';
import NavBar from './nav_bar.jsx';
import {loggedIn } from '../../util/auth_api_util';

const mapStateToProps = (state) => ({
    loggedIn: loggedIn(state)
});

export default connect(mapStateToProps, null)(NavBar);