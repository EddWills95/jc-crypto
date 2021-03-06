import React from 'react';
import { shallow } from 'enzyme'

import { SelectedCoins } from './SelectedCoins';

import * as actions from '../../store/actions';

describe('SelectedCoins', () => {

  let comp;

  let selectedPairs = [];
  let loading = false;
  const dispatch = jest.fn();

  beforeEach(() => {
    comp = shallow(
      <SelectedCoins loading={loading} selectedPairs={selectedPairs} dispatch={dispatch} />
    );
  })

  it('should render without failure', () => {
    expect(comp).toBeTruthy();
  });

  it('should call to fetch all coins', () => {
    expect(dispatch).toBeCalled();
  })

  describe('visual', () => {
    it('should have a title', () => {
      const title = comp.find('h2');
      const subtitle = comp.find('h3');

      expect(title.text()).toEqual('Jungle Creative - Technical Exercise');
      expect(subtitle.text()).toEqual('Edd Williams')
    })

    it('should hold a CoinList component', () => {
      const coinList = comp.find('CoinList');

      expect(coinList.length).toEqual(1);
    })

    describe('loading notice', () => {
      beforeEach(() => {
        loading = true;
        comp = shallow(
          <SelectedCoins loading={loading} selectedPairs={selectedPairs} dispatch={dispatch} />
        );
      })

      it('should show a notice', () => {
        const loadingEl = comp.find('h1');
  
        expect(loadingEl.length).toEqual(1);
        expect(loadingEl.text()).toEqual('LOADING...');
      })
    })
  })

  // Not totally sure how to test this.
  // describe('removePair function', () => {    
  //   beforeEach(() => {
  //     comp.instance().removePair(0);
  //   })

  //   it('should call dispatch to remove the pair', () => {
  //     expect(dispatch).toHaveBeenLastCalledWith(actions.removePair(0));
  //   })
  // })
})