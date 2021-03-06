import { Node } from '../models/node.model';
import {Injectable} from "@angular/core";

@Injectable()
export abstract class TreeCategoryService {
  abstract build(tree: Node): Array<Node>;
}
