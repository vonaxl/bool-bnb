/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\resources\\js\\app.js: Unexpected token (102:0)\n\n\u001b[0m \u001b[90m 100 | \u001b[39m                ajaxCall(query)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 101 | \u001b[39m            }\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 102 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 103 | \u001b[39m        }\u001b[33m,\u001b[39m \u001b[35m1300\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m 104 | \u001b[39m    )\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 105 | \u001b[39m}\u001b[0m\n    at Parser.raise (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:7017:17)\n    at Parser.unexpected (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:8395:16)\n    at Parser.parseExprAtom (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:9673:20)\n    at Parser.parseExprSubscripts (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:9259:23)\n    at Parser.parseMaybeUnary (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:9239:21)\n    at Parser.parseExprOps (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:9109:23)\n    at Parser.parseMaybeConditional (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:9082:23)\n    at Parser.parseMaybeAssign (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:9037:21)\n    at Parser.parseExpression (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:8989:23)\n    at Parser.parseStatementContent (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:10819:23)\n    at Parser.parseStatement (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:10690:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:11264:25)\n    at Parser.parseBlockBody (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:11251:10)\n    at Parser.parseBlock (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:11235:10)\n    at Parser.parseFunctionBody (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:10252:24)\n    at Parser.parseFunctionBodyAndFinish (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:10222:10)\n    at C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:11394:12\n    at Parser.withTopicForbiddingContext (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:10565:14)\n    at Parser.parseFunction (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:11393:10)\n    at Parser.parseFunctionExpression (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:9714:17)\n    at Parser.parseExprAtom (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:9622:21)\n    at Parser.parseExprSubscripts (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:9259:23)\n    at Parser.parseMaybeUnary (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:9239:21)\n    at Parser.parseExprOps (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:9109:23)\n    at Parser.parseMaybeConditional (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:9082:23)\n    at Parser.parseMaybeAssign (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:9037:21)\n    at Parser.parseExprListItem (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:10327:18)\n    at Parser.parseCallExpressionArguments (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:9440:22)\n    at Parser.parseSubscript (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:9346:31)\n    at Parser.parseSubscripts (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:9276:19)\n    at Parser.parseExprSubscripts (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:9265:17)\n    at Parser.parseMaybeUnary (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:9239:21)\n    at Parser.parseExprOps (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:9109:23)\n    at Parser.parseMaybeConditional (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:9082:23)\n    at Parser.parseMaybeAssign (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:9037:21)\n    at Parser.parseExprListItem (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\@babel\\parser\\lib\\index.js:10327:18)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\n\r\n@import \"home\";\r\n             ^\r\n      Expected \"{\".\n   ╷\n17 │ @import \"home\";\r\n   │               ^\n   ╵\n  stdin 17:15  root stylesheet\r\n      in C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\resources\\sass\\app.scss (line 17, column 15)\n    at C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass-loader\\dist\\index.js:89:7\n    at Function.call$2 (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:56230:16)\n    at _render_closure1.call$2 (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:34691:12)\n    at _RootZone.runBinary$3$3 (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:20227:18)\n    at _RootZone.runBinary$3 (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:20231:19)\n    at _FutureListener.handleError$1 (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:18696:19)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:18984:40)\n    at Object._Future__propagateToListeners (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:3500:88)\n    at _Future._completeError$2 (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:18820:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:18219:12)\n    at Object._asyncRethrow (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:3256:17)\n    at C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:10615:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:3279:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:18240:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:18232:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:20227:18)\n    at _RootZone.runBinary$3 (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:20231:19)\n    at _FutureListener.handleError$1 (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:18696:19)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:18984:40)\n    at Object._Future__propagateToListeners (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:3500:88)\n    at _Future._completeError$2 (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:18820:9)\n    at _Future__asyncCompleteError_closure.call$0 (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:18910:18)\n    at Object._microtaskLoop (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:3550:21)\n    at StaticClosure._startMicrotaskLoop (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:3556:11)\n    at _AsyncRun__scheduleImmediateJsOverride_internalCallback.call$0 (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:18141:21)\n    at invokeClosure (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:1360:26)\n    at Immediate.<anonymous> (C:\\Users\\Axl\\Documents\\GitHub\\bool-bnb\\node_modules\\sass\\sass.dart.js:1381:18)\n    at processImmediate (internal/timers.js:439:21)");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Axl\Documents\GitHub\bool-bnb\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\Users\Axl\Documents\GitHub\bool-bnb\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });