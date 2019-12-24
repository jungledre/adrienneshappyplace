(this["webpackJsonpbuzzbtns"] = this["webpackJsonpbuzzbtns"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  background-color: #F3FAF1;\n  margin: 0;\n  padding: 0;\n  font-size: 1em;\n  font-family: 'Vollkorn', 'Concert One', serif;\n}\n\nh1 {\n  margin-top: 0;\n  font-weight: bold;\n}\n\nh3 {\n  font-weight: normal;\n}\n\n.flex-wrap {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.half-screen {\n  height: 100vh;\n  width: 50vw;\n}\n\n.x3 {\n  flex-grow: 1;\n  flex-shrink: 0;\n  flex-basis: calc(33.3333%);\n  height: 33.3333vh;\n  width: 33.3333vh;\n}\n\n.x2 {\n  flex-grow: 1;\n  flex-shrink: 0;\n  flex-basis: calc(50%);\n  height: 50vh;\n  width: 50vw;\n  overflow: hidden;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/content.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/content.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".content-container {\n  margin-top: 1em;\n  margin-bottom: 3em;\n}\n\n.content-container > ul {\n  list-style-type: none;\n}\n\n.content-container > ul > li {\n  padding-bottom: .5em;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/page.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/page.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".rainbow-container {\n  margin: 0;\n  padding: 0;\n  background-color: teal;\n  animation: colorRotate 10s linear infinite;\n  min-height: 100vh;\n}\n\n.page-container {\n  height: 100%;\n  max-width: 1000px;\n  padding: 10%;\n}\n\n@media only screen and (max-width: 768px) {\n  .page-container {\n    padding-top: 90px;\n  }\n}\n\nnav {\n  display: flex;\n  position: fixed;\n  top: 0vh;\n  padding: 30px;\n}\n\nnav > a {\n  animation: colorRotate 10s linear infinite;\n  color: Aquamarine;\n  display: block;\n  justify-content: space-between;\n  font-size: 2em;\n  padding-left: 8px;\n  text-decoration: none;\n  margin-right: .5em;\n}\n\nnav > a:visited {\n  color: LimeGreen;\n  animation: colorRotate 10s linear infinite;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/waves.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/waves.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "@keyframes triangle-animation{\n    0%{\n        transform: scale(0) rotate(0deg);\n        opacity: 1;\n    }\n\n    100%{\n        transform: scale(50) rotate(360deg);\n        opacity: 0;\n    }\n}\n\n.container2 {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  /* left: 5px; */\n  top: 0;\n  margin: 0 auto;\n  overflow: hidden;\n  background: repeating-radial-gradient(black, black 5px, transparent 5px, transparent 10px);\n}\n\n.element {\n  width: 100vw;\n  height: 100vh;\n  background:\n    radial-gradient(\n      farthest-side at bottom left,\n      rgba(255, 0, 255, 0.5),\n      transparent 3000px\n    ),\n    radial-gradient(\n      farthest-corner at bottom right,\n      rgba(255, 50, 50, 0.5),\n      transparent 300px\n    );\n}\n\n.cool {\n  z-index: 2;\n  opacity: 1;\n  background: none;\n  position: absolute;\n  top: 0;\n  zoom: 200%;\n}\n\n@keyframes colorRotate {\n  100% {\n    -webkit-filter: hue-rotate(360deg);\n  }\n}\n\n/* section, div {\n\twidth: 100vw;\n\theight: 100vh;\n}\n\ndiv {\n\tbackground: -moz-radial-gradient(center, ellipse cover,  rgba(125,185,232,0) 0%, rgba(124,183,230,0) 1%, rgba(0,0,0,1) 100%);\n\tbackground: -webkit-radial-gradient(center, ellipse cover,  rgba(125,185,232,0) 0%,rgba(124,183,230,0) 1%,rgba(0,0,0,1) 100%);\n\tbackground: radial-gradient(ellipse at center,  rgba(125,185,232,0) 0%,rgba(124,183,230,0) 1%,rgba(0,0,0,1) 100%);\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#007db9e8', endColorstr='#000000',GradientType=1 );\n} */\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/home.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/pages/home.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".home > .x3 {\n  cursor: pointer;\n  display: flex;\n  justify-content: center; /* align horizontal */\n  align-items: center; /* align vertical */\n  font-weight: bold;\n  font-size: 1.3em;\n  letter-spacing: .1em;\n}\n\n.home .half-screen {\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  animation: colorRotate 10s linear infinite;\n  min-height: 100vh;\n}\n\n.half-screen a { /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\n  animation: fadein 3s;\n}\n\n.rainbow {\n  color: hotpink;\n  animation: colorRotate 20s linear infinite;\n  text-align: center;\n  vertical-align: center;\n}\n\n.home a {\n  text-decoration: none;\n  color: black;\n}\n\n.rainbow-link {\n  color: lavender;\n  animation: colorRotate 20s linear infinite;\n}\n\na {\n color: slateblue;\n}\n\n.home-link {\n  color: lavender;\n}\n\n.home-link:after {\n  color: orange;\n}\n\n.home-link:link {\n  color: lavender;\n}\n\n.home-link:visited {\n  color: lightBlue;\n}\n\n.home-link:hover {\n  color: peachpuff;\n}\n\n.home-link:active {\n  color: lilac;\n}\n\n.big-love {\n  font-size: 4em;\n}\n\n@media only screen and (max-width: 768px) {\n  .home a:nth-child(5) {\n    display: none;\n  }\n  .home a:nth-child(5) {\n    display: none;\n  }\n  .home > .x3 {\n    min-width: 50%;\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/moires.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/pages/moires.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".moire {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  overflow: hidden;\n  background: repeating-radial-gradient(limegreen, red 5px, blue 5px, blue 10px);\n}\n\n.moires {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  overflow: hidden;\n  background: repeating-radial-gradient(limegreen, red 5px, blue 5px, blue 10px);\n}\n\n.moire {\n  margin: 0 auto;\n  transform-origin: center center;\n  background: repeating-linear-gradient(45deg, transparent 0px, transparent 1px, limegreen 3px, hotpink 4px);\n  position: relative;\n  height: 300vmax;\n  width: 300vmax;\n  mix-blend-mode: luminosity;\n  top: -100vmax;\n  left: -100vmax;\n  right: 0;\n  bottom: 0;\n  zoom: 200%;\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.moire.m1 {\n  animation: spin 25s infinite linear;\n}\n\n.moire.m2 {\n  animation: spin 150s infinite linear;\n}\n\n/* background: repeating-radial-gradient(#e66465, #9198e5 20%); */\n/* background: repeating-radial-gradient(black, black 5px, white 5px, white 10px); */\n\n/* background: radial-gradient(limegreen, hotpink); */\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/starburst.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/pages/starburst.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".starburst {\n  /* GLOBAL */\n  width: 100%;\n  height: 100%;\n\tposition: relative;\n\tbackground-repeat: no-repeat;\n\tz-index: 0;\n}\n.starburst * {\n\t/* CHILDREN */\n\tposition: relative;\n\tz-index: 1;\n}\n.starburst--both {\n\t/* ALIGNMENT BOTH */\n\toverflow: hidden;\n\tbackground-image:\n\tlinear-gradient(0deg, transparent 50%, black 50%),\n\tlinear-gradient(11deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(22deg, transparent 50%, black 50%),\n\tlinear-gradient(33deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(44deg, transparent 50%, black 50%),\n\tlinear-gradient(55deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(66deg, transparent 50%, black 50%),\n\tlinear-gradient(77deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(88deg, transparent 50%, black 50%),\n\tlinear-gradient(99deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(110deg, transparent 50%, black 50%),\n\tlinear-gradient(121deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(132deg, transparent 50%, black 50%),\n\tlinear-gradient(143deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(154deg, transparent 50%, black 50%),\n\tlinear-gradient(165deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(176deg, transparent 50%, black 50%),\n\tlinear-gradient(187deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(198deg, transparent 50%, black 50%),\n\tlinear-gradient(209deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(220deg, transparent 50%, black 50%),\n\tlinear-gradient(231deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(242deg, transparent 50%, black 50%),\n\tlinear-gradient(253deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(264deg, transparent 50%, black 50%),\n\tlinear-gradient(275deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(286deg, transparent 50%, black 50%),\n\tlinear-gradient(297deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(308deg, transparent 50%, black 50%),\n\tlinear-gradient(319deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(330deg, transparent 50%, black 50%),\n\tlinear-gradient(341deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(352deg, transparent 50%, black 50%);\n}\n.starburst--both::before {\n\tbackground-image:\n\tlinear-gradient(180deg, transparent 50%, black 50%),\n\tlinear-gradient(191deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(202deg, transparent 50%, black 50%),\n\tlinear-gradient(213deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(224deg, transparent 50%, black 50%),\n\tlinear-gradient(235deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(246deg, transparent 50%, black 50%),\n\tlinear-gradient(257deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(268deg, transparent 50%, black 50%),\n\tlinear-gradient(279deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(290deg, transparent 50%, black 50%),\n\tlinear-gradient(301deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(312deg, transparent 50%, black 50%),\n\tlinear-gradient(323deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(334deg, transparent 50%, black 50%),\n\tlinear-gradient(345deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(356deg, transparent 50%, black 50%);\n}\n.starburst--both::after {\n\ttop: 50% !important;\n\tbackground-position: 0 100%;\n\tbackground-size: 100% 200%;\n\tbackground-image:\n\tlinear-gradient(0deg, transparent 50%, black 50%),\n\tlinear-gradient(11deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(22deg, transparent 50%, black 50%),\n\tlinear-gradient(33deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(44deg, transparent 50%, black 50%),\n\tlinear-gradient(55deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(66deg, transparent 50%, black 50%),\n\tlinear-gradient(77deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(88deg, transparent 50%, black 50%),\n\tlinear-gradient(99deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(110deg, transparent 50%, black 50%),\n\tlinear-gradient(121deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(132deg, transparent 50%, black 50%),\n\tlinear-gradient(143deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(154deg, transparent 50%, black 50%),\n\tlinear-gradient(165deg, transparent 50%, #2897e6 50%),\n\tlinear-gradient(176deg, transparent 50%, black 50%);\n}\n.starburst--both::before,\n.starburst--both::after {\n\ttop: 0;\n\tleft: 0;\n\tcontent: \"\";\n\tz-index: 0;\n\twidth: 100%;\n\theight: 100%;\n\tposition: absolute;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/youtube.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/pages/youtube.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "* { box-sizing: border-box; }\n.video-background {\n  background: transparent;\n  position: fixed;\n  top: 0; right: 0; bottom: 0; left: 0;\n  z-index: -99; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\n  animation: fadein 30s;\n}\n.video-foreground,\n.video-background iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  filter:opacity(35%);\n  z-index: -99;\n}\n#vidtop-content {\n\ttop: 0;\n  color:transparent;\n  z-index: -99;\n\n}\n\n@media only screen and (max-width: 768px) {\n  iframe {\n    display: hidden;\n  }\n}\n\n@media (min-aspect-ratio: 16/9) {\n  .video-foreground { height: 300%; top: -100%; }\n}\n@media (max-aspect-ratio: 16/9) {\n  .video-foreground { width: 300%; left: -100%; }\n}\n\n@keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Page */ "./src/components/Page.js");
/* harmony import */ var _pages_Adrienne__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Adrienne */ "./src/pages/Adrienne.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.js");
/* harmony import */ var _pages_Hobbies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Hobbies */ "./src/pages/Hobbies.js");
/* harmony import */ var _pages_Services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/Services */ "./src/pages/Services.js");
/* harmony import */ var _pages_Dancing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Dancing */ "./src/pages/Dancing.js");
/* harmony import */ var _pages_DJing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/DJing */ "./src/pages/DJing.js");
/* harmony import */ var _pages_Light__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/Light */ "./src/pages/Light.js");
/* harmony import */ var _pages_Travel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/Travel */ "./src/pages/Travel.js");
/* harmony import */ var _pages_Nature__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/Nature */ "./src/pages/Nature.js");
/* harmony import */ var _pages_Sax__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/Sax */ "./src/pages/Sax.js");
/* harmony import */ var _components_Waves__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/Waves */ "./src/components/Waves.js");
/* harmony import */ var _pages_Thrifting__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/Thrifting */ "./src/pages/Thrifting.js");
/* harmony import */ var _pages_Coding__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/Coding */ "./src/pages/Coding.js");
/* harmony import */ var _pages_YouTube__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/YouTube */ "./src/pages/YouTube.js");
/* harmony import */ var _components_Accordion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/Accordion */ "./src/components/Accordion.js");
var _jsxFileName = "/Users/akerr/software/adrienneshappyplace/src/App.js";




















function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: 'Services',
    noRainbow: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Services__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/accordion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/\uD83D\uDE4B\uD83C\uDFFB",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: 'Hello friend!',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Adrienne__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/hobbies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Hobbies__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/dancing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: 'Dancing',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Dancing__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/djing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: 'DJing',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_DJing__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: 'Psychedelic Light Shows',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Light__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/waves",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Waves__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/travel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: 'Travel',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Travel__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/nature",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: 'Nature',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Nature__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/sax",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: 'Saxophone',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Sax__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/coding",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: 'Coding',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Coding__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/thrifting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: 'Thrifting',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Thrifting__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/youtube",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: '🐸',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_YouTube__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Accordion.js":
/*!*************************************!*\
  !*** ./src/components/Accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.css */ "./src/components/content.css");
/* harmony import */ var _content_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_content_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/akerr/software/adrienneshappyplace/src/components/Accordion.js";




class Accordion extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      activeLabel: ''
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(ref) {
    let activeLabel = ref.target.innerText.splt('+ ');
    activeLabel = activeLabel[1];
    console.log(activeLabel, this.state.activeLabel);

    if (activeLabel === this.state.activeLabel) {
      activeLabel = null;
    }

    this.setState({
      activeLabel: activeLabel
    });
  }

  render() {
    return this.props.content.map(item => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.handleToggle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "+"), " ", item.title), item.title === this.state.activeLabel && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, item, item.content.map(p => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, p)))));
  }

}

Accordion.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ }),

/***/ "./src/components/Content.js":
/*!***********************************!*\
  !*** ./src/components/Content.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.css */ "./src/components/content.css");
/* harmony import */ var _content_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/akerr/software/adrienneshappyplace/src/components/Content.js";



function Content({
  content
}) {
  return content.map(item => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, item.content.map(p => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, p)))));
}

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./src/components/Page.js":
/*!********************************!*\
  !*** ./src/components/Page.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_YouTube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/YouTube */ "./src/pages/YouTube.js");
/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.css */ "./src/components/page.css");
/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/akerr/software/adrienneshappyplace/src/components/Page.js";





function Page({
  title,
  children,
  noRainbow
}) {
  const rainbowColors = ['3CADCF', '85DE77', '97CC4B', 'F9FFCB', 'FFCC49'];
  const randomColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
  const randomNumber = Math.floor(Math.random() * 1000) - 20;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: !noRainbow && 'rainbow-container',
    style: {
      backgroundColor: !noRainbow && '#' + randomColor
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_YouTube__WEBPACK_IMPORTED_MODULE_2__["default"], {
    videoUrl: 'https://www.youtube.com/embed/o-cHr7Ka-fE?t=' + randomNumber + '?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, title), children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "\uD83C\uDFE1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/\uD83D\uDE4B\uD83C\uDFFB",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "\uD83D\uDE4B\uD83C\uDFFB")));
}

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/components/Waves.js":
/*!*********************************!*\
  !*** ./src/components/Waves.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _waves_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waves.css */ "./src/components/waves.css");
/* harmony import */ var _waves_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_waves_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/akerr/software/adrienneshappyplace/src/components/Waves.js";


const rainbow = ['pink', 'orange', 'yellow', 'green', 'yellow', 'orange'];
const doubleRainbow = rainbow.concat(rainbow);

function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '100vw',
      height: '100vh'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, doubleRainbow.map(color => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "rainbow-container",
      style: {
        backgroundColor: color,
        width: '100vw',
        height: '9vh'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/content.css":
/*!************************************!*\
  !*** ./src/components/content.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./content.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/content.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./content.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/content.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./content.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/content.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/page.css":
/*!*********************************!*\
  !*** ./src/components/page.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./page.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/page.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./page.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/page.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./page.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/page.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/waves.css":
/*!**********************************!*\
  !*** ./src/components/waves.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./waves.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/waves.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./waves.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/waves.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./waves.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/waves.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/akerr/software/adrienneshappyplace/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/pages/Adrienne.js":
/*!*******************************!*\
  !*** ./src/pages/Adrienne.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/akerr/software/adrienneshappyplace/src/pages/Adrienne.js";


function Adrienne() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Thank you for taking the time to mosey on over here. I hope that it's abundantly clear that I have truly loved putting this site together. Please enjoy what you find while exploring what makes me happy and what I have to offer the world."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "What I've shared here is a shallow dip into the wealth of experiences I've had the pleasure of collecting during my time here on Earth. I can only share so much through this medium so I hope you take inspiration from something you find here that you can pick up and carry along with you along your own journey."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://youtu.be/hgw_yprN_-w",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Happy trails"), ","), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Adrienne Kerr"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Seattle, WA ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    role: "img",
    "aria-label": "heart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "\uD83D\uDC9E"), new Date().getFullYear())));
}

/* harmony default export */ __webpack_exports__["default"] = (Adrienne);

/***/ }),

/***/ "./src/pages/Coding.js":
/*!*****************************!*\
  !*** ./src/pages/Coding.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.js");
var _jsxFileName = "/Users/akerr/software/adrienneshappyplace/src/pages/Coding.js";


const content = [{
  title: "Sites I've Touched",
  content: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://account.godaddy.com/products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "GoDaddy.com"), " \u2014 My Products + Account Settings Pages"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://porch.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Porch.com"), " \u2014 Front of Site + Account Settings Pages, Widget API"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://brenthaven.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Brenthaven.com")]
}, {
  title: 'How to Learn',
  content: ["If you've ever messed with HTML or CSS on myspace or livejournal or something, I bet you'd like web development too.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Get started right meow with", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://jsforcats.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "JavaScript For Cats"), " \uD83D\uDC08"), 'If you take an interest in web development or coding in general, hit me up! I would love to start you on your journey.']
}];

function Coding() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "I discovered this field after meeting some startup developers through Couchsurfing.org who would work remotely while travelling the world."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "After spending more time around web developers, it became clear that this was the life I wanted to go after. I hunkered down for a year and was able to build a career in web development for myself."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Content__WEBPACK_IMPORTED_MODULE_1__["default"], {
    content: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Coding);

/***/ }),

/***/ "./src/pages/DJing.js":
/*!****************************!*\
  !*** ./src/pages/DJing.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/akerr/software/adrienneshappyplace/src/pages/DJing.js";


function DJing() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "After visiting Brazil in 2018, I picked up DJing in order to share the vast amounts of music I'd discovered there more widely with others."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "My preferred genres are dance electronica, synth pop, tropic\xE1lia, and psychedelic rock. I especially enjoy highlighting artists from Brazil."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/buzzbtns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Book me!"));
}

/* harmony default export */ __webpack_exports__["default"] = (DJing);

/***/ }),

/***/ "./src/pages/Dancing.js":
/*!******************************!*\
  !*** ./src/pages/Dancing.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.js");
var _jsxFileName = "/Users/akerr/software/adrienneshappyplace/src/pages/Dancing.js";



function Dancing() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "I grew up contra dancing and have picked up a bunch of different styles of dance since then."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "While I love dancing in front of a mirror at home, I'm also fascinated by partner dance as a way of physical communication that transcends language in the same way that playing music does."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Content__WEBPACK_IMPORTED_MODULE_1__["default"], {
    content: [{
      title: 'My Favorite Styles',
      content: ['Improvisational, Clubbing, Samba, Forro, Contra']
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Dancing);

/***/ }),

/***/ "./src/pages/Hobbies.js":
/*!******************************!*\
  !*** ./src/pages/Hobbies.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.css */ "./src/pages/home.css");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/akerr/software/adrienneshappyplace/src/pages/Hobbies.js";


const favoriteThings = ['djing', 'light', 'thrifting', 'sax', 'happyplace', 'travel', 'coding', 'nature', 'dancing'];
const rainbow = ['C132AB', 'FF756D', '5742B5', '3CADCF', '85DE77', '97CC4B', 'F9FFCB', 'FFCC49', 'EF3E1F'];

function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "home",
    className: "home rainbow flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, favoriteThings.map((thing, i) => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "home-link x3",
      style: {
        backgroundColor: '#' + rainbow[i]
      },
      href: '/' + thing,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, thing === 'happyplace' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/hobbies",
      "aria-label": "sunshine lollipops and rainbows",
      className: "big-love",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "\uD83C\uDF08\u2728") : thing.toUpperCase());
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.css */ "./src/pages/home.css");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/akerr/software/adrienneshappyplace/src/pages/Home.js";



function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "home flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "half-screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Services"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "half-screen rainbow rainbow-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "home-link rainbow-link ",
    href: "/hobbies",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Hobbies"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/Light.js":
/*!****************************!*\
  !*** ./src/pages/Light.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.js");
/* harmony import */ var _Moires__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Moires */ "./src/pages/Moires.js");
var _jsxFileName = "/Users/akerr/software/adrienneshappyplace/src/pages/Light.js";



const info = [{
  title: 'Supplies',
  content: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Glass Clock Faces - At thrift stores or custom ones from", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://liquidlightshop.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Liquid Light Lab Shop")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Water Dyes - Food Coloring or higher quality watercolor dyes by", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.docmartins.com/collections/hydrus-fine-art-watercolor-bottles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Dr. Ph. Martin")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Oil Dyes - I've been having good luck with liquid dyes by", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.lonestarcandlesupply.com/candle-dyes/liquid-dyes.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Lone Star Candle Supply")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Transparency Sheets - You can overlay transparency sheet graphics over eachother to produce", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.exploratorium.edu/snacks/on-the-fringe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "moire/interference patterns.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Moir%C3%A9_pattern.svg",
    alt: "moire pattern graphic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  })]
}, {
  title: 'CSS Moires for funsies',
  content: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '80vw'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Moires__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }))]
}];

function Light() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "I finally got my hands on a light projector! This has led to all kinds of experiments and research. Here I'll share my learnings."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Content__WEBPACK_IMPORTED_MODULE_1__["default"], {
    content: info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Light);

/***/ }),

/***/ "./src/pages/Moires.js":
/*!*****************************!*\
  !*** ./src/pages/Moires.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _moires_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moires.css */ "./src/pages/moires.css");
/* harmony import */ var _moires_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_moires_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _starburst_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./starburst.css */ "./src/pages/starburst.css");
/* harmony import */ var _starburst_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_starburst_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/akerr/software/adrienneshappyplace/src/pages/Moires.js";



const stuff = ['m', 's', 's', 'm'];

function Moire() {
  const moire = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "x2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "moires",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "moire m1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "moire m2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })));
  const starburst = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "x2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "starburst starburst--both",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    className: "flex-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, stuff.map(i => {
    return i === 'm' ? moire : starburst;
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Moire);
/* <div className='container'>
<div className='element'></div>
</div> */

/* <div className='container2'></div> */

/* <div className="cool rainbow">
<a href="https://codepen.io/clawtros/pen/rLwGpW" className="linky">Iteration of a super coooooool code sample by </a>
<a href="http://www.removablefeast.com/#drip" className="clawtros">clawtros</a>
</div> */

/* <div id='wave-container'>
<div id='wave'></div>
</div> */

/***/ }),

/***/ "./src/pages/Nature.js":
/*!*****************************!*\
  !*** ./src/pages/Nature.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Plants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Plants */ "./src/pages/Plants.js");
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.js");
var _jsxFileName = "/Users/akerr/software/adrienneshappyplace/src/pages/Nature.js";



const content = [{
  title: "Gardening",
  content: ['I grew up in the city but my parents bartered with a neighbor for access to their land. I have fond memories of walking through the neighborhood to fetch fresh veggies for screened in porch dinners accompanied by the ocassional flash of a lightning bug and the  hum of cicadas.']
}, {
  title: "House Plants",
  content: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Plants__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  })]
}];

function Nature() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Content__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Nature);

/***/ }),

/***/ "./src/pages/Plants.js":
/*!*****************************!*\
  !*** ./src/pages/Plants.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/akerr/software/adrienneshappyplace/src/pages/Plants.js";

const plants = ['pilea', 'pothos', 'monstera', 'zz'];

const Plants = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "/",
  className: "flex-wrap",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, plants.map(type => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  alt: "pretty plant pic fro sill.com",
  className: "x2 plant-img-container",
  style: {
    backgroundImage: 'url(/' + type + '.jpg)',
    backgroundPosition: 'center'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (Plants);

/***/ }),

/***/ "./src/pages/Sax.js":
/*!**************************!*\
  !*** ./src/pages/Sax.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.js");
var _jsxFileName = "/Users/akerr/software/adrienneshappyplace/src/pages/Sax.js";


const content = [{
  title: 'Audio Recordings',
  content: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://halfshellrecords.bandcamp.com/album/softly-wait",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "album cover with beautiful rainbow",
    src: "https://f4.bcbits.com/img/a2733115006_10.jpg",
    width: "100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }))]
}, {
  title: 'Live Recordings',
  content: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://youtu.be/J-oxfReveQ8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Tres Leches 2019"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.youtube.com/watch?v=00OoYjwBF0g",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Pleasures 2018")]
}, {
  title: 'Groups I\'ve performed with',
  content: ['Sundae Crush, Rise Up! Action Band, Pleasures, Tres Leches, Filthy FemCorps']
}];

function Sax() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Playing saxophone is the way I can most fluently express myself through music."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Content__WEBPACK_IMPORTED_MODULE_1__["default"], {
    content: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Sax);

/***/ }),

/***/ "./src/pages/Services.js":
/*!*******************************!*\
  !*** ./src/pages/Services.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Accordion */ "./src/components/Accordion.js");
var _jsxFileName = "/Users/akerr/software/adrienneshappyplace/src/pages/Services.js";


const content = [{
  title: 'DJ Services',
  content: ['I love spinning electronica, synth pop, Brazilian, house, soul, and funk.', "Past Events: Fremont Foundry, Jupiter Bar, Corvus, Linda's Tavern."]
}, {
  title: 'VJ Services',
  content: ['As my newest service, I can provide a full psychedelic light show including analog liquid light art.', 'Upcoming Events: Werewolf Vacation 1/18']
}, {
  title: 'Saxophone',
  content: ['I perform and record professional improvised or arranged wind instrument parts. I can read music and learn very fast by ear. I can also play a wide range of auxillary percussion.', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Bands:", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://housekeysband.bandcamp.com/Housekeys",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Housekeys"), ",", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://sundaecrush.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Sundae Crush"), ",", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://riseupactionband.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Rise Up! Action Band"), ",", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://halfshellrecords.bandcamp.com/album/softly-wait",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Pleasures"), ",", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://youtu.be/J-oxfReveQ8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Tres Leches"), ",", ' and ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/FilthyFemcorps/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Filthy FemCorps"))]
}, {
  title: 'Web Development',
  content: ["With 6 years of professional web development experience, I'm open to offering my services for compelling website ideas.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Experience:", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://account.godaddy.com/products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "GoDaddy.com"), " \u2014 My Products + Account Settings Pages,", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://porch.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Porch.com"), " \u2014 Front of Site + Account Settings Pages, Widget API,", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://brenthaven.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Brenthaven.com"))]
}, {
  title: 'Networking',
  content: ['I can connect you with some of the best musicians, music composers, sound designers, mixing and mastering engineers, photographers, videographers, event producers, social media managers, graphic designers, illustrators, painters, woodworkers and jewelry makers in this city.']
}];

function Services({
  label
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Accordion__WEBPACK_IMPORTED_MODULE_1__["default"], {
    content: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), "Contact for rates: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto: adrie.k@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "adrie.k@gmail.com"));
}

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./src/pages/Thrifting.js":
/*!********************************!*\
  !*** ./src/pages/Thrifting.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/akerr/software/adrienneshappyplace/src/pages/Thrifting.js";


function Thrifting() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.lifelongthrift.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Lifelong Thrift"), " is hands down the best thrift store I've ever come across."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "They have a ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "rainbow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "rainbow"), " of deals and all the money goes to support folks with HIV and AIDS."));
}

/* harmony default export */ __webpack_exports__["default"] = (Thrifting);

/***/ }),

/***/ "./src/pages/Travel.js":
/*!*****************************!*\
  !*** ./src/pages/Travel.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Content */ "./src/components/Content.js");
var _jsxFileName = "/Users/akerr/software/adrienneshappyplace/src/pages/Travel.js";


const content = [{
  title: '2021 Chile??',
  content: ['']
}, {
  title: '2020 Brazil',
  content: ['Heading back to Brazil with my samba group VamoLá']
}, {
  title: '2019 Europe',
  content: ['Toured around Europe with the band Pleasures!']
}, {
  title: '2018 Brazil',
  content: ['After meeting some members of Unidos Do Swing at HONK! Boston 2018, I planned a trip down there with my clarinet to attend HONK! Rio and HONK! São Paulo just a month later. There was an enormous amount of love and inspiration to take in and was welcomed with open arms by the incredible community of artists that is down there. I look forward to getting back to this parallel world again for Carnaval 2020.']
}, {
  title: '2017 Honduras',
  content: ['A very close friend of mine worked as a nurse for a year at a orphanage through an organization called Mis Pequeños Hermanos. It was especially inspiring to meet a man who had been raised by this organization, studied to become a surgeon there, and now practices surgery in higher population areas.']
}, {
  title: '2002 - 2016 Still in progress',
  content: ['Dang! I have so many stories to tell!']
}, {
  title: '2002 South America',
  content: ['Once they would turn 10 years old, my grandpa and nana would take their grandchildren on an international trip. I was ecstatic to learn that they wanted to take me to Ecuador, Peru, and the Galapagos Islands.']
}, {
  title: '2001 Europe',
  content: ['For just $3,000, my mom planned a 3 week long car camping trip all around Europe for our entire family. Yes, that includes flights.']
}, {
  title: '2000 El Salvador',
  content: ['Incredible exchange program between gradeschool immersion programs.']
}, {
  title: '1995 Costa Rica',
  content: ['My parents bravely brought 3 kids to Costa Rica. We stayed on a farm with a family there and learned how to harvest bananas, process chickens, eat stargruit, and build a hottub in the middle of a river. At 5 I was exposed to the sounds of the jungle - birds, bats, bugs, howlers monkeys and so much more.']
}];

function Travel() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "I've had the luxury of exploring the world. I find it to be a way find new perspectives for my approach to life and a really awesome way to connect with others."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Content__WEBPACK_IMPORTED_MODULE_1__["default"], {
    content: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Travel);

/***/ }),

/***/ "./src/pages/YouTube.js":
/*!******************************!*\
  !*** ./src/pages/YouTube.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _youtube_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./youtube.css */ "./src/pages/youtube.css");
/* harmony import */ var _youtube_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_youtube_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/akerr/software/adrienneshappyplace/src/pages/YouTube.js";



function YouTube({
  videoUrl
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "video-background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "video-foreground",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    title: "YouTube Content",
    src: videoUrl,
    frameborder: "0",
    allowfullscreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (YouTube);

/***/ }),

/***/ "./src/pages/home.css":
/*!****************************!*\
  !*** ./src/pages/home.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/home.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/home.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/home.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/pages/moires.css":
/*!******************************!*\
  !*** ./src/pages/moires.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./moires.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/moires.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./moires.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/moires.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./moires.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/moires.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/pages/starburst.css":
/*!*********************************!*\
  !*** ./src/pages/starburst.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./starburst.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/starburst.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./starburst.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/starburst.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./starburst.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/starburst.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/pages/youtube.css":
/*!*******************************!*\
  !*** ./src/pages/youtube.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./youtube.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/youtube.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./youtube.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/youtube.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./youtube.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/youtube.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/akerr/software/adrienneshappyplace/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/akerr/software/adrienneshappyplace/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map