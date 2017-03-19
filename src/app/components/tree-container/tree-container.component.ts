import { Component, OnInit } from '@angular/core';
import { Node } from '../../models/node.model';
import {TreeCategoryRecursiveService} from "../../services/tree-category-recursive.service";
import {TreeCategoryService} from "../../services/tree-category.service";
import {TreeCreationUtils} from "../../utils/tree-creation.utils";
import {TreeCategoryIterativeService} from "../../services/tree-category-iterative.service";
import {NewNodeDialog} from "../../dialogs/new-node/new-node.component";
import {MdDialog} from "@angular/material";

const TYPE_RECURSIVE: string = "Recursive";
const TYPE_ITERATIVE: string = "Iterative";
const ROOT_LEVEL: number = 0;

@Component({
  selector: 'tree-container',
  templateUrl: './tree-container.component.html',
  styleUrls: ['tree-container.component.less']
})
export class TreeContainerComponent implements OnInit {

  private rootNode: Node;
  private nodesArray: Array<Node>;

  private currentBuilder;
  private allBuilders;

  private builderType;

  constructor(private builders: TreeCategoryService, public dialog: MdDialog) {
    this.builderType = TYPE_RECURSIVE;
    this.allBuilders = builders;
    this.currentBuilder = builders[0];
  }

  /**
   * On component init, creates tree with hardcoded values.
   */
  ngOnInit() {

  }

  addNewNode(node?: Node): void {
    let dialogRef = this.dialog.open(NewNodeDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result && node) {
        let newNode: Node = {value: result, children: [], level: node.level + 1};
        node.children.push(newNode);
        this.nodesArray = this.currentBuilder.build(this.rootNode);
      } else if (result && !node) {
        let newNode: Node = {value: result, children: [], level: ROOT_LEVEL};
        this.rootNode = newNode;
        this.nodesArray = [this.rootNode];
      }
    });
  }

  generateStartingTree(): void {
    this.rootNode = TreeCreationUtils.createSampleTree();
    this.nodesArray = this.currentBuilder.build(this.rootNode);
  }

  /**
   * Toggles builder type between
   * iterative and recursive.
   */
  toggleBuilder() {
    if (this.currentBuilder instanceof TreeCategoryRecursiveService) {
      this.builderType = TYPE_ITERATIVE;
      this.currentBuilder = this.allBuilders[1];
    } else if (this.currentBuilder instanceof TreeCategoryIterativeService) {
      this.builderType = TYPE_RECURSIVE;
      this.currentBuilder = this.allBuilders[0];
    }
  }

}
