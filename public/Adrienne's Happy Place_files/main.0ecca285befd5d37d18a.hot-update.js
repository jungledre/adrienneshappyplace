webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.0ecca285befd5d37d18a.hot-update.js.map