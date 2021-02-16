public with sharing class GetContactByAccId {
    @auraEnabled (cacheable=true)
    public static list<contact> fetchContactById(string AccId)
    {
        list<contact> conlist=[select id,Name,Phone,Fax,Email from contact where accountid =:AccId];
        return conlist;
    }
}
