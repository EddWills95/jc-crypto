import React from 'react';

import CoinsList from './CoinsList';
import { shallow } from 'enzyme';


describe('CoinsList', () => {

  const mockCoins = [
    { label: 'BTC / LTC', data: 0.0032 }
  ]

  const mockRemove = jest.fn();

  const comp = shallow(<CoinsList coins={mockCoins} removePair={mockRemove} />)

  it('should render without failure', () => {
    expect(comp).toBeTruthy();
  })

  describe('visual', () => {
    let coinWrapper;
    
    beforeEach(() => {
      coinWrapper = comp.find('.coin-pair-wrapper');
    })

    it('should show all the coin pairs', () => {
      expect(coinWrapper.length).toEqual(1);
    })

    it('should display the label and exchange rate', () => {
      const label = coinWrapper.find('h1');
      const data = coinWrapper.find('h2');

      expect(label.text()).toEqual('BTC / LTC');
      expect(data.text()).toEqual('0.0032');
    })
  })

  describe('removing a coin', () => {
    beforeEach(() => {
      const removeButton = comp.find('.remove-pair').find('button');
      removeButton.simulate('click');
    })

    it('should call the prop function on click', () => {
      expect(mockRemove).toHaveBeenCalled();
    })
  })

})