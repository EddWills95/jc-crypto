import React from 'react';
import { shallow, mount } from 'enzyme';

import Dashboard from './Dashboard';


describe('DashboardComponent', () => {

  const comp = mount(<Dashboard />);

  it('should render without fail', () => {
    expect(comp).toBeTruthy();
  })

  it('should have an add button', () => {
    const button = comp.find('.add-pair-button');

    expect(button.length).toEqual(1);
  })

})