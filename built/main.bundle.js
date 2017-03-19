webpackJsonp([1,4],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeCategoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TreeCategoryService = (function () {
    function TreeCategoryService() {
    }
    return TreeCategoryService;
}());
TreeCategoryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], TreeCategoryService);

//# sourceMappingURL=tree-category.service.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(208);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewNodeDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewNodeDialog = (function () {
    function NewNodeDialog(dialogRef) {
        this.dialogRef = dialogRef;
        this.nodeName = '';
    }
    NewNodeDialog.prototype.ngOnInit = function () {
    };
    return NewNodeDialog;
}());
NewNodeDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
        selector: 'app-new-node',
        template: __webpack_require__(623),
        styles: [__webpack_require__(618)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialogRef */]) === "function" && _a || Object])
], NewNodeDialog);

var _a;
//# sourceMappingURL=new-node.component.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree_category_service__ = __webpack_require__(139);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TreeCategoryIterativeService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TreeCategoryIterativeService = (function (_super) {
    __extends(TreeCategoryIterativeService, _super);
    function TreeCategoryIterativeService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates array of tree nodes in iterative way
     * in order which nodes will be printed out
     * when visualizing.
     * @param tree
     * @returns {Array<Node>}
     */
    TreeCategoryIterativeService.prototype.build = function (tree) {
        var result = [];
        var toIterate = [];
        toIterate.push(tree);
        while (toIterate.length > 0) {
            var current = toIterate.shift();
            result.push(current);
            if (current.children && current.children.length > 0) {
                toIterate = this.mergeToBeginning(toIterate, current.children);
            }
        }
        return result;
    };
    /**
     * Merges arrays by pushing second
     * array to the beginning of first one.
     * @param array1
     * @param array2
     * @returns {Array}
     */
    TreeCategoryIterativeService.prototype.mergeToBeginning = function (array1, array2) {
        var result = [];
        result.push.apply(result, array2.concat(array1));
        return result;
    };
    return TreeCategoryIterativeService;
}(__WEBPACK_IMPORTED_MODULE_0__tree_category_service__["a" /* TreeCategoryService */]));

/**
 * Exporting factory.
 */
/* harmony default export */ __webpack_exports__["a"] = function () { return new TreeCategoryIterativeService(); };;
//# sourceMappingURL=tree-category-iterative.service.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree_category_service__ = __webpack_require__(139);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TreeCategoryRecursiveService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TreeCategoryRecursiveService = (function (_super) {
    __extends(TreeCategoryRecursiveService, _super);
    function TreeCategoryRecursiveService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates array of tree nodes in recursive way
     * in order which nodes will be printed out
     * when visualizing.
     * Stack overflow might occur if tree depth is too big.
     * @param tree
     * @returns {Array<Node>}
     */
    TreeCategoryRecursiveService.prototype.build = function (tree) {
        var _this = this;
        var result = [];
        result.push(tree);
        if (tree.children && tree.children.length > 0) {
            tree.children.forEach(function (child) { return result.push.apply(result, _this.build(child)); });
        }
        return result;
    };
    return TreeCategoryRecursiveService;
}(__WEBPACK_IMPORTED_MODULE_0__tree_category_service__["a" /* TreeCategoryService */]));

/**
 * Exporting factory.
 */
/* harmony default export */ __webpack_exports__["a"] = function () { return new TreeCategoryRecursiveService(); };;
//# sourceMappingURL=tree-category-recursive.service.js.map

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 408;


/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(560);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
        selector: 'app-root',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewEncapsulation */].None,
        template: __webpack_require__(620),
        styles: [__webpack_require__(615), __webpack_require__(614)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tree_container_tree_container_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tree_node_tree_node_component__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_tree_category_recursive_service__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_tree_category_iterative_service__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_tree_category_service__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dialogs_new_node_new_node_component__ = __webpack_require__(386);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_tree_container_tree_container_component__["a" /* TreeContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_tree_node_tree_node_component__["a" /* TreeNodeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dialogs_new_node_new_node_component__["a" /* NewNodeDialog */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MaterialModule */]
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_9__services_tree_category_service__["a" /* TreeCategoryService */],
                useFactory: __WEBPACK_IMPORTED_MODULE_8__services_tree_category_iterative_service__["a" /* default */],
                multi: true
            },
            {
                provide: __WEBPACK_IMPORTED_MODULE_9__services_tree_category_service__["a" /* TreeCategoryService */],
                useFactory: __WEBPACK_IMPORTED_MODULE_7__services_tree_category_recursive_service__["a" /* default */],
                multi: true
            }
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_11__dialogs_new_node_new_node_component__["a" /* NewNodeDialog */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tree_category_recursive_service__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_tree_creation_utils__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tree_category_iterative_service__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialogs_new_node_new_node_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_tree_category_service__ = __webpack_require__(139);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TYPE_RECURSIVE = "Recursive";
var TYPE_ITERATIVE = "Iterative";
var ROOT_LEVEL = 0;
var TreeContainerComponent = (function () {
    function TreeContainerComponent(treeServices, dialog) {
        this.treeServices = treeServices;
        this.dialog = dialog;
        this.serviceType = TYPE_RECURSIVE;
        this.allTreeServices = treeServices;
        this.currentTreeService = treeServices[1];
    }
    TreeContainerComponent.prototype.ngOnInit = function () {
    };
    /**
     * Opens dialog for new node creation.
     * If no node is passed in, it is assumed that
     * new tree is being created.
     * @param node
     */
    TreeContainerComponent.prototype.addNewNode = function (node) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialogs_new_node_new_node_component__["a" /* NewNodeDialog */]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result && node) {
                var newNode = { value: result, children: [], level: node.level + 1 };
                node.children.push(newNode);
                _this.nodesArray = _this.currentTreeService.build(_this.rootNode);
            }
            else if (result && !node) {
                var newNode = { value: result, children: [], level: ROOT_LEVEL };
                _this.rootNode = newNode;
                _this.nodesArray = [_this.rootNode];
            }
        });
    };
    /**
     * Generates new tree.
     */
    TreeContainerComponent.prototype.generateStartingTree = function () {
        this.rootNode = __WEBPACK_IMPORTED_MODULE_2__utils_tree_creation_utils__["a" /* TreeCreationUtils */].createSampleTree();
        this.nodesArray = this.currentTreeService.build(this.rootNode);
    };
    /**
     * Toggles tree service type between
     * iterative and recursive.
     */
    TreeContainerComponent.prototype.toggleBuilder = function () {
        if (this.currentTreeService instanceof __WEBPACK_IMPORTED_MODULE_1__services_tree_category_recursive_service__["b" /* TreeCategoryRecursiveService */]) {
            this.serviceType = TYPE_ITERATIVE;
            this.currentTreeService = this.allTreeServices[0];
        }
        else if (this.currentTreeService instanceof __WEBPACK_IMPORTED_MODULE_3__services_tree_category_iterative_service__["b" /* TreeCategoryIterativeService */]) {
            this.serviceType = TYPE_RECURSIVE;
            this.currentTreeService = this.allTreeServices[1];
        }
    };
    return TreeContainerComponent;
}());
TreeContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
        selector: 'tree-container',
        template: __webpack_require__(621),
        styles: [__webpack_require__(616)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services_tree_category_service__["a" /* TreeCategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_tree_category_service__["a" /* TreeCategoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdDialog */]) === "function" && _b || Object])
], TreeContainerComponent);

var _a, _b;
//# sourceMappingURL=tree-container.component.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_node_model__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_node_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_node_model__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeNodeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeNodeComponent = (function () {
    function TreeNodeComponent() {
    }
    TreeNodeComponent.prototype.ngOnInit = function () {
    };
    return TreeNodeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_node_model__["Node"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_node_model__["Node"]) === "function" && _a || Object)
], TreeNodeComponent.prototype, "node", void 0);
TreeNodeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
        selector: 'tree-node',
        template: __webpack_require__(622),
        styles: [__webpack_require__(617)]
    }),
    __metadata("design:paramtypes", [])
], TreeNodeComponent);

var _a;
//# sourceMappingURL=tree-node.component.js.map

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

//# sourceMappingURL=node.model.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeCreationUtils; });
var TreeCreationUtils = (function () {
    function TreeCreationUtils() {
    }
    /**
     * Creates  sample tree using hardcoded values.
     * @returns {{value: string, children: (Node|Node)[], indentation: number}}
     */
    TreeCreationUtils.createSampleTree = function () {
        var node6 = { value: 'node6', children: [], level: 3 };
        var node7 = { value: 'node7', children: [], level: 3 };
        var node2 = { value: 'node2', children: [], level: 2 };
        var node3 = { value: 'node3', children: [], level: 2 };
        var node4 = { value: 'node4', children: [node6, node7], level: 2 };
        var node5 = { value: 'node5', children: [], level: 2 };
        var node0 = { value: 'node0', children: [node2], level: 1 };
        var node1 = { value: 'node1', children: [node3, node4, node5], level: 1 };
        var rootNode = { value: 'Root', children: [node0, node1], level: 0 };
        return rootNode;
    };
    return TreeCreationUtils;
}());

//# sourceMappingURL=tree-creation.utils.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)();
// imports


// module
exports.push([module.i, ".tree-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.tree-container .builder-type-title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: left;\n  width: 100%;\n}\n.tree-container .general-button {\n  margin: 10px;\n}\n.tree-container .buttons-line {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.tree-container .nodes-container {\n  width: 600px;\n}\n.tree-container .nodes-container .node-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 40px;\n}\n.tree-container .nodes-container .node-container .node-name {\n  margin-right: 10px;\n  height: 40px;\n  line-height: 40px;\n  font-size: 18px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)();
// imports


// module
exports.push([module.i, ".dialog-container {\n  width: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: white;\n  padding: 20px;\n  margin: -24px;\n}\n.dialog-container .form-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.dialog-container .buttons-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.dialog-container .buttons-container .filler {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.dialog-container .buttons-container .cancel-button {\n  margin-right: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n  <tree-container></tree-container>\n</div>\n"

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports = "<div class=\"tree-container\">\n  <div class=\"builder-type-title\">\n    Current builder type: {{serviceType}}\n  </div>\n  <div class=\"buttons-line\">\n    <button md-raised-button color=\"warn\" (click)=\"toggleBuilder()\" class=\"general-button\">Toggle builder!</button>\n    <button md-raised-button color=\"primary\" (click)=\"generateStartingTree()\" class=\"general-button\">Generate tree!</button>\n    <button md-raised-button color=\"primary\" (click)=\"addNewNode()\" class=\"general-button\">Start new tree!</button>\n  </div>\n\n  <div class=\"nodes-container\">\n    <div *ngFor=\"let node of nodesArray, let i = index\" [ngStyle]=\"{marginLeft: node.level * 30 + 'px'}\" class=\"node-container\">\n      <div class=\"node-name\">- {{node.value}}</div>\n      <button md-icon-button (click)=\"addNewNode(node)\" mdTooltip=\"Add child!\"><md-icon>add</md-icon></button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

module.exports = "<div>\n  {{node?.value}}\n</div>\n"

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-container\">\n  <form #nodeForm=\"ngForm\" class=\"form-container\">\n    <md-input-container dividerColor=\"primary\">\n      <input name=\"nameOfNode\" mdInput [(ngModel)]=\"nodeName\" placeholder=\"Node name\" required >\n    </md-input-container>\n    <div class=\"buttons-container\">\n      <div class=\"filler\"></div>\n      <button md-raised-button (click)=\"dialogRef.close()\" class=\"cancel-button\">CANCEL</button>\n      <button md-raised-button (click)=\"dialogRef.close(nodeName)\" class=\"add-button\" color=\"primary\" [disabled]=\"!nodeForm.valid\">ADD NODE</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(409);


/***/ })

},[673]);
//# sourceMappingURL=main.bundle.js.map