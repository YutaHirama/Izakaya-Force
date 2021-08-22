import { LightningElement, api, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecord, getFieldValue , updateRecord } from 'lightning/uiRecordApi';

import SPECIAL_ATENTION_REASON_FIELD from '@salesforce/schema/Account.SPECIAL_ATENTION_REASON__c';
import SPECIAL_ATENTION_KBN_FIELD from '@salesforce/schema/Account.SPECIAL_ATENTION_KBN__c';
import BLACK_REASON_KBN_FIELD from '@salesforce/schema/Account.BLACK_REASON_KBN__c';
import DEPOSIT_FIELD from '@salesforce/schema/Account.Deposit__c';
import ARREARS_FIELD from '@salesforce/schema/Account.Arrears__c';
import OWNED_FIELD from '@salesforce/schema/Account.Owned__c';
import EXPIRES_AT_THIS_MONTH_FIELD from '@salesforce/schema/Account.Expires_At_This_Month__c';
import CUMULATIVE_AURCHASE_AMOUNT_FIELD from '@salesforce/schema/Account.CuMulative_Aurchase_Amount__c';
import WEB_LOGIN_ID_FIELD from '@salesforce/schema/Account.WEB_LOGIN_ID__c';
import BLACK_CUSTOMER_IMG_FIELD from '@salesforce/schema/Account.Black_Customer_IMG__c';
import PROHIBITED_MATTERS_IMG_FIELD from '@salesforce/schema/Account.Prohibited_Matters_IMG__c';
import LONG_TERM_USER_IMG_FIELD from '@salesforce/schema/Account.Long_Term_User_IMG__c';
import ROYAL_CUSTOMER_IMG_FIELD from '@salesforce/schema/Account.Royal_Customer_IMG__c';

const FIELDS = [SPECIAL_ATENTION_REASON_FIELD ,
                SPECIAL_ATENTION_KBN_FIELD ,
                BLACK_REASON_KBN_FIELD ,
                DEPOSIT_FIELD ,
                ARREARS_FIELD ,
                OWNED_FIELD ,
                EXPIRES_AT_THIS_MONTH_FIELD ,
                CUMULATIVE_AURCHASE_AMOUNT_FIELD ,
                WEB_LOGIN_ID_FIELD ,
                BLACK_CUSTOMER_IMG_FIELD ,
                PROHIBITED_MATTERS_IMG_FIELD ,
                LONG_TERM_USER_IMG_FIELD ,
                ROYAL_CUSTOMER_IMG_FIELD
              ];

export default class ImportantDetail extends LightningElement {
  @api recordId;
  @api objectApiName;

  @api SPECIAL_ATENTION_REASON_Field = SPECIAL_ATENTION_REASON_FIELD;
  @api SPECIAL_ATENTION_KBN_Field = SPECIAL_ATENTION_KBN_FIELD;
  @api BLACK_REASON_KBN_Field = BLACK_REASON_KBN_FIELD;
  @api Deposit_Field = DEPOSIT_FIELD;
  @api Arrears_Field = ARREARS_FIELD;
  @api Owned_Field = OWNED_FIELD;
  @api Expires_At_This_Month_Field = EXPIRES_AT_THIS_MONTH_FIELD;
  @api CuMulative_Aurchase_Amount_Field = CUMULATIVE_AURCHASE_AMOUNT_FIELD;
  @api WEB_LOGIN_ID_Field = WEB_LOGIN_ID_FIELD;
  @api Black_Customer_IMG_Field = BLACK_CUSTOMER_IMG_FIELD;
  @api Prohibited_Matters_IMG_Field = PROHIBITED_MATTERS_IMG_FIELD;
  @api Long_Term_User_IMG_Field = LONG_TERM_USER_IMG_FIELD;
  @api Royal_Customer_IMG_Field = ROYAL_CUSTOMER_IMG_FIELD;

  @wire ( getRecord, { recordId: '$recordId', fields: FIELDS} ) record;
  //初期表示される項目値の定義
  get SPECIAL_ATENTION_REASON() {
    return this.record.data.fields.SPECIAL_ATENTION_REASON__c.value;
  }
  get SPECIAL_ATENTION_KBN() {
    return this.record.data.fields.SPECIAL_ATENTION_KBN__c.value;
  }
  get BLACK_REASON_KBN() {
    return this.record.data.fields.BLACK_REASON_KBN__c.value;
  }
  get Deposit() {
    return this.record.data.fields.Deposit__c.value;
  }
  get Arrears() {
    return this.record.data.fields.Arrears__c.value;
  }
  get Owned() {
    return this.record.data.fields.Owned__c.value;
  }
  get Expires_At_This_Month() {
    return this.record.data.fields.Expires_At_This_Month__c.value;
  }
  get CuMulative_Aurchase_Amount() {
    return this.record.data.fields.CuMulative_Aurchase_Amount__c.value;
  }
  get WEB_LOGIN_ID() {
    return this.record.data.fields.WEB_LOGIN_ID__c.value;
  }
  get Black_Customer_IMG() {
    return this.record.data.fields.Black_Customer_IMG__c.value;
  }
  get Prohibited_Matters_IMG() {
    return this.record.data.fields.Prohibited_Matters_IMG__c.value;
  }
  get Long_Term_User_IMG() {
    return this.record.data.fields.Long_Term_User_IMG__c.value;
  }
  get Royal_Customer_IMG() {
    return this.record.data.fields.Royal_Customer_IMG__c.value;
  }

  connectedCallback() {
  }
}