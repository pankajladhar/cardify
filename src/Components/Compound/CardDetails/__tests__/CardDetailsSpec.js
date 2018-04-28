import React from 'react';
import renderer from 'react-test-renderer';
import CardDetails from './../index';

describe("CardDetails", () => {
    let cardDetailsProps = {}

    beforeEach(() => {
        cardDetailsProps = {
            match: {
                params: {
                    cardId: "sdsd4523sw"
                }
            }
        }
    });

    it('should render correctly', () =>{
        let tree = renderer.create(
            <CardDetails {...cardDetailsProps}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
})