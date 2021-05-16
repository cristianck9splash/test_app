import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {

  @Input() name: string;
  @Input() error: string;
  @Input() type = 'text';
  @Input() placeholder: string;
  @Input() maxlength: number;
  @Input() value: string;

  constructor() { }

  ngOnInit() {}
}
