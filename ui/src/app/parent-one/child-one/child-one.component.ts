import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionTypeEnum } from '../helper/helper';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {

  @Input() actionButton: any;
  @Output() onPerformAction: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickAction() {
    if (this.actionButton.action === ActionTypeEnum.Add) {
      this.onPerformAction.emit({ 'actionType': ActionTypeEnum.Add, 'message': 'Added Successfully!' });
    } else if (this.actionButton.action === ActionTypeEnum.Edit) {
      this.onPerformAction.emit({ 'actionType': ActionTypeEnum.Edit, 'message': 'Edited Successfully!' });
    }
  }

}
