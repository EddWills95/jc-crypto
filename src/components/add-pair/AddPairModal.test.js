import React from 'react';
import { shallow } from 'enzyme';

import AddPairModal from './AddPairModal';

describe('AddPairModal', () => {

  const wrapper = shallow(<AddPairModal />);

  it('should render without error', () => {
    expect(wrapper).toBeTruthy();
  })

  describe('fetching', () => {

    beforeEach(() => {
      fetch.resetMocks();
    })
    
    it('should fetch coins on load', async () => {
      fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))
      
      await wrapper.instance().componentDidMount()

      expect(fetch.mock.calls.length).toEqual(1)
    })

  })

})