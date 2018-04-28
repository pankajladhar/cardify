import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Cards from './../index';

describe('Cards', () => {
    xit('should render Loader screen when Cards state is empty', () => {
        let component = renderer.create(
            <MemoryRouter>
                <Cards />
            </MemoryRouter>
        );
        let instance = component.getInstance();
        instance.state.cards = [];
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should render correctly', () => {
        let tree = renderer.create(
            <MemoryRouter>
                <Cards />
            </MemoryRouter>
        ).toJSON();

        expect(tree).toMatchSnapshot()
    })
})