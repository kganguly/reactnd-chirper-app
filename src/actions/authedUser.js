export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export function setAuthUser(user) {
  return {
    type: SET_AUTHED_USER,
    user,
  };
};