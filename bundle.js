/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_background_image_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_background_image_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100vh;\n}\n\n.hidden {\n  display: none !important;\n  opacity: 0 !important;\n}\n\n.welcome, .please-login, #newTripButton {\n  margin-left: 3.4%;\n}\n\n.login-form, .new-trip-form, .successful-post {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding-top: 3%;\n  padding-bottom: 3%;\n  padding-left: 10%;\n  padding-right: 10%;\n  box-shadow: 10px 10px 12px -1px rgba(0, 0, 0, 0.6), -10px 10px 15px -1px rgba(255, 255, 255, 0.8);\n  background-color: rgba(240, 240, 240, 0.75);\n  border: 2px solid rgb(99, 91, 91);\n  border-radius: 10px;\n}\n\n.successful-post {\n  text-align: center;\n}\n\n.blur-background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.5);\n  backdrop-filter: blur(8px);\n}\n\n.login-inputs {\n  margin-bottom: 30px;\n  font-size: 1.5em;\n  padding-left: 2%;\n}\n\n.new-trip-inputs {\n  margin-bottom: 20px;\n  font-size: 1.3em;\n}\n\n.login-labels, .new-trip-labels {\n  font-size: larger;\n}\n\n#loginButton, #newTripButton, #submitRequest, #closePopup, #seeEstimate,\n#allDoneButton {\n  padding-left: 15%;\n  padding-right: 15%;\n  border: 1px solid black;\n  background-color: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n  padding-top: 3%;\n  padding-bottom: 3%;\n}\n\n#newTripButton, #submitRequest, #closePopup, #seeEstimate,\n#allDoneButton {\n  font-size: 1.2em;\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-top: 1%;\n  padding-bottom: 1%;\n}\n\n#closePopup, #seeEstimate, #submitRequest, #allDoneButton {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n#seeEstimate {\n  margin-right: 20%;\n}\n\n#closePopup {\n  background-color: red;\n  color: #fff;\n}\n\n#loginButton:active, #newTripButton:active, #submitRequest:active, #seeEstimate:active,\n#allDoneButton:active {\n  background-color: #000;\n  color: #fff;\n  outline: none;\n}\n\n#closePopup:active {\n  background-color: #fff;\n  color: red;\n  outline: none;\n}\n\n.login-error, .new-trip-error, .post-response {\n  color: red;\n  font-weight: 400;\n  text-align: center;\n}\n\n.total-spent, .show-estimate {\n  font-weight: 600;\n}\n\n.new-trip-error, .post-response, .login-error {\n  font-size: 1.4em;\n  margin-top: 0px;\n}\n\n.new-trip-header, .show-estimate, .dash-header {\n  font-size: 1.5em;\n}\n\n.dashboard, .submit-close {\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.past-trips, .pending-trips {\n  width: 40vw;\n  height: 60vh;\n  padding-left: 2%;\n  padding-right: 2%;\n  overflow: auto;\n  font-size: 1.2em;\n  margin-top: 2.5%;\n  box-shadow: 10px 10px 12px -1px rgba(0, 0, 0, 0.6), -10px 10px 15px -1px rgba(255, 255, 255, 0.8);\n  background-color: rgba(240, 240, 240, 0.75);\n  border: 2px solid rgb(99, 91, 91);\n  border-radius: 10px;\n}\n\n.trips-area {\n  border-top: 2px solid black;\n  padding-top: 3%;\n}\n\n.plane-icon {\n  position: absolute;\n  width: 15%;\n  transform: rotate(18deg);\n  top: 10%;\n  left: 20%;\n  opacity: 80%;\n}\n\n@keyframes planeMovement {\n  0% {\n    left: 20%;\n  }\n  10% {\n    transform: rotate(18deg);\n  }\n  50% {\n    top: 10%;\n  }\n  100% {\n    transform: rotate(-5deg);\n    top: 0;\n    left: 80%;\n  }\n}\n:focus {\n  outline: 4px solid #007bff;\n}\n\n.dest-image {\n  width: 105%;\n}", "",{"version":3,"sources":["webpack://./src/css/styles.scss","webpack://./src/css/_mixins.scss"],"names":[],"mappings":"AAGA;EACE,yDAAA;EACA,sBAAA;EACA,4BAAA;EACA,aAAA;AAFF;;AAKA;EACE,wBAAA;EACA,qBAAA;AAFF;;AAKA;EACE,iBAAA;AAFF;;AAKA;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;EC1BE,eAAA;EACA,kBAAA;EAIA,iBAAA;EACA,kBAAA;EAIA,iGAAA;EAEA,2CAAA;EACA,iCAAA;EACA,mBAAA;ADkBJ;;AAAA;EACE,kBAAA;AAGF;;AAAA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,oCAAA;EACA,0BAAA;AAGF;;AAAA;EACE,mBAAA;EACA,gBAAA;EACA,gBAAA;AAGF;;AAAA;EACE,mBAAA;EACA,gBAAA;AAGF;;AAAA;EACE,iBAAA;AAGF;;AAAA;;EAEE,iBAAA;EACA,kBAAA;EACA,uBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;ECpEE,eAAA;EACA,kBAAA;ADwEJ;;AADA;;EAEE,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;AAIF;;AADA;EC5EI,iBAAA;EACA,kBAAA;ADiFJ;;AAFA;EACE,iBAAA;AAKF;;AAFA;EACE,qBAAA;EACA,WAAA;AAKF;;AAFA;;EAEE,sBAAA;EACA,WAAA;EACA,aAAA;AAKF;;AAFA;EACE,sBAAA;EACA,UAAA;EACA,aAAA;AAKF;;AAFA;EACE,UAAA;EACA,gBAAA;EACA,kBAAA;AAKF;;AAFA;EACE,gBAAA;AAKF;;AAFA;EACE,gBAAA;EACA,eAAA;AAKF;;AAFA;EACE,gBAAA;AAKF;;AAFA;EC5GI,aAAA;EACA,6BAAA;ADkHJ;;AAHA;EACE,WAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EC/HE,iGAAA;EAEA,2CAAA;EACA,iCAAA;EACA,mBAAA;ADqIJ;;AANA;EACE,2BAAA;EACA,eAAA;AASF;;AANA;EACE,kBAAA;EACA,UAAA;EACA,wBAAA;EACA,QAAA;EACA,SAAA;EACA,YAAA;AASF;;AANA;EACE;IACE,SAAA;EASF;EAPA;IACE,wBAAA;EASF;EAPA;IACE,QAAA;EASF;EAPA;IACE,wBAAA;IACA,MAAA;IACA,SAAA;EASF;AACF;AANA;EACE,0BAAA;AAQF;;AALA;EACE,WAAA;AAQF","sourcesContent":["@import 'variables';\n@import 'mixins';\n\nbody {\n  background-image: url('../images/background-image.png');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100vh;\n}\n\n.hidden {\n  display: none !important;\n  opacity: 0 !important;\n}\n\n.welcome, .please-login, #newTripButton {\n  margin-left: 3.4%;\n}\n\n.login-form, .new-trip-form, .successful-post {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  @include padding-height3();\n  @include padding-width10();\n  @include box-styling();\n}\n\n.successful-post {\n  text-align: center;\n}\n\n.blur-background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.5);\n  backdrop-filter: blur(8px);\n}\n\n.login-inputs {\n  margin-bottom: 30px;\n  font-size: 1.5em;\n  padding-left: 2%;\n}\n\n.new-trip-inputs {\n  margin-bottom: 20px;\n  font-size: 1.3em;\n}\n\n.login-labels, .new-trip-labels {\n  font-size: larger;\n}\n\n#loginButton, #newTripButton, #submitRequest, #closePopup, #seeEstimate, \n#allDoneButton {\n  padding-left: 15%;\n  padding-right: 15%;\n  border: 1px solid black;\n  background-color: #fff;\n  border-radius: 5px;\n  cursor: pointer;\n  @include padding-height3();\n}\n\n#newTripButton, #submitRequest, #closePopup, #seeEstimate, \n#allDoneButton {\n  font-size: 1.2em;\n  padding-left: 5%;\n  padding-right: 5%;\n  padding-top: 1%;\n  padding-bottom: 1%;\n}\n\n#closePopup, #seeEstimate, #submitRequest, #allDoneButton {\n  @include padding-width10();\n}\n\n#seeEstimate {\n  margin-right: 20%;\n}\n\n#closePopup {\n  background-color: red;\n  color: #fff;\n}\n\n#loginButton:active, #newTripButton:active, #submitRequest:active, #seeEstimate:active, \n#allDoneButton:active {\n  background-color: #000;\n  color: #fff;\n  outline: none;\n}\n\n#closePopup:active {\n  background-color: #fff;\n  color: red;\n  outline: none;\n}\n\n.login-error, .new-trip-error, .post-response {\n  color: red;\n  font-weight: 400;\n  text-align: center;\n}\n\n.total-spent, .show-estimate {\n  font-weight: 600;\n}\n\n.new-trip-error, .post-response, .login-error {\n  font-size: 1.4em;\n  margin-top: 0px;\n}\n\n.new-trip-header, .show-estimate, .dash-header {\n  font-size: 1.5em;\n}\n\n.dashboard, .submit-close {\n  @include display-flex();\n}\n\n.past-trips, .pending-trips {\n  width: 40vw;\n  height: 60vh;\n  padding-left: 2%;\n  padding-right: 2%;\n  overflow: auto;\n  font-size: 1.2em;\n  margin-top: 2.5%;\n  @include box-styling();\n}\n\n.trips-area {\n  border-top: 2px solid black;\n  padding-top: 3%;\n}\n\n.plane-icon {\n  position: absolute;\n  width: 15%;\n  transform: rotate(18deg);\n  top: 10%;\n  left: 20%;\n  opacity: 80%;\n}\n\n@keyframes planeMovement {\n  0% {\n    left: 20%;\n  }\n  10% {\n    transform: rotate(18deg);\n  }\n  50% {\n    top: 10%;\n  }\n  100% {\n    transform: rotate(-5deg);\n    top: 0;\n    left: 80%;\n  }\n}\n\n:focus {\n  outline: 4px solid #007bff;\n}\n\n.dest-image {\n  width: 105%;\n}","@mixin padding-height3() {\n    padding-top: 3%;\n    padding-bottom: 3%;\n}\n\n@mixin padding-width10() {\n    padding-left: 10%;\n    padding-right: 10%;\n}\n\n@mixin box-styling() {\n    box-shadow: 10px 10px 12px -1px rgba(0, 0, 0, 0.6),\n    -10px 10px 15px -1px rgba(255, 255, 255, 0.8);\n    background-color: rgba(240, 240, 240, 0.75);\n    border: 2px solid rgb(99, 91, 91);\n    border-radius: 10px;\n}\n\n@mixin display-flex() {\n    display: flex;\n    justify-content: space-evenly;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/background-image.png");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/airplane-icon.png");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchDestinations: () => (/* binding */ fetchDestinations),
/* harmony export */   fetchTraveler: () => (/* binding */ fetchTraveler),
/* harmony export */   fetchTrips: () => (/* binding */ fetchTrips),
/* harmony export */   postNewTrip: () => (/* binding */ postNewTrip)
/* harmony export */ });
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);


function fetchTraveler(id, userData) {
    return fetch(`https://travel-server-9d64ba990de5.herokuapp.com/api/v1/travelers/${id}`)
        .then(response => {
            if(!response.ok) {
                throw new Error('There was an error getting your account information. Please try again later.')
            }
            return response.json();
        })
        .then(data => userData = data)
        .catch(err => {
            _domUpdates__WEBPACK_IMPORTED_MODULE_0__.welcomeMessage.innerText = err.message;
            _domUpdates__WEBPACK_IMPORTED_MODULE_0__.welcomeMessage.style.color = 'red';
        });
}

function fetchTrips(tripsData) {
    return fetch('https://travel-server-9d64ba990de5.herokuapp.com/api/v1/trips')
        .then(response => {
            if(!response.ok) {
                throw new Error('There was an error getting your account information. Please try again later.')
            }
            return response.json();
        })
        .then(data => tripsData = data)
        .catch(err => {
            _domUpdates__WEBPACK_IMPORTED_MODULE_0__.welcomeMessage.innerText = err.message;
            _domUpdates__WEBPACK_IMPORTED_MODULE_0__.welcomeMessage.style.color = 'red';
        });
}

function fetchDestinations(destinationsData) {
    return fetch('https://travel-server-9d64ba990de5.herokuapp.com/api/v1/destinations')
        .then(response => {
            if(!response.ok) {
                throw new Error('There was an error getting your account information. Please try again later.')
            }
            return response.json();
        })
        .then(data => destinationsData = data)
        .catch(err => {
            _domUpdates__WEBPACK_IMPORTED_MODULE_0__.welcomeMessage.innerText = err.message;
            _domUpdates__WEBPACK_IMPORTED_MODULE_0__.welcomeMessage.style.color = 'red';
        });
}

function postNewTrip(allTrips, myID) {
    return fetch('https://travel-server-9d64ba990de5.herokuapp.com/api/v1/trips', {
        method: 'POST',
        body: JSON.stringify({
            id: (allTrips.trips.length + 1),
            userID: parseInt(myID),
            destinationID: parseInt(_domUpdates__WEBPACK_IMPORTED_MODULE_0__.destinationForm.value),
            travelers: parseInt(_domUpdates__WEBPACK_IMPORTED_MODULE_0__.travelersForm.value),
            date: _domUpdates__WEBPACK_IMPORTED_MODULE_0__.dateForm.value.replaceAll('-', '/'),
            duration: parseInt(_domUpdates__WEBPACK_IMPORTED_MODULE_0__.durationForm.value),
            status: 'pending',
            suggestedActivities: []
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        if(!response.ok) {
            throw new Error('There was an issue with submitting this request. Please try again later.')
        }
        return response.json();
    })
    .then(data => {
        _domUpdates__WEBPACK_IMPORTED_MODULE_0__.pendingTripsData.innerHTML = '';
        (0,_domUpdates__WEBPACK_IMPORTED_MODULE_0__.fetchAllData)(parseInt(sessionStorage.getItem('user')));

        _domUpdates__WEBPACK_IMPORTED_MODULE_0__.newTripHeader.innerText = `Your Trip Request Has Been Submitted!`
        _domUpdates__WEBPACK_IMPORTED_MODULE_0__.postResponse.innerText = `Your trip request is under review. 
    
        For your reference, the id number is ${data.newTrip.id}. It is safe to leave this page.`
    })
    .catch(err => _domUpdates__WEBPACK_IMPORTED_MODULE_0__.newTripHeader.innerText = `There was an issue with this request. Please try again later.`);
}



/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allDoneButton: () => (/* binding */ allDoneButton),
/* harmony export */   allDoneWithForm: () => (/* binding */ allDoneWithForm),
/* harmony export */   blurBackground: () => (/* binding */ blurBackground),
/* harmony export */   body: () => (/* binding */ body),
/* harmony export */   checkLogin: () => (/* binding */ checkLogin),
/* harmony export */   closeForm: () => (/* binding */ closeForm),
/* harmony export */   closePopup: () => (/* binding */ closePopup),
/* harmony export */   dashboard: () => (/* binding */ dashboard),
/* harmony export */   dateForm: () => (/* binding */ dateForm),
/* harmony export */   destinationForm: () => (/* binding */ destinationForm),
/* harmony export */   destinationImage: () => (/* binding */ destinationImage),
/* harmony export */   destinationSelect: () => (/* binding */ destinationSelect),
/* harmony export */   destinations: () => (/* binding */ destinations),
/* harmony export */   durationForm: () => (/* binding */ durationForm),
/* harmony export */   estimateFormCheck: () => (/* binding */ estimateFormCheck),
/* harmony export */   fetchAllData: () => (/* binding */ fetchAllData),
/* harmony export */   getPageReload: () => (/* binding */ getPageReload),
/* harmony export */   getTripCost: () => (/* binding */ getTripCost),
/* harmony export */   getUserID: () => (/* binding */ getUserID),
/* harmony export */   loginButton: () => (/* binding */ loginButton),
/* harmony export */   loginError: () => (/* binding */ loginError),
/* harmony export */   loginSection: () => (/* binding */ loginSection),
/* harmony export */   myTrips: () => (/* binding */ myTrips),
/* harmony export */   newTripButton: () => (/* binding */ newTripButton),
/* harmony export */   newTripError: () => (/* binding */ newTripError),
/* harmony export */   newTripForm: () => (/* binding */ newTripForm),
/* harmony export */   newTripHeader: () => (/* binding */ newTripHeader),
/* harmony export */   password: () => (/* binding */ password),
/* harmony export */   pastTripsData: () => (/* binding */ pastTripsData),
/* harmony export */   pendingTripsData: () => (/* binding */ pendingTripsData),
/* harmony export */   planeIcon: () => (/* binding */ planeIcon),
/* harmony export */   pleaseLogin: () => (/* binding */ pleaseLogin),
/* harmony export */   postResponse: () => (/* binding */ postResponse),
/* harmony export */   seeEstimate: () => (/* binding */ seeEstimate),
/* harmony export */   showConfirmation: () => (/* binding */ showConfirmation),
/* harmony export */   showDestinationOptions: () => (/* binding */ showDestinationOptions),
/* harmony export */   showEstimate: () => (/* binding */ showEstimate),
/* harmony export */   showPastTrips: () => (/* binding */ showPastTrips),
/* harmony export */   showTotalSpent: () => (/* binding */ showTotalSpent),
/* harmony export */   submitFormCheck: () => (/* binding */ submitFormCheck),
/* harmony export */   submitRequest: () => (/* binding */ submitRequest),
/* harmony export */   successfulPost: () => (/* binding */ successfulPost),
/* harmony export */   totalForYear: () => (/* binding */ totalForYear),
/* harmony export */   travelersForm: () => (/* binding */ travelersForm),
/* harmony export */   trips: () => (/* binding */ trips),
/* harmony export */   user: () => (/* binding */ user),
/* harmony export */   username: () => (/* binding */ username),
/* harmony export */   welcomeMessage: () => (/* binding */ welcomeMessage),
/* harmony export */   welcomeUser: () => (/* binding */ welcomeUser)
/* harmony export */ });
/* harmony import */ var _fetchRequests_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _travelerInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);




const loginButton = document.querySelector('#loginButton');
const loginSection = document.querySelector('.login-form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const loginError = document.querySelector('.login-error');
const pleaseLogin = document.querySelector('.please-login');
const dashboard = document.querySelector('.dashboard');
const welcomeMessage = document.querySelector('.welcome');
const pastTripsData = document.querySelector('.past-trips-data');
const pendingTripsData = document.querySelector('.pending-trips-data');
const newTripButton = document.querySelector('#newTripButton');
const totalSpent = document.querySelector('.total-spent');
const destinationSelect = document.querySelector('#destination');
const submitRequest = document.querySelector('#submitRequest');
const closePopup = document.querySelector('#closePopup');
const dateForm = document.querySelector('#date');
const durationForm = document.querySelector('#duration');
const travelersForm = document.querySelector('#travelers');
const destinationForm = document.querySelector('#destination');
const newTripForm = document.querySelector('.new-trip-form');
const blurBackground = document.querySelector('.blur-background');
const newTripError = document.querySelector('.new-trip-error');
const seeEstimate = document.querySelector('#seeEstimate');
const showEstimate = document.querySelector('.show-estimate');
const successfulPost = document.querySelector('.successful-post');
const allDoneButton = document.querySelector('#allDoneButton');
const postResponse = document.querySelector('.post-response');
const planeIcon = document.querySelector('.plane-icon');
const newTripHeader = document.querySelector('.new-trip-header');
const destinationImage = document.querySelector('.destination-image');
const body = document.querySelector('body');

let user, trips, destinations, myTrips, totalForYear;

window.addEventListener('load', () => {
    if(sessionStorage.getItem('user')) {
        getPageReload();
        fetchAllData(parseInt(sessionStorage.getItem('user')));
    } else {
        body.style.opacity = '1';
    }
});

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    checkLogin();
});

newTripButton.addEventListener('click', () => {
    newTripForm.classList.remove('hidden');
    blurBackground.classList.remove('hidden');
    showDestinationOptions(destinations);
});

seeEstimate.addEventListener('click', (e) => {
    estimateFormCheck(e);
});

closePopup.addEventListener('click', (e) => {
    closeForm(e);
});

submitRequest.addEventListener('click', (e) => {
    e.preventDefault();
    submitFormCheck();
});

allDoneButton.addEventListener('click', (e) => {
    e.preventDefault();
    allDoneWithForm();
});

function checkLogin() {
    if(password.value.trim().length < 1 || username.value.trim().length < 1 || 
        password.value !== 'travel' || !username.value.includes('traveler')) {
        loginError.innerText = 'Incorrect Username or Password. Please try again.';
    } else {
        getUserID();
    }
}

function getUserID() {
    let userID = parseInt(username.value.split('').slice(8).join(''));

    if(!userID || userID > 50) {
        loginError.innerText = 'Incorrect Username or Password. Please try again.'
    } else {
        planeIcon.style.animation = 'planeMovement 2s linear forwards'
        loginSection.classList.add('hidden');
        dashboard.classList.remove('hidden');
        newTripButton.classList.remove('hidden');
        sessionStorage.setItem('user', userID);
        fetchAllData(parseInt(sessionStorage.getItem('user')));
    }
}

function fetchAllData(id) {
    Promise.all([(0,_fetchRequests_js__WEBPACK_IMPORTED_MODULE_0__.fetchTraveler)(id), (0,_fetchRequests_js__WEBPACK_IMPORTED_MODULE_0__.fetchTrips)(), (0,_fetchRequests_js__WEBPACK_IMPORTED_MODULE_0__.fetchDestinations)()]).then(
        ([traveler, allTrips, allDestinations]) => {
            user = traveler;
            trips = allTrips;
            destinations = allDestinations;
            if(user && trips && destinations) {
                myTrips = (0,_travelerInfo_js__WEBPACK_IMPORTED_MODULE_1__.getTravelerTrips)(trips, id);
                (0,_travelerInfo_js__WEBPACK_IMPORTED_MODULE_1__.showMyTripDestinations)(myTrips, destinations);
                (0,_travelerInfo_js__WEBPACK_IMPORTED_MODULE_1__.getSingleTripCost)(myTrips, destinations);
                totalForYear = (0,_travelerInfo_js__WEBPACK_IMPORTED_MODULE_1__.getTotalCost)(myTrips, destinations, 'approved', '2022');
                showTotalSpent(totalForYear, '2022');
                showPastTrips(myTrips);
                welcomeUser(user);
            } else {
                welcomeMessage.innerText = 'Apologies, we are having issues getting your information. Please try again later.';
                welcomeMessage.style.color = 'red';
            }
        }
    );
}

function showTotalSpent(total, year) {
    totalSpent.innerText = `Total Spent This Year (${year}): $${total}`
}

function showPastTrips(myTrips) {
    myTrips.forEach((trip) => {
        if(trip.status === 'approved') {
            pastTripsData.insertAdjacentHTML('beforeend',
            `<p class="trips-area"><b>Destination:</b> ${trip.destination}</p>
            <p><b>Date of first night:</b> ${trip.date}</p>
            <p><b>Number of nights:</b> ${trip.duration} nights</p>
            <p><b>Number of travelers:</b> ${trip.travelers} travelers</p>
            <p><b>Total Cost:</b> $${trip.total}</p>
            `);
        } else if(trip.status === 'pending') {
            pendingTripsData.insertAdjacentHTML('beforeend',
            `<p class="trips-area"><b>Destination:</b> ${trip.destination}</p>
            <p><b>Date of first night:</b> ${trip.date}</p>
            <p><b>Number of nights:</b> ${trip.duration} nights</p>
            <p><b>Number of travelers:</b> ${trip.travelers} travelers</p>
            <p><b>Total Cost:</b> $${trip.total}</p>
            `);
        }
    });
}

function showDestinationOptions(allDestinations) {
    allDestinations.destinations.sort((a, b) => {
        return a.destination.localeCompare(b.destination);
    }).forEach((dest) => {
        let option = document.createElement('option');
        option.value = dest.id;
        option.text = dest.destination;
        destinationSelect.add(option);
    });
}

function welcomeUser(userInfo) {
    welcomeMessage.innerText = `Welcome ${userInfo.name}`;
    if(userInfo.travelerType === 'relaxer') {
        pleaseLogin.innerText = `User ID: ${userInfo.id}
        Type: ${userInfo.travelerType.charAt(0).toUpperCase() 
        + userInfo.travelerType.slice(1)} 😴`
    } else if(userInfo.travelerType === 'thrill-seeker'){
        pleaseLogin.innerText = `User ID: ${userInfo.id}
        Type: ${userInfo.travelerType.charAt(0).toUpperCase() 
        + userInfo.travelerType.slice(1)} 🎢`
    } else if(userInfo.travelerType === 'shopper'){
        pleaseLogin.innerText = `User ID: ${userInfo.id}
        Type: ${userInfo.travelerType.charAt(0).toUpperCase() 
        + userInfo.travelerType.slice(1)} 🛍`
    } else if(userInfo.travelerType === 'photographer'){
        pleaseLogin.innerText = `User ID: ${userInfo.id}
        Type: ${userInfo.travelerType.charAt(0).toUpperCase() 
        + userInfo.travelerType.slice(1)} 📸`
    } else if(userInfo.travelerType === 'foodie'){
        pleaseLogin.innerText = `User ID: ${userInfo.id}
        Type: ${userInfo.travelerType.charAt(0).toUpperCase() 
        + userInfo.travelerType.slice(1)} 🌮`
    } else {
        pleaseLogin.innerText = `User ID: ${userInfo.id}
        Type: ${userInfo.travelerType.charAt(0).toUpperCase() 
        + userInfo.travelerType.slice(1)} 🛫`
    }
}
function closeForm(e) {
    e.preventDefault();
    newTripForm.classList.add('hidden');
    blurBackground.classList.add('hidden');
    submitRequest.classList.add('hidden');
    dateForm.value = '';
    durationForm.value = '';
    travelersForm.value = '';
    destinationForm.value = '';
    newTripError.innerText = '';
    showEstimate.innerText = '';
}

function estimateFormCheck(e) {
    e.preventDefault();
    newTripError.innerText = '';
    showEstimate.innerText = '';
    submitRequest.classList.add('hidden');

    if(dateForm.value.length < 1 || parseInt(durationForm.value) === 0 || 
        parseInt(travelersForm.value) === 0 || destinationForm.value.length < 1 || 
        durationForm.value.trim().length < 1 || travelersForm.value.trim().length < 1) {
        newTripError.innerText = 'Please make sure to fill out all fields.';
    } else {
        let total = getTripCost(destinations);
        showEstimate.innerText = `Estimated Total: $${total}`;
        submitRequest.classList.remove('hidden');
    }
}

function submitFormCheck() {
    if(dateForm.value.length < 1 || parseInt(durationForm.value) === 0 || 
        parseInt(travelersForm.value) === 0 || destinationForm.value.length < 1 || 
        durationForm.value.trim().length < 1 || travelersForm.value.trim().length < 1) {
        newTripError.innerText = `Please make sure to fill out all fields.`;
        showEstimate.innerText = '';
        submitRequest.classList.add('hidden');
    } else {
        (0,_fetchRequests_js__WEBPACK_IMPORTED_MODULE_0__.postNewTrip)(trips, parseInt(sessionStorage.getItem('user')));
        showConfirmation(destinations, destinationForm);
    }
}

function getTripCost(allDestinations) {
    let foundDestination = allDestinations.destinations.find((dest) => {
        return dest.id === parseInt(destinationForm.value);
    })
    return Math.round((((foundDestination.estimatedLodgingCostPerDay * durationForm.value) + 
    (foundDestination.estimatedFlightCostPerPerson * travelersForm.value)) * (1.1)));
}

function showConfirmation(allDest, myDest) {
    newTripForm.classList.add('hidden');
    successfulPost.classList.remove('hidden');

    let foundDestination = allDest.destinations.find((dest) => {
        return dest.id === parseInt(myDest.value);
    })
    destinationImage.innerHTML = `<img class="dest-image" src=${foundDestination.image} alt="Picture of your next destination.">`;
}

function allDoneWithForm() {
    successfulPost.classList.add('hidden');
    blurBackground.classList.add('hidden');
    submitRequest.classList.add('hidden');
    dateForm.value = '';
    durationForm.value = '';
    travelersForm.value = '';
    destinationForm.value = '';
    postResponse.innerText = '';
    newTripHeader.innerText = 'Your Trip Request..';
    showEstimate.innerText = '';
    destinationImage.innerHTML = '';
}

function getPageReload() {
    loginSection.classList.add('hidden');
    dashboard.classList.remove('hidden');
    newTripButton.classList.remove('hidden');
    planeIcon.style.left = '80%';
    planeIcon.style.top = '0%';
    planeIcon.style.transform = 'rotate(-5deg)';
    body.style.opacity = '1';
}





/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSingleTripCost: () => (/* binding */ getSingleTripCost),
/* harmony export */   getTotalCost: () => (/* binding */ getTotalCost),
/* harmony export */   getTravelerTrips: () => (/* binding */ getTravelerTrips),
/* harmony export */   showMyTripDestinations: () => (/* binding */ showMyTripDestinations)
/* harmony export */ });
function getTravelerTrips(allTrips, id) {
    if(id) {
        let myTrips = allTrips.trips.filter((trip) => {
            return trip.userID === id;
        })
        myTrips.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        })
        return myTrips;
    } else {
        return 'This User ID does not exist.';
    }
}

function getTotalCost(myTrips, allDest, status, year) {
    let approvedTrips = myTrips.filter((trip) => {
        return trip.status === status;
    });
    if(year) {
        approvedTrips = approvedTrips.filter((trip) => {
            return trip.date.includes(year);
        });
    }

    let totalCost = approvedTrips.reduce((total, trip) => {
        allDest.destinations.forEach((dest) => {
            if(trip.destinationID === dest.id) {
                total += (dest.estimatedFlightCostPerPerson * trip.travelers);
                total += (dest.estimatedLodgingCostPerDay * trip.duration);
            }
        })
        return total;
    }, 0);
    return Math.round((totalCost * 1.1));
}

function showMyTripDestinations(myTrips, allDest) {
    let updatedTrips = myTrips.map((trip) => {
        return allDest.destinations.forEach((dest) => {
            if(trip.destinationID === dest.id) {
                if(!trip.destination) {
                    trip.destination = dest.destination;
                }
            }
        });
    });
    return updatedTrips;
}

function getSingleTripCost(myTrips, allDest) {
    let tripsTotalCost = myTrips.map((trip) => {
        return allDest.destinations.forEach((dest) => {
            if(trip.destinationID === dest.id) {
                if(!trip.total) {
                    trip.total = Math.round(((dest.estimatedFlightCostPerPerson * trip.travelers) + (dest.estimatedLodgingCostPerDay * trip.duration)) * (1.1))
                }
            }
        });
    });
    return tripsTotalCost;
}



/***/ })
/******/ 	]);
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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _images_airplane_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _fetchRequests_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _domUpdates_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _travelerInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);











})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map