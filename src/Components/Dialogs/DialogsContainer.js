import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { addMessageActionCreater, onMessageChangeActionCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
return {
    state : state.dialogsPage,
};
}

const mapDispatchToProps = (dispatch) => {
return {
    updateNewMessage: (messageText) => {
        let action = onMessageChangeActionCreater(messageText)
        dispatch(action)},
    sendNewMessage:() => {
        dispatch(addMessageActionCreater())}
}
};

let AuthRedirectComponent = WithAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer