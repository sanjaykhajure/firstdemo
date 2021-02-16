public with sharing class DisplayContact {
    @AuraEnabled (cacheable=true)
    public static list<contact> displayContactMethod(string accounttidincontclass)
    { 
        system.debug('received account is id -->' +accounttidincontclass);
        list<contact> conlist= [select id,Name from contact where accountid=:accounttidincontclass];
        return  conlist;
    }
}
