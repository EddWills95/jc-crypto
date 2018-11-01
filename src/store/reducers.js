const initialState = {
  coins: []
};

// This is the thing setting the state and moving things around!

export default function coinReducer(state = initialState, action) {
  switch (action.type) {
    case('FETCH_ALL_COINS'):
      const data = action.coins['Data'];
      const coinCollection = Object.keys(data).map(k => {
        return data[k]
      })
      return {
        ...state,
        coins: coinCollection
      }
    default: 
      return state;  
  }
}