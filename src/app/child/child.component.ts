import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  channelName: string = "lorem";

  @Output()
  sendMessageEmitter = new EventEmitter<any>();



  constructor() { }

  ngOnInit(): void {
  }

  sendMessageToParent(e:any) {
    this.sendMessageEmitter.emit(e.target.value)
  }


}
