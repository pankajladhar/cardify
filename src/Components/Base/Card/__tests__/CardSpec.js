import React from 'react';
import renderer from 'react-test-renderer';
import Card from './../index';

describe('Card', () => {
    let cardProps = {}
    
    beforeEach(()=>{
        cardProps = {
            id : "122df32q",
            cardType: "HDFC"
        }
    })

    it('should render correctly with all mandatory props', () =>{
        let tree = renderer.create(
            <Card {...cardProps}/>
        ).toJSON();

        expect(tree).toMatchSnapshot()
    });

    it('should render correctly with all props', ()=>{
        cardProps.alias = "HDFC alias";
        let tree = renderer.create(
            <Card {...cardProps} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})