import React, { Component } from 'react';
import Burger from './Burger/Burger';
import Controls from './Controls/Controls';
import Summary from './Summary/Summary';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'

const INGRIDIENT_PRICES = {
    sasuage: 50,
    cheese: 40,
    meat: 90,
    latus: 20
}

class BurgerBuilder extends Component {

    state = {
        ingredients: [
            { type: 'sasuage', amount: 0 },
            { type: 'cheese', amount: 0 },
            { type: 'meat', amount: 0 },
            { type: 'latus', amount: 0 }
        ],
        totalPrice: 80,
        modalOpen: false,
        purchasable: false,
    }

    updatePurchaseable = ingredients => {
        const sum = ingredients.reduce((sum, element) => {
            return sum + element.amount;
        }, 0);
        this.setState({ purchasable: sum > 0 })
    }

    addIngridientHandle = type => {
        const newIngredients = [...this.state.ingredients];
        const newPrice = this.state.totalPrice + INGRIDIENT_PRICES[type];
        for (let item of newIngredients) {
            if (item.type === type) item.amount++;
        }
        this.setState({ ingredients: newIngredients, totalPrice: newPrice })

        this.updatePurchaseable(newIngredients)
    }

    removeIngridientHandle = type => {

        const newIngredients = [...this.state.ingredients];
        const newPrice = this.state.totalPrice - INGRIDIENT_PRICES[type];
        for (let item of newIngredients) {
            if (item.type === type) {
                if (item.amount <= 0) return;
                item.amount--;
            }
        }
        this.setState({ ingredients: newIngredients, totalPrice: newPrice })

        this.updatePurchaseable(newIngredients)
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        return (
            <div>
                <div className='d-flex flex-md-row flex-column'>
                    <Burger ingredients={this.state.ingredients} />
                    <Controls
                        ingriedientAdded={this.addIngridientHandle}
                        ingredientRemoved={this.removeIngridientHandle}
                        price={this.state.totalPrice}
                        toggleModal={this.toggleModal}
                        purchasable={this.state.purchasable}
                    />
                </div>

                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Your order summary</ModalHeader>
                    <ModalBody>
                        <h5>Total Price: {this.state.totalPrice.toFixed(0)} BDT</h5>
                        <Summary ingredients={this.state.ingredients} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color='success' onClick={this.toggleModal}>Continue to checkout</Button>
                        <Button color='secondary' onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>

                </Modal>

            </div>

        );
    }
}

export default BurgerBuilder;