import { LightningElement } from 'lwc';
import fetchCaseDetails from '@salesforce/apex/caseManager.fetchCaseDetails';
export default class CaseManager extends LightningElement {
    searchCaseNumber;
    receivedcases;
    receivederror;
    caseNumberChange(event)
    {
       this.searchCaseNumber=event.target.value;
       console.log('this.searchCaseNumber' + this.searchCaseNumber);
       // call apex function
       fetchCaseDetails({caseNumber:this.searchCaseNumber})
       .then(result=>{
        this.receivedcases=result;
       })
       .catch(error=>{
        this.receivederror=error;
       });
    }
}