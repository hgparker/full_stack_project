import {connect} from 'react-redux';
import NavBar from './nav_bar.jsx';
import { logout } from '../../actions/auth_actions';

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.currentUserId)
});


const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);