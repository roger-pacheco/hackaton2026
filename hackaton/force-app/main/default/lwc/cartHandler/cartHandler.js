import { LightningElement } from 'lwc';

export default class CartHandler extends LightningElement {
    cartSession;

    handleSync() {
        const currentStatus = this.cartSesion.status; 
        console.log('Syncing status: ' + currentStatus);
    }
}