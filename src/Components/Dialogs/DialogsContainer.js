import { compose } from 'redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { sendNewMessage } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
    };
}

export default compose(
    connect(mapStateToProps, { sendNewMessage }),
    WithAuthRedirect)(Dialogs) 