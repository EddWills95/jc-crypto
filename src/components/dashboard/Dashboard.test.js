import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from './Dashboard';


describe('DashboardComponent', () => {

  const comp = shallow(<Dashboard />);

  it('should render without fail', () => {
    expect(comp).toBeTruthy();
  })

  it('should have an add button', () => {
    const button = comp.find('#add-pair');

    expect(button.length).toEqual(1);
  })

})