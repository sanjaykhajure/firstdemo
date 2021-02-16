import { LightningElement } from 'lwc';
import getMyContact from '@salesforce/apex/SearchMyContact.getMyContact';
export default class SearchContactonAccountId extends LightningElement {
    myAccountId;
    fcont;
    ferror;
    accountChange(event)
    {
        this.myAccountId=event.target.value;
        console.log('my value is'+ this.myAccountId);
        getMyContact({accountID:this.myAccountId})
        .then(result=>{
            this.fcont=result;
        })
        .catch(error=>{
          this.ferror=error;
        });
    }
}