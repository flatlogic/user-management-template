import actions from 'crud/modules/auth/authActions';

export default (store) => {
  store.dispatch(actions.doInit());
};
