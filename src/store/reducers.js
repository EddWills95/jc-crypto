const initialState = {
  allCoins: [],
  selectedPairs: []
};

// This is the thing setting the state and moving things around!

// This will reduce all the coins.
export default function coinReducer(state = initialState, action) {
  switch (action.type) {
    case('FETCH_ALL_COINS'):
      const data = action.payload['Data'];
      const coinCollection = Object.keys(data).map(k => {
        return data[k]
      });
      const sortedCollected = coinCollection.sort((a, b) => {
        if(a.CoinName < b.CoinName) { return -1; }
        if(a.CoinName > b.CoinName) { return 1; }
        return 0;
      })
      // Filter those that aren't trading
      sortedCollected.filter(v => v.IsTrading === true);
      return {
        ...state,
        allCoins: sortedCollected,
      }
    case('SET_PAIR'):
      // Find the data about the coins from the state?
      const pairObj = {
        label: action.payload.cur1 + ' / ' + action.payload.cur2,
        data: action.payload.data[action.payload.cur2]
      }
      return {
        ...state,
        selectedPairs: [...state.selectedPairs, pairObj]
      }
    default: 
      return state;  
  }
}
