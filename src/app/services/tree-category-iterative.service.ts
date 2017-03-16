import { Node } from '../models/node.model';
import {TreeCategoryService} from "./tree-category.service";

export class TreeCategoryIterativeService extends TreeCategoryService {

  /**
   * Creates array of tree nodes in iterative way
   * in order which nodes will be printed out
   * when visualizing.
   * @param tree
   * @returns {Array<Node>}
   */
  build(tree: Node): Array<Node> {
    let result: Array<Node> = [];
    let toIterate = [];
    toIterate.push(tree);

    while(toIterate.length > 0) {
      let current = toIterate.shift();
      result.push(current);
      if (current.children && current.children.length > 0) {
        toIterate = this.mergeToBeginning(toIterate, current.children);
      }
    }

    return result;
  }

  /**
   * Merges arrays by pushing second
   * array to the beginning of first one.
   * @param array1
   * @param array2
   * @returns {Array}
   */
  mergeToBeginning(array1, array2) {
    let result = [];
    result.push(...array2, ...array1);
    return result;
  }

}
