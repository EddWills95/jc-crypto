const initialState = {
  allCoins: []
}

export const coins = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_COINS':
      return {
        ...state,
        allCoins: action.payload
      }
    default:
      return state;
  }
}