(this["webpackJsonpjavascript-calculator"]=this["webpackJsonpjavascript-calculator"]||[]).push([[0],{15:function(e,_,r){},16:function(e,_,r){},18:function(e,_,r){"use strict";r.r(_);var a=r(2),t=r.n(a),s=r(5),l=r.n(s),i=(r(15),r.p,r(16),r(6)),u=r(0);var c=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(i.a,{})})},n=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,19)).then((function(_){var r=_.getCLS,a=_.getFID,t=_.getFCP,s=_.getLCP,l=_.getTTFB;r(e),a(e),t(e),s(e),l(e)}))};l.a.render(Object(u.jsx)(t.a.StrictMode,{children:Object(u.jsx)(c,{})}),document.getElementById("root")),n()},6:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Calculator}));var C_Users_huyvu_FCC_Projects_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),C_Users_huyvu_FCC_Projects_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),C_Users_huyvu_FCC_Projects_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),C_Users_huyvu_FCC_Projects_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),C_Users_huyvu_FCC_Projects_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10),C_Users_huyvu_FCC_Projects_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__),DIGIT_LIMIT=22,equals={id:"equals",value:"="},numbers=[{id:"zero",value:0},{id:"one",value:1},{id:"two",value:2},{id:"three",value:3},{id:"four",value:4},{id:"five",value:5},{id:"six",value:6},{id:"seven",value:7},{id:"eight",value:8},{id:"nine",value:9}],operators=[{id:"add",value:"+"},{id:"subtract",value:"-"},{id:"multiply",value:"x"},{id:"divide",value:"/"}],decimal={id:"decimal",value:"."},clear={id:"clear",value:"AC"},Calculator=function(_Component){Object(C_Users_huyvu_FCC_Projects_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator,_Component);var _super=Object(C_Users_huyvu_FCC_Projects_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.a)(Calculator);function Calculator(e){var _;return Object(C_Users_huyvu_FCC_Projects_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,Calculator),(_=_super.call(this,e)).state={displayCharacters:[],currVal:[],numOperators:0,prevCalculation:[],result:[],exceedLimit:!1},_.clear=_.clear.bind(Object(C_Users_huyvu_FCC_Projects_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(_)),_.addCharacter=_.addCharacter.bind(Object(C_Users_huyvu_FCC_Projects_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(_)),_.calculate=_.calculate.bind(Object(C_Users_huyvu_FCC_Projects_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(_)),_.isOperator=_.isOperator.bind(Object(C_Users_huyvu_FCC_Projects_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(_)),_}return Object(C_Users_huyvu_FCC_Projects_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,[{key:"isOperator",value:function(e){return["+","-","x","\u22c5","/"].includes(e)}},{key:"calculate",value:function calculate(){for(var currExpression=[],i=0;i<this.state.displayCharacters.length;i++)"\u22c5"===this.state.displayCharacters[i]?currExpression.push("*"):currExpression.push(this.state.displayCharacters[i]);for(var topCharacter=currExpression[currExpression.length-1];currExpression.length>0&&this.isOperator(topCharacter);)currExpression.pop(),topCharacter=currExpression[currExpression.length-1];try{for(var result=Math.round(1e4*(eval(currExpression.join(""))+Number.EPSILON))/1e4,_i=0;_i<currExpression.length;_i++)"*"===currExpression[_i]&&(currExpression[_i]="\u22c5");currExpression.push("="),this.setState({prevCalculation:currExpression,displayCharacters:[],currVal:[],result:[result]})}catch(error){console.error(error)}}},{key:"addCharacter",value:function(e){var _=this;if(this.state.displayCharacters.length>=DIGIT_LIMIT)return this.setState({exceedLimit:!0}),void setTimeout((function(){_.setState({exceedLimit:!1})}),900);if(0!==e||this.state.displayCharacters.length>0){var r=Object(C_Users_huyvu_FCC_Projects_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.currVal),a=Object(C_Users_huyvu_FCC_Projects_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.displayCharacters);if(this.isOperator(e)){r=[e],"x"===e&&(e="\u22c5");var t=(a=a.concat(this.state.result))[a.length-1];if(this.state.numOperators>=1)if("-"===e)"-"!==t&&a.push(e);else{for(;a.length>0&&this.isOperator(t);)a.pop(),t=a[a.length-1];a.push(e)}else a.push(e);this.setState({numOperators:this.state.numOperators+1})}else if("."===e){var s=!1;if(0===r.length||this.isOperator(r[0]))r.push(0),a.push(0),r.push(e),a.push(e);else{for(var l=0;l<r.length;l++)if("."===r[l]){s=!0;break}s||(r.push(e),a.push(e))}}else{var i=a[a.length-1];this.isOperator(i)?r=[e]:r.push(e),a.push(e),this.setState({numOperators:0})}this.setState({displayCharacters:a,currVal:r,prevCalculation:[],result:[]})}}},{key:"clear",value:function(){this.setState({prevCalculation:[],displayCharacters:[],currVal:[],result:[]})}},{key:"render",value:function(){var e=this,_=this.state.displayCharacters.length>0?this.state.displayCharacters.join(""):this.state.prevCalculation.length>0?this.state.prevCalculation.concat(this.state.result):" ",r="";return r=this.state.exceedLimit?"DIGIT LIMIT EXCEED":this.state.currVal.length>0?this.state.currVal.join(""):this.state.result.length>0?this.state.result.join(""):"0",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"grid-container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:equals.id,onClick:this.calculate,style:{gridArea:equals.id},children:equals.value}),numbers.map((function(_,r){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:_.id,className:"input-button",onClick:function(){return e.addCharacter(_.value)},style:{gridArea:_.id},children:_.value},r)})),operators.map((function(_,r){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:_.id,className:"input-button",onClick:function(){return e.addCharacter(_.value)},style:{gridArea:_.id},children:_.value},r)})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:decimal.id,className:"input-button",onClick:function(){return e.addCharacter(decimal.value)},style:{gridArea:decimal.id},children:decimal.value}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:clear.id,className:"input-button",onClick:this.clear,style:{gridArea:clear.id},children:clear.value}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"input",style:{gridArea:"input"},children:_}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"display",style:{gridArea:"output"},children:r})]})}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_6__.Component)}},[[18,1,2]]]);
//# sourceMappingURL=main.9d378a2a.chunk.js.map