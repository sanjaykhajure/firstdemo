import { LightningElement,api,wire } from 'lwc';
import displayContactMethod from '@salesforce/apex/DisplayContact.displayContactMethod';
export default class DisplayContactDataTable extends LightningElement {
     columns=[
        { label :'Label', fieldName:'Name', type:'text'},
        { label :'Phone', fieldName:'Phone', type:'phone'},
        { label :'Industry', fieldName:'Industry', type:'text'},        
    ]; 
    @api gloaccountId;
    @wire(displayContactMethod,{accounttidincontclass:'$gloaccountId'})
    contacts;
   // @wire displayContactMethod(accounttidincontclass:$Accountid)
}