import {connect} from 'react-redux';
import SessionForm from './session_form.jsx';
import {login, clearAuthErrors, RECEIVE_ERRORS} from '../../actions/auth_actions';
import {sessionErrors} from '../../selectors/errors_selectors';

const mSTP = (state) => {
    return {
        errors: sessionErrors(state)
    };
}

const mDTP = (dispatch) => {
    return {
        login: (formUser) => {
            dispatch(login(formUser));
        },
        clearAuthErrors: () => {
            dispatch(clearAuthErrors());
        }
    }
}

export default connect(mSTP, mDTP)(SessionForm);