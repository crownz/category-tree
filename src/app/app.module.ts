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

@NgModule({
  declarations: [
    AppComponent,
    TreeContainerComponent,
    TreeNodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
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
  bootstrap: [AppComponent]
})
export class AppModule { }
