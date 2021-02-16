
public with sharing class GetMyAllAccount {  
    @AuraEnabled(cacheable=true) 
    public static list<account>fetchAccount()
    {
    list<account> acclist=[select id,Name,AccountNumber,Fax,Industry,no_of_contacts__c,Phone,Rating from Account limit 3];
    return acclist;
    }

    @AuraEnabled(cacheable=true) 
    public static list<contact>fetchContact(string accountid)
    {
    list<contact> conlist=[select id,Name,Phone,Email from Contact where AccountId=:accountid];
    return conlist;
    }

    @AuraEnabled 
    public static string  deleteContact(string contactid)
    {
    string message;    
    try
       {
        system.debug('ccontac id in class-->'+contactid);
        list<contact> conlist=[select id,Name,Phone,Email from Contact where id=:contactid];
        system.debug('hello delete list-->'+conlist);
        delete conlist;
        message='Success';
       }
       catch(Exception ex)
       {
           message=ex.getMessage();
       }
       return message;
    }
 
 
}
