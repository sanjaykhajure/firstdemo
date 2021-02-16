import { LightningElement , wire,api} from 'lwc';
import fetchContactById from '@salesforce/apex/GetContactByAccId.fetchContactById';
export default class GetContactByAccId extends LightningElement {
    @api AccountId;
    @wire (fetchContactById,{AccId,$AccountId})
    contacts;
}