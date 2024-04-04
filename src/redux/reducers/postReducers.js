import { GET_POSTS, ADD_POST, DELETE_POST } from "../actions";

const initialState = {
  content: [],
};

const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        content: state.content.concat(action.payload),
      };
    case ADD_POST:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case DELETE_POST:
      return {
        ...state,
        content: state.content.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};

export default postReducers;
