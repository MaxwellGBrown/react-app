const initialState = {
  name: "World"
}

export default function appReducer(state = initialState, action) {
  const newState = {...state};
  switch (action.type) {
    case "CHANGE_NAME":
      newState.name = action.name;
      return newState;
    default:
      return newState;
  }
}
