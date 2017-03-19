import { Node } from '../models/node.model';
import {TreeCategoryService} from "./tree-category.service";

export class TreeCategoryRecursiveService extends TreeCategoryService {

  constructor() {
    super();
  }

  /**
   * Creates array of tree nodes in recursive way
   * in order which nodes will be printed out
   * when visualizing.
   * Stack overflow might occur if tree depth is too big.
   * @param tree
   * @returns {Array<Node>}
   */
  build(tree: Node): Array<Node> {
    let result: Array<Node> = [];
    result.push(tree);

    if (tree.children && tree.children.length > 0) {
      tree.children.forEach(child => result.push(...this.build(child)));
    }

    return result;
  }

}
/**
 * Exporting factory.
 */
export default () => new TreeCategoryRecursiveService();
