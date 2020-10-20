import React, {Component} from 'react'
import classes from './Popup.module.scss'
import {Timer} from "../UI/Timer/Timer"
import {Select} from "../UI/Select/Select"
import bankCard from '../../assets/images/bankCard.svg'
import {Button} from "../UI/Button/Button"
import {BoxesWrapper} from "../BoxesWrapper/BoxesWrapper"

class Popup extends Component {
    state = {
        select: {
            activeItem: 1,
            opened: false,
            items: [
                {id: 1, text: 'Банковская карта', image: bankCard},
                {id: 2, text: 'Биткоин', image: bankCard},
                {id: 3, text: 'Выставить счет', image: bankCard},
            ]
        },
        payType: {
            activeType: 2,
            types: [
                {id: 1, give: 50, earn: 100},
                {id: 2, give: 100, earn: 200},
                {id: 3, give: 500, earn: 1000},
            ]
        }
    }

    selectHandler = id => {
        this.setState({
            select: {
                ...this.state.select,
                activeItem: id,
                opened: false
            }
        })
    }

    popupSubmit = () => {
        const payType = this.state.select.items.filter(el => el.id === this.state.select.activeItem)[0]
        const money = this.state.payType.types.filter(el => el.id === this.state.payType.activeType)[0]
        alert(`Выбранный способ оплаты: ${payType.text} \nСумма пополнения: ${money.give}`)
    }

    toggleSelect = (value = undefined) => {
        this.setState({
            select: {
                ...this.state.select,
                opened: value === undefined ? !this.state.select.opened : value
            }
        })
    }

    boxClickHandler = id => {
        this.setState({
            payType: {
                ...this.state.payType,
                activeType: id
            }
        })
    }

    render() {
        return (
            <div
                className={classes.Popup}
                onClick={this.props.onClose}
            >
                <div
                    className={classes.Popup__content}
                    onClick={event => {
                        this.toggleSelect(false)
                        event.stopPropagation()
                    }}
                >
                    <div
                        className={classes.Popup__close}
                        onClick={this.props.onClose}
                    >
                        <div/>
                        <div/>
                    </div>

                    <div className={classes.Popup__label}>+100%</div>

                    <Timer
                        time={16}
                    />

                    <div className={classes.Popup__title}>Увеличьте свой депозит!</div>

                    <Select
                        activeItem={this.state.select.activeItem}
                        items={this.state.select.items}
                        onChange={this.selectHandler}
                        opened={this.state.select.opened}
                        toggle={this.toggleSelect}
                    />

                    <BoxesWrapper
                        boxes={this.state.payType.types}
                        activeBox={this.state.payType.activeType}
                        onClick={this.boxClickHandler}
                    />

                    <div className={classes.Popup__subtitle}>
                        <span>${this.state.payType.types.filter(el => el.id === this.state.payType.activeType)[0].earn}</span>
                        будет зачислено вам на счет
                    </div>

                    <Button
                        text='Пополнить'
                        onClick={this.popupSubmit}
                    />

                    <div className={classes.Popup__caption}>
                        При пополнении счета с банковской карты списание средств происходит по курсу банка клиента
                    </div>

                    <div className={classes.Popup__captionDetail}>
                        Подробнее
                    </div>
                </div>
            </div>
        )
    }
}

export default Popup
