public with sharing class caseManager {
   @AuraEnabled
   public static list<case> fetchCaseDetails(string caseNumber){
       if(string.isNotBlank(caseNumber))
       {
           string searchcase= '%'+caseNumber+'%';
           return [select Id,Account.Name,CaseNumber,IsClosed, Origin,Description,Priority from CASE where CaseNumber like :searchcase];

       }
       else {
           return NULL;
       }
   }
}
