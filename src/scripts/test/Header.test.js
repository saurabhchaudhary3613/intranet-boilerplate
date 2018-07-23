import * as React from 'react';
import { mount } from 'enzyme';
import Header from '../components/Header';

test('Header renders specified title', () => {
    const wrapper = mount(
        <div>
            <Header />
        </div>
    );
    expect(wrapper.text()).toEqual('MFS|Global Distribution');
});
