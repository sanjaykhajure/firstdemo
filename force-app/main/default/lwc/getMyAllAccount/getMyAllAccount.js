import { LightningElement, wire,api,track } from 'lwc';
import fetchAccount from '@salesforce/apex/GetMyAllAccount.fetchAccount';
import fetchContact from '@salesforce/apex/GetMyAllAccount.fetchContact';
import deleteContact from '@salesforce/apex/GetMyAllAccount.deleteContact';
import { NavigationMixin } from 'lightning/navigation';
export default class GetMyAllAccount extends NavigationMixin(LightningElement) {
    @api acid;
    @wire(fetchAccount)
    receivedAccounts; 
    @track mycontactid;
    @track contopen=false;
    deleteMessagesucess;
    deleteMessageerror;
    contactcall(event)
    {
      this.acid=event.target.value;
      console.log('this.acid'+ this.acid);
    }

    @wire (fetchContact,{accountid:'$acid'})
    contacts;

    editContactCall(event)
    {
      this.mycontactid = event.target.value;
      console.log('this.mycontactid1111-->' + this.mycontactid);
      this.contopen=true;
      console.log('this.mycontactid-->' + this.mycontactid);
      console.log('contopen boolean' + this.contopen);
    }

    contactClose()
    {
        this.contopen=false;  
    }

    deleteContactCall(event)
    {
        this.mycontactid = event.target.value;      
        console.log('delete wali id-->' +this.mycontactid ) ;
        deleteContact({contactid:this.mycontactid})
        .then(result=>{
           this.deleteMessagesucess=result;
           console.log('contat id set for class para-->'+ contactid);
           console.log('result for delete-->'+ this.deleteMessagesucess);
        })
        .catch(error=>{
         this.deleteMessageerror=error;
        });

    }
    //@wire (deleteContact,{contactid:'$mycontactid'})
   // message;
   viewContact(event)
   {
    this.mycontactid = event.target.value; 
    console.log('contact in referencemixin' + this.mycontactid);
    this[NavigationMixin.Navigate]({
        type:'satandard__recordPage',
        attributes:{
            recordId:this.mycontactid,            
            objectApiName:'Contact',
            actionName:'view'
        }
    }) ;
   }


}