import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-new-node',
  templateUrl: './new-node.component.html',
  styleUrls: ['new-node.component.less']
})
export class NewNodeDialog implements OnInit {

  constructor(public dialogRef: MdDialogRef<NewNodeDialog>) { }

  ngOnInit() {
  }

}
