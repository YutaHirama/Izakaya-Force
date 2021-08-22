/**
 *  ・登録前　　：未定義
 *  ・更新前　　：未定義
 *  ・削除前　　：未定義
 *  ・登録後　　：未定義
 *  ・更新後　　：取引開始時関連データ引継ぎ処理
 *  ・削除後　　：未定義
 *  ・削除取消後：未定義
 */
trigger LeadTrigger on Lead (before insert, before update, before delete, after insert, after update, after delete, after undelete) {
    
        LeadTriggerHandler handler = new LeadTriggerHandler(Trigger.isExecuting, Trigger.size);
        
        if (Trigger.isBefore && Trigger.isInsert) {
            // 登録前処理
            handler.OnBeforeInsert(Trigger.new, Trigger.newMap);
        } else if(Trigger.isBefore && Trigger.isUpdate){
            // 更新前処理
            handler.OnBeforeUpdate(Trigger.new, Trigger.newMap, Trigger.old, Trigger.oldMap);            
        } else if (Trigger.isBefore && Trigger.isDelete) {
            // 削除前処理
            handler.OnBeforeDelete(Trigger.old, Trigger.oldMap);
        } else if (Trigger.isInsert) {
            // 登録後処理
            handler.OnAfterInsert(Trigger.new, Trigger.newMap);
        } else if(Trigger.isUpdate){
            // 更新後処理
            handler.OnAfterUpdate(Trigger.new, Trigger.newMap, Trigger.old, Trigger.oldMap);
        } else if (Trigger.isDelete) {
            // 削除後処理
            handler.OnAfterDelete(Trigger.old, Trigger.oldMap);
        } else if (Trigger.isUnDelete) {
            // 削除取消後処理
            handler.OnAfterUnDelete(Trigger.old, Trigger.oldMap);
        }
    }