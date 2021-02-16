public with sharing class SearchMyContact {
    @AuraEnabled
    public static list<contact> getMyContact(string accountID)
    {
        list<contact> conlist =[select id,Name from Contact where accountid=:accountID];
        return conlist;
    }
}
