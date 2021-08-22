import { LightningElement, api, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import getRelativeDataTable from '@salesforce/apex/relativeDataTableController.getRelativeDataTable';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

const FIELDS = [NAME_FIELD, STAGENAME_FIELD, AMOUNT_FIELD, CLOSEDATE_FIELD];

export default class ImportantDetail extends LightningElement {
  // 開いたレコードページの Salesforce Id
  @api recordId;
  @api objectApiName;
  //oppInfo;

/* 
  // 商談オブジェクトから取得したラベル名
  @wire (getObjectInfo, { objectApiName: OPPORTUNITY_OBJECT })
  wireObject(result){
    if(result.data){
      this.oppInfo=result.data;
      console.log('this.oppInfo' + this.oppInfo);
    } else if (result.error){
      this.error=result.error;
      console.log('this.error' + this.error);
    }
  }
 */
  // 商談オブジェクトから取得したレコード
  @wire (getRelativeDataTable,{accountId:'$recordId'}) retaledOppRecords;
  get retaledOppRecords(){
    console.log('this.record ' + this.retaledOppRecords);
    return this.retaledOppRecords;
  }

/* 
  get label_Name(){
    console.log('**************');
    return this.oppInfo ? this.oppInfo.data.fields.Name.label : null;
  }
  get label_StageName(){
    return this.oppInfo.data.fields.StageName.label;
  }
  get label_Amount(){
    return this.oppInfo.data.fields.Amount.label;
  }
  get label_CloseDate(){
    return this.oppInfo.data.fields.CloseDate.label;
  }
 */

  connectedCallback() {
  }
}