import { SEND_MESSAGE, GET_MESSAGES } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  let stateCopy = { ...state };
  switch (action.type) {
    case SEND_MESSAGE:
      let { username, _id, createdAt, text, user } = action.payload;
      if (!(username in stateCopy)) {
        stateCopy[username] = [];
      }
      stateCopy[username].unshift({ _id, createdAt, text, user });
      return stateCopy;
    case GET_MESSAGES:
      return stateCopy;
    default:
      return state;
  }
}
