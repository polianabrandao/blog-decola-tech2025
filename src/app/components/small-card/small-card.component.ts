import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: false,
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  photoCover:string = ""

  @Input()
  cardTitle:String = ""

  @Input()
  Id:string="0"

  constructor(){ }
}
