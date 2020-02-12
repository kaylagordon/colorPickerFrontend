import React from 'react';
import { render } from '@testing-library/react';
import ColorCard from './ColorCard';
import { shallow } from 'enzyme';

describe('ColorCard', () => {
  let wrapper;
  let cardColor = {
    id: 2,
    color: 'FFFFFF'
  }

  beforeEach(() => {
    wrapper = shallow(<ColorCard cardColor={cardColor}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
