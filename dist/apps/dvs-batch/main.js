/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/dvs-batch/src/dvs-batch.controller.ts":
/*!****************************************************!*\
  !*** ./apps/dvs-batch/src/dvs-batch.controller.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DvsBatchController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const dvs_batch_service_1 = __webpack_require__(/*! ./dvs-batch.service */ "./apps/dvs-batch/src/dvs-batch.service.ts");
let DvsBatchController = class DvsBatchController {
    constructor(dvsBatchService) {
        this.dvsBatchService = dvsBatchService;
    }
    getHello() {
        return this.dvsBatchService.getHello();
    }
};
exports.DvsBatchController = DvsBatchController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], DvsBatchController.prototype, "getHello", null);
exports.DvsBatchController = DvsBatchController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof dvs_batch_service_1.DvsBatchService !== "undefined" && dvs_batch_service_1.DvsBatchService) === "function" ? _a : Object])
], DvsBatchController);


/***/ }),

/***/ "./apps/dvs-batch/src/dvs-batch.module.ts":
/*!************************************************!*\
  !*** ./apps/dvs-batch/src/dvs-batch.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DvsBatchModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const dvs_batch_controller_1 = __webpack_require__(/*! ./dvs-batch.controller */ "./apps/dvs-batch/src/dvs-batch.controller.ts");
const dvs_batch_service_1 = __webpack_require__(/*! ./dvs-batch.service */ "./apps/dvs-batch/src/dvs-batch.service.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let DvsBatchModule = class DvsBatchModule {
};
exports.DvsBatchModule = DvsBatchModule;
exports.DvsBatchModule = DvsBatchModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot()],
        controllers: [dvs_batch_controller_1.DvsBatchController],
        providers: [dvs_batch_service_1.DvsBatchService],
    })
], DvsBatchModule);


/***/ }),

/***/ "./apps/dvs-batch/src/dvs-batch.service.ts":
/*!*************************************************!*\
  !*** ./apps/dvs-batch/src/dvs-batch.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DvsBatchService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let DvsBatchService = class DvsBatchService {
    getHello() {
        return 'Welcome to DVS-batch server!!';
    }
};
exports.DvsBatchService = DvsBatchService;
exports.DvsBatchService = DvsBatchService = __decorate([
    (0, common_1.Injectable)()
], DvsBatchService);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!************************************!*\
  !*** ./apps/dvs-batch/src/main.ts ***!
  \************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const dvs_batch_module_1 = __webpack_require__(/*! ./dvs-batch.module */ "./apps/dvs-batch/src/dvs-batch.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(dvs_batch_module_1.DvsBatchModule);
    await app.listen(process.env.PORT_BATCH ?? 3000);
}
bootstrap();

})();

/******/ })()
;