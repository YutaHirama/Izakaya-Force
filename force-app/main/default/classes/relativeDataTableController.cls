public with sharing class relativeDataTableController {
  public relativeDataTableController() {
  }
  
  @AuraEnabled(cacheable=true)
  public static List<Opportunity> getRelativeDataTable(Id accountId) {
    system.debug('accountId ; ' + accountId);
    return [SELECT
      Id,
      Name,
      StageName,
      Amount,
      CloseDate
      FROM Opportunity
      WHERE AccountId = :accountId
    ];
  }
}