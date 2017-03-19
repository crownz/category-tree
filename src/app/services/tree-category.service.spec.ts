import {Node} from '../models/node.model';

import {TreeCategoryIterativeService} from "./tree-category-iterative.service";
import {TreeCategoryService} from "./tree-category.service";
import {TreeCategoryRecursiveService} from "./tree-category-recursive.service";
describe('TreeCategoryIterativeService', () => {
  let testedInstances: Array<TreeCategoryService>;

  beforeEach(() => {
    testedInstances = [
      new TreeCategoryIterativeService(),
      new TreeCategoryRecursiveService()
    ];

  });

  it('build should successfully build when root has no children', () => {
    testedInstances.forEach(service => {
      //given
      const root: Node = { value: 'node1', children: [], level: 0 };

      //when
      const result = service.build(root);

      //then
      expect(result.length).toEqual(1);
      expect(result[0]).toBe(root);
    });
  });

  it('build should successfully build when root has children', () => {
    testedInstances.forEach(service => {
      //given
      const innerNode: Node = { value: 'node4', children: [], level: 2 };

      const root: Node = {
        value: 'node1',
        children: [
          { value: 'node2', children: [innerNode], level: 1 },
          { value: 'node3', children: [], level: 1 }
        ],
        level: 0
      };

      const expectedResult = [root, root.children[0], root.children[0].children[0], root.children[1]];

      //when
      const result = service.build(root);

      //then
      expect(result.length).toEqual(4);
      expect(result[0]).toBe(root);
      expect(result).toEqual(expectedResult);
    });
  });

});
