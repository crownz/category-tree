import {Node} from '../models/node.model';

export class TreeCreationUtils {

  /**
   * Creates  sample tree using hardcoded values.
   * Should be properly unit tested with jasmine / protractor.
   * @returns {{value: string, children: (Node|Node)[], indentation: number}}
   */
  static createSampleTree(): Node {
    let node6: Node = {value: 'fitgrgerrst', children: [],  level: 3};
    let node7: Node = {value: 'firsgtrgtrgtrt', children: [], level: 3};
    let node2: Node = {value: 'ww', children: [], level: 2};
    let node3: Node = {value: 'ss', children: [],  level: 2};
    let node4: Node = {value: 'aa', children: [node6, node7], level: 2};
    let node5: Node = {value: 'eeeee', children: [], level: 2};
    let node0: Node = {value: 'xx', children: [node2],  level: 1};
    let node1: Node = {value: 'ee', children: [node3, node4, node5], level: 1};
    let rootNode = {value: 'first', children: [node0, node1], level: 0};
    return rootNode;
  }
}
