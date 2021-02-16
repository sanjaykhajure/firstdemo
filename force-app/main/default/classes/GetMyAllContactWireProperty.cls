public with sharing class GetMyAllContactWireProperty {
    @AuraEnabled(cacheable=true)
     public static list<contact> fetchallContact()
     {
         list<contact> conlist=[select id,Name,Phone from contact];
         return conlist;
     }
}
