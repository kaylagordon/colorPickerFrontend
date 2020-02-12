import React from 'react';
import { render } from '@testing-library/react';
import ProjectForm from './ProjectForm';
import { shallow } from 'enzyme';

jest.mock("react-redux", () => ({
  useSelector: () => [{name: "Test", id: 1}],
  useDispatch: () => jest.fn()
}));

describe('ProjectForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProjectForm />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
