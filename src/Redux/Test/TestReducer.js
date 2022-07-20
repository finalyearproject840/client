const INITIAL_STATE = {
  users: [],
  Test:{name:"emmanul"}
};

const TestReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case action.type:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default TestReducer;
