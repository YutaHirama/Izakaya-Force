/**
 *  リードトリガハンドラクラス
 *  ・登録前　　：未定義
 *  ・更新前　　：未定義
 *  ・削除前　　：未定義
 *  ・登録後　　：未定義
 *  ・更新後　　：取引開始時関連データ引継ぎ処理
 *  ・削除後　　：未定義
 *  ・削除取消後：未定義
 */
public with sharing class LeadTriggerHandler {
    // データローダバッチ - 取引開始処理 20210607 by 平間 S
    static final String EVALUATED = '評価済み';
    // データローダバッチ - 取引開始処理 20210607 by 平間 E

    // ---------------
    // 定数定義
    // ---------------


    /**
     *  コンストラクタ
     */
    public LeadTriggerHandler(Boolean isExecuting, Integer size) {
    }

    /**
     *  登録前処理
     *  －未定義－
     */
    public void OnBeforeInsert(List<Lead> listTriggerNew, Map<Id, Lead> mapTriggerNew) {
    }

    /**
     *  更新前処理
     *  －未定義－
     */
    public void OnBeforeUpdate(List<Lead> listTriggerNew, Map<Id, Lead> mapTriggerNew, List<Lead> listTriggerOld, Map<Id, Lead> mapTriggerOld) {
        for(Lead l : listTriggerNew){
            system.debug('******* ' + l);
            if(String.valueOf(l.TestDate__c).contains('/')){
				l.TestDate__c = Date.valueOf(String.valueOf(l.TestDate__c).replace('/', '-'));
            }
            String dayString = l.TestDate__c.format();
            system.debug('@@@@@@@ ' + dayString);
            l.TestDate__c = Date.valueof(dayString); 
        }
    }

    /**
     *  削除前処理
     *  －未定義－
     */
    public void OnBeforeDelete(List<Lead> listTriggerOld, Map<Id, Lead> mapTriggerOld) {
    }

    /**
     *  登録後処理
     *  未定義
     */
    public void OnAfterInsert(List<Lead> listTriggerNew, Map<Id, Lead> mapTriggerNew) {
    }

    /**
     *  更新後処理
     *  －未定義－
     */
    public void OnAfterUpdate(List<Lead> listTriggerNew, Map<Id, Lead> mapTriggerNew, List<Lead> listTriggerOld, Map<Id, Lead> mapTriggerOld) {
    }

    /**
     *  削除後処理
     *  －未定義－
     */
    public void OnAfterDelete(List<Lead> listTriggerOld, Map<Id, Lead> mapTriggerOld) {
    }

    /**
     *  削除取消後処理
     *  －未定義－
     */
    public void OnAfterUnDelete(List<Lead> listTriggerOld, Map<Id, Lead> mapTriggerOld) {
    }
}