const initialState = {
  coins: []
};

export default function coinReducer(state = initialState, action = {}) {
  switch (action.type) {
    case('FETCH_ALL_COINS'):
      console.log(action);
      return {
        ...state,
        coins: action.coins
      }
    default: 
      return state;  
  }
}