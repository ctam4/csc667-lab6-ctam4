export const setUser = user => ({
  type: 'USER_SET_USER',
  user,
});
// setUser('hello') -> {type: 'USER_SET_USER', user: 'hello'}

export const setPassword = password => ({
  type: 'USER_SET_PASSWORD',
  password,
});

export const setIsLoggedIn = isLoggedIn => ({
  type: 'USER_SET_IS_LOGGED_IN',
  isLoggedIn,
});

export const setLoadingState = loadingState => ({
  type: 'USER_SET_LOADING_STATE',
  loadingState,
});

export const login = () => (dispatch, getState) => {
  console.log('Login function!');
  // demo only
  const reduxEvent = setLoadingState('loading'); // regular object
  console.log(reduxEvent);
  // in order for reducx to know something is happening
  dispatch(reduxEvent);
  const userId = getState().userReducer.user;
  const password = getState().userReducer.password;
  const url = `/api/login?userId=${userId}&password=${password}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.valid) {
        dispatch(setIsLoggedIn(true));
        dispatch(setLoadingState('init'));
      }
      else {
        dispatch(setLoadingState('error'))
      }
    })
    .catch(console.log);
};
