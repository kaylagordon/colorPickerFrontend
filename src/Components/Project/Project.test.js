import React from 'react';
import { render } from '@testing-library/react';
import Project from './Project';
import { shallow } from 'enzyme';

jest.mock("react-redux", () => ({
  useSelector: () => [{name: "Test", id: 1}],
  useDispatch: () => jest.fn()
}));

let mockProjectInfo = {
  name: 'Test',
  id: 12
}

let mockPalettes = [{
  name: 'test',
  project_id: 2,
  color1: 'FFF',
  color2: 'FFF',
  color3: 'FFF',
  color4: 'FFF',
  color5: 'FFF',
  id: 3
}, {
  name: 'test',
  project_id: 2,
  color1: 'FFF',
  color2: 'FFF',
  color3: 'FFF',
  color4: 'FFF',
  color5: 'FFF',
  id: 3
}];

describe('Project', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Project projectInfo={mockProjectInfo} palettes={mockPalettes}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
