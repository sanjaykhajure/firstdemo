global with sharing class ContactManager {
    @AuraEnabled(cacheable=true)
    global static list<contact>fetAllContacts()
    {
     list<contact> conlist=[select id,Name,Email from contact];
     return conlist;
    }
}
