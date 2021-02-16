import { LightningElement, wire } from 'lwc';
import fetchallContact from '@salesforce/apex/GetMyAllContactWireProperty.fetchallContact';
export default class GetMyAllContactWireFunction extends LightningElement {
    contacts;
    errorDetails;
    @wire(fetchallContact)
    myfunction({error,data})
    {
        if(data)
       {
        this.contacts=data;
       }
       else if(error)
       {
           this.errorDetails=error;
       }
    }
}