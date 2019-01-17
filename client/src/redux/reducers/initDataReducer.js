const initIndexDataReducer = (state, action) => {
  return {
    ...state,
    indexData: action.data
  }
}

export default initIndexDataReducer;