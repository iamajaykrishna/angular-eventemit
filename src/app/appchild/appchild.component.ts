import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './appchild.component.html',
  styleUrls: ['./appchild.component.css']
})
export class AppchildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() valueChange = new EventEmitter();
  counter = 0;
  valueChanged() { // You can give any function name
      this.counter = this.counter + 1;
      this.valueChange.emit(this.counter);
  }

}