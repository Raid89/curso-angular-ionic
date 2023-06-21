import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() color: string = "blue-600";
  @Input() text_color: string = "blue-600";
  @Input() stylized: string = "default";
  @Input() disabled: boolean = false;
  @Input() text: string = "";


  constructor() {

  }

  ngOnInit(): void {

  }
}
