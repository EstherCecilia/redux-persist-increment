const initialState = {
  index: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, index: state.index + 1 };
    case "DECREMENT":
      return { ...state, index: state.index - 1 };
    default:
      return state;
  }
};

export default counter;
