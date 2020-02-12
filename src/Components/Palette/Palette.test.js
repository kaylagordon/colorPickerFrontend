import * as React from 'react';
import { render } from '@testing-library/react';
import Palette from './Palette';
import { shallow } from 'enzyme';
import { useDispatch } from 'react-redux';

jest.mock("react-redux", () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn()
}));

describe('Palette', () => {
  let wrapper;
  let mockPalette = {
    name: 'test',
    project_id: 2,
    color1: 'FFF',
    color2: 'FFF',
    color3: 'FFF',
    color4: 'FFF',
    color5: 'FFF',
    id: 3
  };

  beforeEach(() => {
    wrapper = shallow(<Palette palette={mockPalette}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
