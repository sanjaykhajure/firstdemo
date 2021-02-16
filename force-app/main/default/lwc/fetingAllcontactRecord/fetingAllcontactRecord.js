import { LightningElement, wire } from 'lwc';
import fetContact from '@salesforce/apex/contacFetch.fetContact';
import { NavigationMixin } from 'lightning/navigation'; 
export default class FetingAllcontactRecord extends NavigationMixin(LightningElement) {
    @wire(fetContact)
    contacts;
    contactId
    NavigateToDetail(event){
        this.contactId=event.target.value;
        this[NavigationMixin.Navigate]({
           type:'standard__recordPage',
           attributes:{
               recordId:this.contactId,
               objectApiName:'Contact',
               actionName:'view'

           }
        });
    }
    
}