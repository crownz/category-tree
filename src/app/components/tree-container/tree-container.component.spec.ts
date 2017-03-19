import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Node } from '../../models/node.model';
import { TreeContainerComponent } from './tree-container.component';
import {MaterialModule, MdDialog} from "@angular/material";
import {TreeCategoryService} from "../../services/tree-category.service";
import {TreeCreationUtils} from "../../utils/tree-creation.utils";
import {Observable} from "rxjs";
import {TreeCategoryRecursiveService} from "../../services/tree-category-recursive.service";
import {TreeCategoryIterativeService} from "../../services/tree-category-iterative.service";

const TYPE_RECURSIVE: string = "Recursive";
const TYPE_ITERATIVE: string = "Iterative";

class TreeCategoryServiceMock {
  build() {}
}

class MdDialogMock {
  open() {}
}

class DialogRefMock {
  afterClosed() {

  }
}

describe('TreeContainerComponent', () => {
  let component: TreeContainerComponent;
  let fixture: ComponentFixture<TreeContainerComponent>;
  let treeService: TreeCategoryService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeContainerComponent ],
      imports: [MaterialModule.forRoot()],
      providers: [
        {
          provide: TreeCategoryService,
          useValue: new TreeCategoryServiceMock(),
          multi: true
        },
        {
          provide: TreeCategoryService,
          useValue: new TreeCategoryServiceMock(),
          multi: true
        },
        {
          provide: MdDialog,
          useValue: new MdDialogMock()
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeContainerComponent);
    component = fixture.componentInstance;
    treeService = TestBed.get(TreeCategoryService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('generateStartingTree should successfully generate nodes array', () => {
    //given
    const root: Node = { value: 'node1', children: [], level: 0 };
    const resultArray = [];

    //when
    spyOn(TreeCreationUtils, "createSampleTree").and.returnValue(root);
    spyOn(component.currentTreeService, "build").and.returnValue(resultArray);
    component.generateStartingTree();

    //then
    expect(component.rootNode).toBe(root);
    expect(component.nodesArray).toBe(resultArray);
  });

  it('addNewNode should successfully add new node', async(() => {
    //given
    let dialogRef: DialogRefMock = new DialogRefMock();
    const result = 'node';

    const root: Node = { value: 'node1', children: [], level: 0 };
    const resultArray = [];

    //when
    spyOn(TestBed.get(MdDialog), "open").and.returnValue(dialogRef);
    spyOn(dialogRef, "afterClosed").and.returnValue(Observable.of(result));
    spyOn(component.currentTreeService, "build").and.returnValue(resultArray);
    component.addNewNode(root);

    //then
    expect(root.children.length).toBe(1);
    expect(root.children[0].level).toEqual(root.level + 1);
    expect(component.nodesArray).toBe(resultArray);
  }));

  it('addNewNode should successfully create new root node', async(() => {
    //given
    let dialogRef: DialogRefMock = new DialogRefMock();
    const result = 'node';

    //when
    spyOn(TestBed.get(MdDialog), "open").and.returnValue(dialogRef);
    spyOn(dialogRef, "afterClosed").and.returnValue(Observable.of(result));
    component.addNewNode();

    //then
    expect(component.rootNode.children.length).toEqual(0);
    expect(component.rootNode.level).toEqual(0);
    expect(component.rootNode.value).toEqual(result);
    expect(component.nodesArray.length).toEqual(1);
    expect(component.nodesArray[0]).toBe(component.rootNode);
  }));

  it('addNewNode should do nothing without result value', async(() => {
    //given
    let dialogRef: DialogRefMock = new DialogRefMock();
    const root: Node = { value: 'node1', children: [], level: 0 };

    //when
    spyOn(TestBed.get(MdDialog), "open").and.returnValue(dialogRef);
    spyOn(dialogRef, "afterClosed").and.returnValue(Observable.of(undefined));
    component.rootNode = root;
    component.addNewNode();

    //then
    expect(component.rootNode).toBe(root);
  }));

  it('toggleBuilder should switch to iterative service', () => {
    //given
    component.currentTreeService = new TreeCategoryRecursiveService();

    //when
    component.toggleBuilder();

    //then
    expect(component.serviceType).toEqual(TYPE_ITERATIVE);
    expect(component.currentTreeService).toBe(component.allTreeServices[0]);
  });

  it('toggleBuilder should switch to recursive service', () => {
    //given
    component.currentTreeService = new TreeCategoryIterativeService();

    //when
    component.toggleBuilder();

    //then
    expect(component.serviceType).toEqual(TYPE_RECURSIVE);
    expect(component.currentTreeService).toBe(component.allTreeServices[1]);
  });
});
