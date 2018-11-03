import React from 'react';
import { shallow } from 'enzyme';
import { AddCoinPair } from './AddCoinPair';

describe('AddCoinPair', () => {
  let comp;

  let allCoins = [];
  let loading = false;

  beforeEach(() => {
    comp = shallow(
      <AddCoinPair allCoins={allCoins} loading={loading} />
    )
  });

  it('should render without failure', () => {
    expect(comp).toBeTruthy();
  })

  describe('visual', () => {
    describe('modal', () => {
      let button;
      beforeEach(() => {
        button = comp.find('.add-coin-pair-button');
      })
      
      it('should have a button to open the modal', () => {
        expect(button.length).toEqual(1);
      })
    })
  })
})