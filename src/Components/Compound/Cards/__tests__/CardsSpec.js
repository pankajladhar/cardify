import React from 'react';
import renderer from 'react-test-renderer';
import Cards from './../index';

describe('Cards', ()=>{
    it('should render correctly', () => {
        let tree = renderer.create(
            <Cards />
        );

        expect(tree).toMatchSnapshot()
    })
})