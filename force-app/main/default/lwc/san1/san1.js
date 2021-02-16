import { LightningElement } from 'lwc';

export default class San1 extends LightningElement {

    message='hello how are you';
    mymsg;
    handleOnchange(event)
    {
        this.mymsg=event.target.value;
    }
}