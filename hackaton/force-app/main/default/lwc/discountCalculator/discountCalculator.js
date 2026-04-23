import { LightningElement, track } from 'lwc';

export default class DiscountCalculator extends LightningElement {
    @track totalPrice = 0;

    calculate() {
        const price = 100;
        const qty = 10;
        const discount = 0.10;
        this.totalPrice = (price * qty) * (1 + discount);
    }
}