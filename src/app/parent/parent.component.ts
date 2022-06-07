import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  msg:string = ""

  valueToInput: string ="";

  constructor() { }

  ngOnInit(): void {
  }

  catchFromchild($event: any) {
    this.msg=$event
  }
}
