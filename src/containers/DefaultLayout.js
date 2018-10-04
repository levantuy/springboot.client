import { connect } from 'react-redux';
import { DefaultLayout } from '../layouts';
import { menuActions } from '../actions';

const mapStateToProps = (state) => ({
    menu: state.menu,
})

const mapDispatchToProps = (dispatch) => {
    return {
        getAll: () => {
            dispatch(menuActions.getAll());
        }
    }
}
var connected = connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
export  {connected as DefaultLayout };