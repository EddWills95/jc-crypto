import React from 'react';

import { shallow } from 'enzyme';
import { async } from 'jest';
import AddPair from './AddPair';

describe('AddPair', () => {
  const comp = shallow(<AddPair />);

  it('should render without fail', () => {
    expect(comp).toBeTruthy();
  })

  describe('add pair button', () => {
    beforeEach(() => {
      fetch.resetMocks()
    })

    const button = comp.find('.add-modal-button');
    
    it('should have a button to open modal', () => {
      expect(button.length).toEqual(1);
      expect(button.text()).toEqual('Add Crypto Pair');
    })
    
    it('should show a modal on button click', () => {
      button.simulate('click');

      const modal = comp.find('.add-modal');

      expect(modal.length).toEqual(1);
    })

    it('should fetch a list of possible coins on click', () => {  


    })
  })

})