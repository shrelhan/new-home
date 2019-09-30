import { Component, OnInit } from '@angular/core';
import { faTh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})

export class ToolsComponent implements OnInit {

  faTh = faTh;

  constructor() { }

  ngOnInit() {
  }

}
