import {connect} from 'react-redux';
import NavBar from './nav_bar.jsx';
import {loggedIn } from '../../util/auth_api_util';
import {logout} from '../../actions/auth_actions';

const mapStateToProps = (state) => ({
    loggedIn: loggedIn(state)
});


const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);