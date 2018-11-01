export function fetchCoins() {
  return async(dispatch, getState) => {
    try {
      fetch('https://min-api.cryptocompare.com/data/all/coinlist')
        .then(response => response.json())
        .then((data) => {
          dispatch({ type: 'FETCH_ALL_COINS', payload: data })
        })
    } catch (error) {
      console.log(error);
    }
  }
}

export function setPair(pair) {
  return async (dispatch, getState) => {
    // Fetch the data here!
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${pair.currency1}&tsyms=${pair.currency2}`
    try {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          // Need to catch if the message includes a failure (no pair to transfer)
          // if (data.Data.length < 1) {
          //   dispatch({ type: 'PAIR_ERROR', payload: data.Message })
          // }

          const payloadObj = {
            data: data,
            cur1: pair.currency1,
            cur2: pair.currency2
          }
          dispatch({ type: 'SET_PAIR', payload: payloadObj})
        })
    } catch (error) {
      console.log(error);
    }
  }
}