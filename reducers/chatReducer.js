import { SEND_MESSAGE, GET_MESSAGES } from "../actions/types";

const initialState = {
  mrs_meowmers: [
    {
      _id: 1,
      createdAt: new Date(2019, 6, 6, 9, 39, 30),
      text: "Go watch the new spiderman movie\nTom Holland is 😻",
      user: {
        id: 2,
        name: "Mrs. Meowmers",
        avatar: "http://placekitten.com/256/256",
        avatar2: "http://placekitten.com/128/128",
        username: "mrs_meowmers"
      }
    }
  ],
  mr_meowmers: [
    {
      _id: 1,
      createdAt: new Date(2019, 6, 6, 15, 43, 23),
      text: "Do you want to head to the park meow? I'm not kitten this time 😺",
      user: {
        id: 2,
        name: "Mr. Meowmers",
        avatar: "http://placekitten.com/257/257",
        avatar2: "http://placekitten.com/129/129",
        username: "mr_meowmers"
      }
    }
  ],
  shiba_inu: [
    {
      _id: 1,
      createdAt: new Date(2019, 6, 6, 18, 26, 51),
      text: "Meet me at the park in an hour\nI'll bring the treats",
      user: {
        id: 2,
        name: "Shiba Inu",
        avatar: "http://placekitten.com/258/258",
        avatar2: "http://placekitten.com/130/130",
        username: "shiba_inu"
      }
    }
  ]
};

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
