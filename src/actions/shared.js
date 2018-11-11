import { getInitialData } from '../utils/api';
import { recieveUsers } from './actions/users';
import { receiveTweets } from './actions/users';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';

// Faking authentication
const AUTHED_ID = 'sarah_edo';

export function handleInitialDate() {
  return (dispatch, getState) => {
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveTweets(tweets));
        dispatch(setAuthedUser(AUTHED_ID));
      });
  };
}