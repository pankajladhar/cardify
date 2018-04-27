import React from 'react';
import renderer from 'react-test-renderer';
import Header from './../index';

describe('Header', () => {
    it('should render correctly', () => {
        let tree = renderer.create(
            <Header />
        ).toJSON();
        expect(tree).toMatchSnapshot()
    })
})