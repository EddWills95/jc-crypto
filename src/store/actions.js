export function fetchCoins() {
  return async(dispatch, getState) => {
    try {
      fetch('https://min-api.cryptocompare.com/data/all/coinlist').then(response => {
        dispatch({ type: 'FETCH_ALL_COINS', coins: response.json() })
      })
      
    } catch (error) {
      console.log(error);
    }
  }
}