import { Component, OnInit, Input } from '@angular/core';
import { Result } from 'src/app/models/Result';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit {
// tslint:disable-next-line: whitespace
  @Input() result:Result;
  constructor() { }

  ngOnInit() {

  }

}
