import * as actions from './actions';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('actions', () => {
  describe('loading', () => {
    describe('isLoading', () => {
      const expectedAction = {
        type: 'LOADING_CHANGE', payload: true
      }
      it('should return an action', () => {
        expect(actions.isLoading()).toEqual(expectedAction);
      })
    })

    describe('notLoading', () => {
      const expectedAction = {
        type: 'LOADING_CHANGE', payload: false
      }
      it('should return an action', () => {
        expect(actions.notLoading()).toEqual(expectedAction);
      })
    })
  })

  describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore();
    })

    it('creates an action for fetching all coins', () => {
      fetchMock.getOnce('https://min-api.cryptocompare.com/data/all/coinlist', {
        "Data": {
          "BTC": {
            "Symbol": "BTC"
          }
        }
      })

      const expectedActions = [
        { type: "LOADING_CHANGE", payload: true },
        { type: "LOADING_CHANGE", payload: false },
        { type: "FETCH_ALL_COINS", payload: { "Data": { "BTC": { "Symbol": "BTC" }}}}
      ]

      const store = mockStore({ allCoins: [] })

      return store.dispatch(actions.fetchCoins()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    })
    
    it('creates an action for setting the coin pair', () => {
      fetchMock.getOnce(`https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=BTC`, {
        "BTC": 0.008076
      });

      const expectedActions = [
        { type: "LOADING_CHANGE", payload: true },
        { type: "LOADING_CHANGE", payload: false },
        { 
          type: 'SET_PAIR', payload: { 
          data: { "BTC": 0.008076 },
          cur1: 'LTC',
          cur2: 'BTC' 
          }
        }
      ];

      const store = mockStore({ allCoins: [] });

      return store.dispatch(actions.setPair({currency1: 'LTC', currency2: 'BTC' })).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    })

  })
})




// describe('fetchCoins', () => {
//   it('should create an action to fetch all the coins', async() => {
//     const data = {}
//     const action = await actions.fetchCoins();

//     expect(action).toEqual({
//       type: 'FETCH_ALL_COINS',
//       payload: data
//     })
//   })
// })