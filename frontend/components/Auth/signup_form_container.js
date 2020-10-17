import {connect} from 'react-redux';
import SignupForm from './signup_form.jsx';
import {signup, clearAuthErrors} from '../../actions/auth_actions';

const mSTP = (state) => {
    return {
        errors: state.errors.session
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