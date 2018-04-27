import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './../index';

describe('Footer', () => {
    it('should render correctly', () => {
        let tree = renderer.create(
            <Footer />
        ).toJSON;

        expect(tree).toMatchSnapshot()
    })
})