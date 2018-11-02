import * as reducers from './reducers';

describe('reducers', () => {
  describe('coinReducer', () => {
    it('should return the initial state', () => {
      expect(reducers.coinReducer(undefined, {})).toEqual({
        allCoins: [],
        selectedPairs: []
      })
    })

    it('should handle FETCH_ALL_COINS', () => {
      expect(reducers.coinReducer(
        undefined, 
        { type: 'FETCH_ALL_COINS', payload: { 
          "Data": { "BTC": { "Symbol": "BTC" }}
        }}
      )).toEqual({
        allCoins: [{ "Symbol": "BTC" }],
        selectedPairs: []
      })
    })

    it('should handle SET_PAIR', () => {
      expect(reducers.coinReducer(
        undefined,
        { type: 'SET_PAIR', payload: { 
          cur1: 'LTC', 
          cur2: 'BTC', 
          data: { "BTC": 0.00876 }} 
        }
      )).toEqual({
        allCoins: [],
        selectedPairs: [{label: 'LTC / BTC', data: 0.00876}]
      })
    })

    it('should handle REMOVE_PAIR', () => {
      expect(reducers.coinReducer(
        {
          selectedPairs: [{label: 'LTC / BTC', data: 0.00876}]
        },
        { type: 'REMOVE_PAIR', payload: 0 }
      )).toEqual({
        selectedPairs: []
      })
    })
  })

  describe('loadingReducer', () => {
    it('should return the intial state', () => {
      expect(reducers.loadingReducer(undefined, {})).toEqual({
        loading: false
      })
    })

    it('should handle LOADING_CHANGE', () => {
      expect(reducers.loadingReducer(undefined, {
        type: 'LOADING_CHANGE',
        payload: true
      })).toEqual({
        loading: true
      })
    })
  })
})