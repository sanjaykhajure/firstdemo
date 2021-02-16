import { LightningElement, track, wire } from 'lwc';
import displayAccuntMethod from '@salesforce/apex/DisplayAcount.displayAccuntMethod';
export default class DisplayAcount extends LightningElement {
    accountidfromparent;
   /* @track columns=[
        { label :'Label', fieldName:'Name', type:'text'},
        { label :'Phone', fieldName:'Phone', type:'phone'},
        { label :'Industry', fieldName:'Industry', type:'text'},        
    ];*/
    @wire (displayAccuntMethod) 
    accounts;
    
    handleClick(event)
    {
        event.preventDefault();
        this.accountidfromparent=event.target.dataset.accountid;
        console.log('account ka is-->' + this.accountidfromparent);
        // event.target.dataset.datasetvalue ( that we defined in <a data-accountid thats why accountid ie data attribute)
    }
   
}