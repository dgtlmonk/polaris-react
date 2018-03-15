import * as React from 'react';
import {mount} from 'enzyme';

import UnstyledLink from '../../UnstyledLink';
import Link from '../Link';

describe('<Link />', () => {
  it('onClick gets called when clicking', () => {
    const spy = jest.fn();
    const link = mount(<Link url="MyThing" onClick={spy} />);
    link.simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('renders a button if no url is provided', () => {
    const link = mount(<Link />);
    const button = link.find('button').first();
    expect(button.exists()).toBe(true);
  });

  it('renders an anchor if a url is provided', () => {
    const link = mount(<Link url="MyThing" />);
    const a = link.find(UnstyledLink).first();
    expect(a.exists()).toBe(true);
  });

  describe('id', () => {
    it('is passed down to an underlying button', () => {
      const id = 'MyID';
      const link = mount(<Link id={id} />);
      expect(link.find('button').prop('id')).toBe(id);
    });

    it('is passed down to an underlying UnstyledLink', () => {
      const id = 'MyID';
      const link = mount(<Link url="https://shopify.com" id={id} />);
      expect(link.find(UnstyledLink).prop('id')).toBe(id);
    });
  });
});
