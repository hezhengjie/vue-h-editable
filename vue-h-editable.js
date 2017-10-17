!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define("VueEditable",[],factory):"object"==typeof exports?exports.VueEditable=factory():root.VueEditable=factory()}(this,function(){/******/
return function(modules){/******/
/******/
// The require function
/******/
function __webpack_require__(moduleId){/******/
/******/
// Check if module is in cache
/******/
if(installedModules[moduleId])/******/
return installedModules[moduleId].exports;/******/
// Create a new module (and put it into the cache)
/******/
var module=installedModules[moduleId]={/******/
i:moduleId,/******/
l:!1,/******/
exports:{}};/******/
/******/
// Return the exports of the module
/******/
/******/
/******/
// Execute the module function
/******/
/******/
/******/
// Flag the module as loaded
/******/
return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}// webpackBootstrap
/******/
// The module cache
/******/
var installedModules={};/******/
/******/
// Load entry module and return exports
/******/
/******/
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
/******/
// expose the module cache
/******/
/******/
/******/
// define getter function for harmony exports
/******/
/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
/******/
/******/
// __webpack_public_path__
/******/
return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){/******/
__webpack_require__.o(exports,name)||/******/
Object.defineProperty(exports,name,{/******/
configurable:!1,/******/
enumerable:!0,/******/
get:getter})},__webpack_require__.n=function(module){/******/
var getter=module&&module.__esModule?/******/
function(){return module.default}:/******/
function(){return module};/******/
/******/
return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([/* 0 */
/***/
function(module,exports){var vueEditAble={};vueEditAble.install=function(Vue,options){Vue.directive("editable",{plaintextOnly:options&&options.plaintextOnly||!1,bind:function(el,binding,vnode){binding.value;binding.handler=function(){var content=binding.def.plaintextOnly?el.innerText:el.innerHTML;vnode.context.$data[binding.expression]=content}.bind(this),el.addEventListener("input",binding.handler),el.innerHTML=binding.value||""},inserted:function(el,binding){binding.def.plaintextOnly?el.setAttribute("contenteditable","plaintext-only"):el.setAttribute("contenteditable",!0)},update:function(el,binding){},unbind:function(el,binding){el.removeEventListener("input",binding.handler)}})},module.exports=vueEditAble}])});