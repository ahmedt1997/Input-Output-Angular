import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  variableInParent: string ="";

  msgFromChild :string = "";


  constructor() { }

  ngOnInit(): void {
  }


  receiveMessage($event: any) {
    this.msgFromChild=$event
  }

}
