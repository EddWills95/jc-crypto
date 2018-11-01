export function fetchCoins() {
  return async(dispatch, getState) => {
    try {
      fetch('https://min-api.cryptocompare.com/data/all/coinlist')
        .then(response => response.json())
        .then((data) => {
          dispatch({ type: 'FETCH_ALL_COINS', coins: data })
        })
    } catch (error) {
      console.log(error);
    }
  }
}