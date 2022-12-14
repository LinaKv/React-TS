import { UserState, UserAction, UserActionTypes } from "../../types/user";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

// interface UserAction {
//     type: string,
//     payload?:any
// }

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { loading: true, error: null, users: [] };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload };
    case UserActionTypes.FETCH_USERS_ERROR:
      return { loading: true, error: action.payload, users: [] };
    default:
      return state;
  }
};
