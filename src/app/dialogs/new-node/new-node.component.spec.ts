import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNodeDialog } from './new-node.component';

describe('NewNodeComponent', () => {
  let component: NewNodeDialog;
  let fixture: ComponentFixture<NewNodeDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewNodeDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNodeDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
