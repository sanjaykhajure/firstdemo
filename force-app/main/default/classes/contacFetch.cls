public with sharing class contacFetch {
    @AuraEnabled (cacheable=true)
   public static list<contact> fetContact(){
   list<contact> conlist =[select id, Name,Email, Phone from Contact limit 3];
    return conlist;
   }
 
}
