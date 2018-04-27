import React from 'react';
import renderer from 'react-test-renderer';
import Card from './../index';

describe('Card', () => {
    it('should render correctly', () =>{
        let tree = renderer.create(
            <Card />
        ).toJSON;

        expect(tree).toMatchSnapshot()
    })
})