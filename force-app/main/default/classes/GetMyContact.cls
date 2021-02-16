public with sharing class GetMyContact {
    @AuraEnabled(cacheable=true)
    public static list<account> fetchMyAcount() {
        list<account> acclist=[select Id,Name,AccountNumber,Rating,Phone,Website from Account];
        return acclist;

    }
}
