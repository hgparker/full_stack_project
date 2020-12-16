import {connect} from 'react-redux';
import SignupForm from './signup_form.jsx';
import {signup, clearAuthErrors} from '../../actions/auth_actions';
import {sessionErrors} from '../../selectors/errors_selectors';

const mSTP = (state) => {
    return {
        errors: sessionErrors(state)
    }
}

const mDTP = (dispatch) => {
    return {
        signup: (formUser) => {
            dispatch(signup(formUser));
        },
        clearAuthErrors: () => {
            dispatch(clearAuthErrors());
        }
    }
}

export default connect(mSTP, mDTP)(SignupForm);