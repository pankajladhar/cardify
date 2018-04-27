import React from 'react';
import renderer from 'react-test-renderer';
import Cards from './../index';

describe('Cards', () => {
    it('should render Loader screen when Cards state is empty', () => {
        let component = renderer.create(
            <Cards />
        );
        let instance = component.getInstance();
        instance.state.cards = [];
        expect(component.toJSON()).toMatchSnapshot(); 
    });

    it('should render correctly', () => {
        let tree = renderer.create(
            <Cards />
        ).toJSON();

        expect(tree).toMatchSnapshot()
    })
})