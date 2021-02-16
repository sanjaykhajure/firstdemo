import { LightningElement, wire } from 'lwc';
import fetAllContacts from '@salesforce/apex/ContactManager.fetAllContacts'
export default class ContactManagerdisplay extends LightningElement {
    @wire(fetAllContacts)
    contacts;
}