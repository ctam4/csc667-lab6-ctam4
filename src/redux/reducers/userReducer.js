const INITIAL_STATE = {
  user: 'default',
  password: '',
  isLoggedIn: false,
  loadingState: 'init',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'USER_SET_PASSWORD':
      return {
        ...state,
        password: action.password,
      };
    case 'USER_SET_IS_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };
    case 'USER_SET_LOADING_STATE':
      return {
        ...state,
        loadingState: action.loadingState,
      };
    default:
      return state;
  }
};

export default userReducer;