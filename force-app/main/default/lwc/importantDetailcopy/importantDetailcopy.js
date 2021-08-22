import { LightningElement, api, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getRelatedImportant from '@salesforce/apex/ImportantDetailController.getRelatedImportant';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

/* 
const FIELDS = ['Account.SPECIAL_ATENTION_REASON__c',
                'Account.BLACK_REASON_KBN__c',
                'Account.Deposit__c',
                'Account.Arrears__c',
                'Account.Owned__c',
                'Account.Expires_At_This_Month__c',
                'Account.CuMulative_Aurchase_Amount__c',
                'Account.WEB_LOGIN_ID__c',
                'Account.Black_Customer_IMG__c',
                'Account.Prohibited_Matters_IMG__c',
                'Account.Long_Term_User_IMG__c',
                'Account.Royal_Customer_IMG__c'
              ];
 */

export default class ImportantDetail extends LightningElement {
  @api recordId;
  record;
//  @wire ( getRecord, { recordId: '$recordId', fields: FIELDS} ) record;

  @wire ( getRelatedImportant, { accountId : '$recordId'} )
  record;

  get record(){
    return this.record;
  }

  connectedCallback() {
  }
}