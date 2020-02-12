import React from 'react';
import { render } from '@testing-library/react';
import PaletteForm from './PaletteForm';
import { shallow } from 'enzyme';


let mockCurrentPalette = {
  name: 'test',
  project_id: 2,
  color1: 'FFF',
  color2: 'FFF',
  color3: 'FFF',
  color4: 'FFF',
  color5: 'FFF',
  id: 3
};

jest.mock("react-redux", () => ({
  useSelector: () => [{name: "Test", id: 1}],
  useDispatch: () => jest.fn()
}));

describe('PaletteForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PaletteForm currentPalette={mockCurrentPalette}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
