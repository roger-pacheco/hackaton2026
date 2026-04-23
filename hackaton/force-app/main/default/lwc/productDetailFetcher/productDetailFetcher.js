import { LightningElement, track } from 'lwc';
import getProductStock from '@salesforce/apex/CommerceProductController.getProductStock';

export default class ProductDetailFetcher extends LightningElement {
    @track error;

    fetchStock() {
        getProductStock()
            .then(result => { console.log(result); })
            .catch(err => {
            
                this.error = 'Server Error: Unable to retrieve inventory.';
                console.error('Apex Error:', err.body.message);
            });
    }
}