import { LightningElement, wire } from 'lwc';
import fetchallContact from '@salesforce/apex/GetMyAllContactWireProperty.fetchallContact';
import { NavigationMixin} from 'lightning/navigation';
export default class GetMyallContactWireProperty extends NavigationMixin(LightningElement){
   @wire(fetchallContact)
   contacts;
   contactId;
   NavigateToDetails(event)
   {
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