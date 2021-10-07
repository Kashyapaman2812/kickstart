"use strict";
self["webpackHotUpdate_N_E"]("pages/campaign/requests",{

/***/ "./components/requestRow.js":
/*!**********************************!*\
  !*** ./components/requestRow.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _Ethereum_web3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Ethereum/web3 */ "./Ethereum/web3.js");
/* harmony import */ var _Ethereum_contracts_campaign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Ethereum/contracts/campaign */ "./Ethereum/contracts/campaign.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "C:\\Users\\Aman Kashyap\\Desktop\\UI_for_ethereum\\kickstart\\components\\requestRow.js";


function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var RequestRow = /*#__PURE__*/function (_Component) {
  (0,C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(RequestRow, _Component);

  var _super = _createSuper(RequestRow);

  function RequestRow() {
    var _this;

    (0,C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, RequestRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "onApprove", /*#__PURE__*/(0,C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee() {
      var campaign, accounts;
      return C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = (0,_Ethereum_contracts_campaign__WEBPACK_IMPORTED_MODULE_11__.default)(_this.props.address);
              _context.next = 3;
              return _Ethereum_web3__WEBPACK_IMPORTED_MODULE_10__.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return campaign.methods.approveRequest(_this.props.id - 1).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    (0,C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "onFinalize", /*#__PURE__*/(0,C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee2() {
      var campaign, accounts;
      return C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              campaign = (0,_Ethereum_contracts_campaign__WEBPACK_IMPORTED_MODULE_11__.default)(_this.props.address);
              _context2.next = 3;
              return _Ethereum_web3__WEBPACK_IMPORTED_MODULE_10__.default.eth.getAccounts();

            case 3:
              accounts = _context2.sent;
              _context2.next = 6;
              return campaign.methods.finaliseRequest(_this.props.id - 1).send({
                from: accounts[0]
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    return _this;
  }

  (0,C_Users_Aman_Kashyap_Desktop_UI_for_ethereum_kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(RequestRow, [{
    key: "render",
    value: function render() {
      var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Table.Row,
          Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Table.Cell;
      var _this$props = this.props,
          id = _this$props.id,
          request = _this$props.request,
          address = _this$props.address,
          approversCount = _this$props.approversCount;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Row, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Cell, {
          children: id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Cell, {
          children: request.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Cell, {
          children: _Ethereum_web3__WEBPACK_IMPORTED_MODULE_10__.default.utils.fromWei(request.value, 'ether')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Cell, {
          children: address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Cell, {
          children: [request.approvalCount, "/", approversCount]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Cell, {
          children: request.complete ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Button, {
            color: "green",
            basic: true,
            onClick: this.onApprove,
            children: "Approve"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Cell, {
          children: request.complete ? null : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Button, {
            color: "teal",
            basic: true,
            onClick: this.onFinalize,
            children: "Finalize"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, this);
    }
  }]);

  return RequestRow;
}(react__WEBPACK_IMPORTED_MODULE_9__.Component);

/* harmony default export */ __webpack_exports__["default"] = (RequestRow);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ24vcmVxdWVzdHMuNGM4YTI2Mjc2MzYwZjQ4NTgwOWEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztJQUVNTTs7Ozs7Ozs7Ozs7Ozs7Ozt5b0JBRVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUZDLGNBQUFBLFFBRkUsR0FFU0Ysc0VBQVEsQ0FBQyxNQUFLRyxLQUFMLENBQVdDLE9BQVosQ0FGakI7QUFBQTtBQUFBLHFCQUdlTCxvRUFBQSxFQUhmOztBQUFBO0FBR0ZRLGNBQUFBLFFBSEU7QUFBQTtBQUFBLHFCQUtGTCxRQUFRLENBQUNNLE9BQVQsQ0FBaUJDLGNBQWpCLENBQWdDLE1BQUtOLEtBQUwsQ0FBV08sRUFBWCxHQUFjLENBQTlDLEVBQWlEQyxJQUFqRCxDQUFzRDtBQUN4REMsZ0JBQUFBLElBQUksRUFBR0wsUUFBUSxDQUFDLENBQUQ7QUFEeUMsZUFBdEQsQ0FMRTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7MG9CQVVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNITCxjQUFBQSxRQURHLEdBQ1FGLHNFQUFRLENBQUMsTUFBS0csS0FBTCxDQUFXQyxPQUFaLENBRGhCO0FBQUE7QUFBQSxxQkFFY0wsb0VBQUEsRUFGZDs7QUFBQTtBQUVIUSxjQUFBQSxRQUZHO0FBQUE7QUFBQSxxQkFJSEwsUUFBUSxDQUFDTSxPQUFULENBQWlCSyxlQUFqQixDQUFpQyxNQUFLVixLQUFMLENBQVdPLEVBQVgsR0FBYyxDQUEvQyxFQUFrREMsSUFBbEQsQ0FBdUQ7QUFDekRDLGdCQUFBQSxJQUFJLEVBQUdMLFFBQVEsQ0FBQyxDQUFEO0FBRDBDLGVBQXZELENBSkc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7V0FTYixrQkFBUTtBQUVKLFVBQVFPLEdBQVIsR0FBcUJoQix5REFBckI7QUFBQSxVQUFhaUIsSUFBYixHQUFxQmpCLDBEQUFyQjtBQUNBLHdCQUE2QyxLQUFLSyxLQUFsRDtBQUFBLFVBQVFPLEVBQVIsZUFBUUEsRUFBUjtBQUFBLFVBQVdNLE9BQVgsZUFBV0EsT0FBWDtBQUFBLFVBQW1CWixPQUFuQixlQUFtQkEsT0FBbkI7QUFBQSxVQUEyQmEsY0FBM0IsZUFBMkJBLGNBQTNCO0FBQ0EsMEJBQ1ksK0RBQUMsR0FBRDtBQUFBLGdDQUNJLCtEQUFDLElBQUQ7QUFBQSxvQkFDS1A7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBSUksK0RBQUMsSUFBRDtBQUFBLG9CQUNLTSxPQUFPLENBQUNFO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQU9JLCtEQUFDLElBQUQ7QUFBQSxvQkFDS25CLGtFQUFBLENBQW1CaUIsT0FBTyxDQUFDSyxLQUEzQixFQUFpQyxPQUFqQztBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEosZUFVSSwrREFBQyxJQUFEO0FBQUEsb0JBQ0tqQjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkosZUFhSSwrREFBQyxJQUFEO0FBQUEscUJBQ0tZLE9BQU8sQ0FBQ00sYUFEYixPQUM2QkwsY0FEN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJKLGVBZ0JJLCtEQUFDLElBQUQ7QUFBQSxvQkFDTUQsT0FBTyxDQUFDTyxRQUFSLEdBQW1CLElBQW5CLGdCQUNGLCtEQUFDLHNEQUFEO0FBQVEsaUJBQUssRUFBRyxPQUFoQjtBQUF3QixpQkFBSyxNQUE3QjtBQUE4QixtQkFBTyxFQUFJLEtBQUtDLFNBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQkosZUFxQkksK0RBQUMsSUFBRDtBQUFBLG9CQUNNUixPQUFPLENBQUNPLFFBQVIsR0FBbUIsSUFBbkIsZ0JBQ0YsK0RBQUMsc0RBQUQ7QUFBUSxpQkFBSyxFQUFHLE1BQWhCO0FBQXVCLGlCQUFLLE1BQTVCO0FBQTZCLG1CQUFPLEVBQUksS0FBS0UsVUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEWjtBQTZCSDs7OztFQXREb0I3Qjs7QUF5RHpCLCtEQUFlSyxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcmVxdWVzdFJvdy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7ICBCdXR0b24sIFRhYmxlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9FdGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uL0V0aGVyZXVtL2NvbnRyYWN0cy9jYW1wYWlnbidcclxuXHJcbmNsYXNzIFJlcXVlc3RSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIG9uQXBwcm92ZSA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbih0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuXHJcbiAgICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlUmVxdWVzdCh0aGlzLnByb3BzLmlkLTEpLnNlbmQoe1xyXG4gICAgICAgICAgICBmcm9tIDogYWNjb3VudHNbMF1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uRmluYWxpemUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbih0aGlzLnByb3BzLmFkZHJlc3MpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuXHJcbiAgICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5maW5hbGlzZVJlcXVlc3QodGhpcy5wcm9wcy5pZC0xKS5zZW5kKHtcclxuICAgICAgICAgICAgZnJvbSA6IGFjY291bnRzWzBdXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuXHJcbiAgICAgICAgY29uc3QgeyBSb3csIENlbGx9ID0gVGFibGU7XHJcbiAgICAgICAgY29uc3QgeyBpZCxyZXF1ZXN0LGFkZHJlc3MsYXBwcm92ZXJzQ291bnR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4oIFxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlcXVlc3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2ViMy51dGlscy5mcm9tV2VpKHJlcXVlc3QudmFsdWUsJ2V0aGVyJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZXF1ZXN0LmFwcHJvdmFsQ291bnR9L3thcHByb3ZlcnNDb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVxdWVzdC5jb21wbGV0ZSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yID0gJ2dyZWVuJyBiYXNpYyBvbkNsaWNrID0ge3RoaXMub25BcHByb3ZlfT5BcHByb3ZlPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyByZXF1ZXN0LmNvbXBsZXRlID8gbnVsbCA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3IgPSAndGVhbCcgYmFzaWMgb25DbGljayA9IHt0aGlzLm9uRmluYWxpemV9PkZpbmFsaXplPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiVGFibGUiLCJ3ZWIzIiwiQ2FtcGFpZ24iLCJSZXF1ZXN0Um93IiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsImZpbmFsaXNlUmVxdWVzdCIsIlJvdyIsIkNlbGwiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwiYXBwcm92YWxDb3VudCIsImNvbXBsZXRlIiwib25BcHByb3ZlIiwib25GaW5hbGl6ZSJdLCJzb3VyY2VSb290IjoiIn0=