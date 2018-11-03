import React from 'react';
import { shallow } from 'enzyme'

import { SelectedCoins } from './SelectedCoins';

describe('SelectedCoins', () => {

  let comp;

  const selectedPairs = [];
  const loading = false;
  const dispatch = jest.fn();

  beforeEach(() => {
    comp = shallow(
      <SelectedCoins loading={loading} selectedPairs={selectedPairs} dispatch={dispatch} />
    );
  })

  it('should render without failure', () => {
    expect(comp).toBeTruthy();
  })
})