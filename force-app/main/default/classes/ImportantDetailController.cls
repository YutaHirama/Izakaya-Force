public with sharing class ImportantDetailController {
    public ImportantDetailController(){
    }

    @AuraEnabled(cacheable=true)
    public static Account getRelatedImportant(Id accountId) {
        return [SELECT
                Id,
                SPECIAL_ATENTION_REASON__c,
                SPECIAL_ATENTION_KBN__c,
                BLACK_REASON_KBN__c,
                Deposit__c, 
                Arrears__c, 
                Owned__c,
                Expires_At_This_Month__c,
                CuMulative_Aurchase_Amount__c,
                WEB_LOGIN_ID__c,
                Black_Customer_IMG__c,
                Prohibited_Matters_IMG__c,
                Long_Term_User_IMG__c,
                Royal_Customer_IMG__c 
            FROM Account
            WHERE Id = :accountId
            LIMIT 1
            ];
    }
}