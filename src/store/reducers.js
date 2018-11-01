const initialState = {
  coins: []
};

// This is the thing setting the state and moving things around!

export default function coinReducer(state = initialState, action) {
  switch (action.type) {
    case('FETCH_ALL_COINS'):
      return {
        ...state,
        coins: action.coins['Data']
      }
    default: 
      return state;  
  }
}