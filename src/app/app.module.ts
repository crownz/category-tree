import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TreeContainerComponent } from './components/tree-container/tree-container.component';
import { TreeNodeComponent } from './components/tree-node/tree-node.component';
import {TreeCategoryRecursiveService} from "./services/tree-category-recursive.service";
import {TreeCategoryIterativeService} from "./services/tree-category-iterative.service";
import {TreeCategoryService} from "./services/tree-category.service";
import {MaterialModule} from "@angular/material";
import { NewNodeDialog } from './dialogs/new-node/new-node.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeContainerComponent,
    TreeNodeComponent,
    NewNodeDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    {
      provide: TreeCategoryService,
      useValue: new TreeCategoryRecursiveService(),
      multi: true
    },
    {
      provide: TreeCategoryService,
      useValue: new TreeCategoryIterativeService(),
      multi: true
    }
  ],
  entryComponents: [
    NewNodeDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
