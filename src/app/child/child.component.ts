import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() valueToParent = ""
  @Output() sendToParent= new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  send($event: any) {
    this.sendToParent.emit($event.target.value)
  }
}
