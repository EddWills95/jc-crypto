import React from 'react';

import { shallow } from 'enzyme';
import AddPair from './AddPair';

describe('AddPair', () => {

  const comp = shallow(<AddPair />);

  it('should render without fail', () => {
    expect(comp).toBeTruthy();
  })

  it('should have a button', () => {
    const button = comp.find('button');

    expect(button.length).toEqual(1);
    expect(button.text()).toEqual('Add Crypto Pair');
  })
})