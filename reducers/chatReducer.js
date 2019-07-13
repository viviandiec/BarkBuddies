import { SEND_MESSAGE, GET_MESSAGES } from "../actions/types";

const initialState = {
  messenger: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state
      };
    case GET_MESSAGES:
      return {
        ...state
      };
    default:
      return state;
  }
}
