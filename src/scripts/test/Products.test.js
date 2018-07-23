import * as React from 'react';
import { mount } from 'enzyme';
import Products from '../components/Products';

jest.mock('../components/Products'); //Product is now a mock constructor

describe('Products', () => {
    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        Products.mockClear();
    });

    test('render', () => {
        const wrapper = mount(<Products />);
        expect(wrapper.exists()).toBe(true);
    });

    it('new() can be called on Product', () => {
        const products = new Products();
        expect(Products).toHaveBeenCalledTimes(1);
    });

    it('check mock function return undefined', () => {
        const products = new Products();
        expect(products.renderProducts()).toBe(undefined);
    });
});
