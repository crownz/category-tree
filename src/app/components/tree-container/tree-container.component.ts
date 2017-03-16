import { Component, OnInit } from '@angular/core';
import { Node } from '../../models/node.model';
import {TreeCategoryRecursiveService} from "../../services/tree-category-recursive.service";
import {TreeCategoryService} from "../../services/tree-category.service";
import {TreeCreationUtils} from "../../utils/tree-creation.utils";
import {TreeCategoryIterativeService} from "../../services/tree-category-iterative.service";

const TYPE_RECURSIVE = "Recursive";
const TYPE_ITERATIVE = "Iterative";

@Component({
  selector: 'tree-container',
  templateUrl: './tree-container.component.html',
  styleUrls: ['./tree-container.component.css']
})
export class TreeContainerComponent implements OnInit {

  private rootNode: Node;
  private nodesArray: Array<Node>;

  private currentBuilder;
  private allBuilders;

  private builderType;

  constructor(private builders: TreeCategoryService) {
    this.builderType = TYPE_RECURSIVE;
    this.allBuilders = builders;
    this.currentBuilder = builders[0];
  }

  /**
   * On component init, creates tree with hardcoded values.
   */
  ngOnInit() {
    this.rootNode = TreeCreationUtils.createSampleTree();
    this.nodesArray = this.currentBuilder.build(this.rootNode);
  }

  /**
   * Adds new child node based on entered name and recreates tree.
   * @param form
   * @param node
   */
  addNode(form, node) {
    let newNodeName = form.value.nodeName;
    if (!newNodeName) {
      return;
    }
    let node1: Node = {value: newNodeName, children: [], indentation: node.indentation + 5};
    node.children.push(node1);
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
