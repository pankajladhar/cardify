import React, { Component } from "react";
import FormField from './../../Base/FormField';
import CONTANTS from './../../../Constants';
import Label from './../../Base/Label';
import TextBox from './../../Base/TextBox';
import Button from './../../Base/Button';
import './AddNewCard.css';

const { CARD_NAME_TEXT, CARD_NAME_PLACEHOLDER_TEXT,
    CARD_ALIAS_NAME_TEXT, CARD_ALIAS_NAME_PLACEHOLDER_TEXT } = CONTANTS.ADD_NEW_CARD

class AddNewCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardName: undefined,
            cardAliasName: undefined,
            cardAvatarIcon: undefined,
            addNewCardBtnDisabled: true
        };
        this._isBtnDisabled = this._isBtnDisabled.bind(this);

        this.handleChangeOnCardName = this.handleChangeOnCardName.bind(this);
        this.handleChangeOnCardAliasName = this.handleChangeOnCardAliasName.bind(this);
        this.handleChangeOnCardAvatarIcon = this.handleChangeOnCardAvatarIcon.bind(this);
        this.handleClickOnAddNewCardBtn = this.handleClickOnAddNewCardBtn.bind(this);
    }

    _isBtnDisabled() {
        const { cardName, cardAliasName, cardAvatarIcon } = this.state;
        console.log(!!cardName && !!cardAliasName && !!cardAvatarIcon)
        return !!cardName && !!cardAliasName && !!cardAvatarIcon ? false : true
    }

    handleChangeOnCardName(e) {
        this.setState({
            cardName: e.target.value,
            addNewCardBtnDisabled: this._isBtnDisabled()
        })
    }

    handleChangeOnCardAliasName(e) {
        this.setState({
            cardAliasName: e.target.value,
            addNewCardBtnDisabled: this._isBtnDisabled()
        })
    }

    handleChangeOnCardAvatarIcon(e) {
        this.setState({
            cardAvatarIcon: e.target.value,
            addNewCardBtnDisabled: this._isBtnDisabled()
        })
    }

    handleClickOnAddNewCardBtn() {
        console.log(this.state)
    }

    render() {
        return (
            <div className="AddNewCard">
                <h1>{CONTANTS.ADD_NEW_CARD.TITLE}</h1>
                <FormField>
                    <Label htmlFor="AddNewCard-CardName-TextBox"
                        text={CARD_NAME_TEXT}
                        showAsterisk />
                    <TextBox id="AddNewCard-CardName-TextBox"
                        placeholder={CARD_NAME_PLACEHOLDER_TEXT}
                        value={this.state.cardName}
                        onChange={this.handleChangeOnCardName} />
                </FormField>
                <FormField>
                    <Label htmlFor="AddNewCard-CardAliasName-TextBox"
                        text={CARD_ALIAS_NAME_TEXT}
                        showAsterisk />
                    <TextBox id="AddNewCard-CardAliasName-TextBox"
                        placeholder={CARD_ALIAS_NAME_PLACEHOLDER_TEXT}
                        value={this.state.cardAliasName}
                        onChange={this.handleChangeOnCardAliasName} />
                </FormField>
                <FormField>
                    <Label htmlFor="AddNewCard-CardAvatarIcon-TextBox"
                        text="Card Avatar Icon"
                        showAsterisk />
                    <TextBox id="AddNewCard-CardAvatarIcon-TextBox"
                        placeholder={CARD_ALIAS_NAME_PLACEHOLDER_TEXT}
                        value={this.state.cardAvatarIcon}
                        onChange={this.handleChangeOnCardAvatarIcon} />
                </FormField>
                <Button value={CONTANTS.ADD_NEW_CARD.BTN_TEXT}
                    disabled={this.state.addNewCardBtnDisabled}
                    onClick={this.handleClickOnAddNewCardBtn} />
            </div>
        )
    }
}

export default AddNewCard;