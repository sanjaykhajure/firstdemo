import { LightningElement, wire } from 'lwc';
import fetchMyAcount from '@salesforce/apex/GetMyContact.fetchMyAcount';
import {NavigationMixin} from 'lightning/navigation';
export default class AccountManager extends NavigationMixin(LightningElement) {
    @wire(fetchMyAcount)
    mycontacts;
    contactId;
    NavigteDetails(event){
        this.contactId=event.target.value;
        console.log(this.contactId);
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:this.contactId,
                objectApiName:'Account',
                actionName:'view'
            }

        });

    }
}