import React from 'react';

import { shallow } from 'enzyme';
import AddPair from './AddPair';

describe('AddPair', () => {

  const comp = shallow(<AddPair />);

  it('should render without fail', () => {
    expect(comp).toBeTruthy();
  })

  describe('add pair button', () => {
    const button = comp.find('button');

    it('should have a button', () => {

      expect(button.length).toEqual(1);
      expect(button.text()).toEqual('Add Crypto Pair');
    })
  
    it('should show a modal on button click', () => {

      button.simulate('click');
  
      const modal = comp.find('.add-modal');

      expect(modal.length).toEqual(1);
    })
  })

})