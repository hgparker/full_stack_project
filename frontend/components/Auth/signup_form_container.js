import {connect} from 'react-redux';
import SignupForm from './signup_form.jsx';
import {signup} from '../../actions/auth_actions';

const mDTP = (dispatch) => {
    return {
        signup: (formUser) => {
            dispatch(signup(formUser));
        }
    }
}

export default connect(null, mDTP)(SignupForm);