import React from 'react';
import PageWrapper from './PageWrapper';

describe('components/PageWrapper', () => {
  test('should render a page wrapper', () => {
    expect(shallow(<PageWrapper title="My Title"><span /></PageWrapper>)).toMatchSnapshot();
  });

  test('should render the title in an h1', () => {
    const wrapper = shallow(<PageWrapper title="My Title"><div /></PageWrapper>);

    expect(wrapper.find('h1')).toExist();
    expect(wrapper.find('h1').text()).toEqual('My Title');
  });
});
