import { Component, OnInit } from '@angular/core';
import { Node } from '../../models/node.model';
import {TreeCategoryRecursiveService} from "../../services/tree-category-recursive.service";
import {TreeCreationUtils} from "../../utils/tree-creation.utils";
import {TreeCategoryIterativeService} from "../../services/tree-category-iterative.service";
import {NewNodeDialog} from "../../dialogs/new-node/new-node.component";
import {MdDialog} from "@angular/material";
import {TreeCategoryService} from "../../services/tree-category.service";

const TYPE_RECURSIVE: string = "Recursive";
const TYPE_ITERATIVE: string = "Iterative";
const ROOT_LEVEL: number = 0;

@Component({
  selector: 'tree-container',
  templateUrl: './tree-container.component.html',
  styleUrls: ['tree-container.component.less']
})
export class TreeContainerComponent implements OnInit {

  /**
   * Root node of currently displayed tree.
   */
  rootNode: Node;

  /**
   * Array used to store tree nodes in
   * display order.
   */
  nodesArray: Array<Node>;

  /**
   * Current tree service used for
   * nodes array generation.
   */
  currentTreeService: TreeCategoryService;

  /**
   * List of all instance of available tree services.
   * At the moment it is assumed that two services
   * will be injected.
   */
  allTreeServices;

  /**
   * Type of currently used service for
   * nodes array building.
   */
  serviceType;

  constructor(private treeServices: TreeCategoryService, public dialog: MdDialog) {
    this.serviceType = TYPE_RECURSIVE;
    this.allTreeServices = treeServices;
    this.currentTreeService = treeServices[1];
  }

  ngOnInit() {

  }

  /**
   * Opens dialog for new node creation.
   * If no node is passed in, it is assumed that
   * new tree is being created.
   * @param node
   */
  addNewNode(node?: Node): void {
    let dialogRef = this.dialog.open(NewNodeDialog);
    dialogRef.afterClosed().subscribe(result => {
      if (result && node) {
        let newNode: Node = {value: result, children: [], level: node.level + 1};
        node.children.push(newNode);
        this.nodesArray = this.currentTreeService.build(this.rootNode);
      } else if (result && !node) {
        let newNode: Node = {value: result, children: [], level: ROOT_LEVEL};
        this.rootNode = newNode;
        this.nodesArray = [this.rootNode];
      }
    });
  }

  /**
   * Generates new tree.
   */
  generateStartingTree(): void {
    this.rootNode = TreeCreationUtils.createSampleTree();
    this.nodesArray = this.currentTreeService.build(this.rootNode);
  }

  /**
   * Toggles tree service type between
   * iterative and recursive.
   */
  toggleBuilder() {
    if (this.currentTreeService instanceof TreeCategoryRecursiveService) {
      this.serviceType = TYPE_ITERATIVE;
      this.currentTreeService = this.allTreeServices[0];
    } else if (this.currentTreeService instanceof TreeCategoryIterativeService) {
      this.serviceType = TYPE_RECURSIVE;
      this.currentTreeService = this.allTreeServices[1];
    }
  }

}
