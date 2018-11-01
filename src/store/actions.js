function isLoading() {
  return(dispatch, getState) => {
    dispatch({ type: 'LOADING_CHANGE', payload: true })
  }
}

function notLoading() {
  return(dispatch, getState) => {
    dispatch({ type: 'LOADING_CHANGE', payload: true })
  }
}

export function fetchCoins() {
  return async(dispatch, getState) => {
    try {
      isLoading();
      fetch('https://min-api.cryptocompare.com/data/all/coinlist')
        .then(response => response.json())
        .then((data) => {
          notLoading();
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
      isLoading();
      fetch(url)
        .then(response => response.json())
        .then(data => {
          // Need to catch if the message includes a failure (no pair to transfer)
          const payloadObj = {
            data: data,
            cur1: pair.currency1,
            cur2: pair.currency2
          }
          notLoading();
          dispatch({ type: 'SET_PAIR', payload: payloadObj})
        })
    } catch (error) {
      console.log(error);
    }
  }
}