import { Component, OnInit } from '@angular/core';
import { actionButtonList, ActionTypeEnum } from './helper/helper';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.scss']
})
export class ParentOneComponent implements OnInit {

  public dataSource: any[] = [];
  public actionButtons = actionButtonList;
  public dialogActionButton: any = { "name": 'Add', "action": ActionTypeEnum.Add };
  public isAlertDialogVisible = false;
  public alertDialogMessage: string = '';
  public alertDialogWhenAdded = false;

  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const userDetails = [
      { 'id': 1, 'name': 'Clare Cornau', 'phoneno': '(815) 6180492', 'email': 'ccornau0@bigcartel.com', 'gender': 'Female', 'nationality': 'Somalia' },
      { 'id': 2, 'name': 'Edouard Elsmore', 'phoneno': '(507) 3119958', 'email': 'eelsmore1@goo.gl', 'gender': 'Male', 'nationality': 'United States' },
      { 'id': 3, 'name': 'Aeriel Elldred', 'phoneno': '(478) 7181722', 'email': 'aelldred2@archive.org', 'gender': 'Female', 'nationality': 'Russia' },
      { 'id': 4, 'name': 'Abagael Meachem', 'phoneno': '(698) 4411762', 'email': 'ameachem3@columbia.edu', 'gender': 'Female', 'nationality': 'China' },
      { 'id': 5, 'name': 'Jeremiah Hadwen', 'phoneno': '(345) 6582965', 'email': 'jhadwen4@vkontakte.ru', 'gender': 'Male', 'nationality': 'Mongolia' }
    ];
    this.dataSource = userDetails;
  }

  onClickAction(actionType: any, element: any) {
    switch (actionType) {
      case 1:
        break;
      case 2:
        this.dialogActionButton = {
          "name": 'Update',
          "action": ActionTypeEnum.Edit,
          "element": element
        }
        break;
      case 3:
        break;
      case 4:
        break;
      default:
        break;
    }
  }

  onClickAdd() {
    this.dialogActionButton = {
      "name": 'Add',
      "action": ActionTypeEnum.Add
    }
  }

  onPerformAction(obj: any) {
    debugger;
    this.isAlertDialogVisible = true;
    if (obj.actionType === 5) {
      this.alertDialogWhenAdded = true;
      this.alertDialogMessage = obj.message;
    } else if (obj.actionType === 2) {
      this.alertDialogWhenAdded = false;
      this.alertDialogMessage = obj.message;
    }
    setTimeout(() => {
      this.isAlertDialogVisible = false;
    }, 5000);
  }

}
