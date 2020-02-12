import React from 'react';
import { render } from '@testing-library/react';
import ProjectContainer from './ProjectContainer';
import { shallow } from 'enzyme';

jest.mock("react-redux", () => ({
  useSelector: () => [{name: "Test", id: 1}],
  useDispatch: () => jest.fn()
}));

describe('ProjectContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProjectContainer />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
