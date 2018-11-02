export function isLoading() {
  return { type: 'LOADING_CHANGE', payload: true }
}

export function notLoading() {
  return { type: 'LOADING_CHANGE', payload: false }
}

function fetchAllSucces(data) {
  return {
    type: 'FETCH_ALL_COINS', payload: data
  }
}

export function fetchCoins() {
  return async(dispatch, getState) => {
    try {
      dispatch(isLoading());
      return fetch('https://min-api.cryptocompare.com/data/all/coinlist')
        .then(response => response.json())
        .then((data) => {
          dispatch(notLoading());
          dispatch(fetchAllSucces(data));
        })
    } catch (error) {
      console.log(error);
    }
  }
}

function fetchPairSuccess(data, pair) {
  return {
    type: 'SET_PAIR',
    payload: {
      data: data,
      cur1: pair.currency1,
      cur2: pair.currency2
    }
  }
}

export function setPair(pair) {
  return async (dispatch, getState) => {
    // Fetch the data here!
    const url = `https://min-api.cryptocompare.com/data/price?fsym=${pair.currency1}&tsyms=${pair.currency2}`
    try {
      dispatch(isLoading());
      return fetch(url)
        .then(response => response.json())
        .then(data => {
          dispatch(notLoading());
          dispatch(fetchPairSuccess(data, pair))
        })
    } catch (error) {
      console.log(error);
    }
  }
}

export function removePair(index) {
  return (dispatch, getState) => {
    dispatch({ type: 'REMOVE_PAIR', payload: index });
  }
}