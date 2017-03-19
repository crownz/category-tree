import {Component, OnInit, Input} from '@angular/core';
import { Node } from '../../models/node.model';

@Component({
  selector: 'tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['tree-node.component.less']
})
export class TreeNodeComponent implements OnInit {

  @Input() node: Node;

  constructor() { }

  ngOnInit() {

  }

}
