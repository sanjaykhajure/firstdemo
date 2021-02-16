public with sharing class DisplayAcount {
   @AuraEnabled (cacheable=true)
   public static list<account> displayAccuntMethod()
   {
       list<account> acclist=[select id,name,type,phone,industry from Account limit 10];
       return acclist;
   }
}
