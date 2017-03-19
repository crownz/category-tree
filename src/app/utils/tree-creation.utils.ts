import {Node} from '../models/node.model';

export class TreeCreationUtils {

  /**
   * Creates  sample tree using hardcoded values.
   * @returns {{value: string, children: (Node|Node)[], indentation: number}}
   */
  static createSampleTree(): Node {
    let node6: Node = {value: 'node6', children: [],  level: 3};
    let node7: Node = {value: 'node7', children: [], level: 3};
    let node2: Node = {value: 'node2', children: [], level: 2};
    let node3: Node = {value: 'node3', children: [],  level: 2};
    let node4: Node = {value: 'node4', children: [node6, node7], level: 2};
    let node5: Node = {value: 'node5', children: [], level: 2};
    let node0: Node = {value: 'node0', children: [node2],  level: 1};
    let node1: Node = {value: 'node1', children: [node3, node4, node5], level: 1};
    let rootNode = {value: 'Root', children: [node0, node1], level: 0};
    return rootNode;
  }
}
