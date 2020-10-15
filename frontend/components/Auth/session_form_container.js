import {connect} from 'react-redux';
import SessionForm from './session_form.jsx';
import {login} from '../../actions/auth_actions';
// const SessionFormContainer = () => {
//     return (
//         <h1>
//             Session Form Container
//         </h1>
//     );
// }

const mDTP = (dispatch) => {
    return {
        login: (formUser) => {
            dispatch(login(formUser));
        }
    }
}

export default connect(null, mDTP)(SessionForm);