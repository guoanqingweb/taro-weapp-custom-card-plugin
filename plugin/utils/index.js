'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _style = require('./style.js');

Object.defineProperty(exports, 'style', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_style).default;
  }
});
exports.mergeStyle = mergeStyle;
exports.paramsToUrl = paramsToUrl;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var objectToString = function objectToString(style) {
  if (style && (typeof style === 'undefined' ? 'undefined' : _typeof(style)) === 'object') {
    var styleStr = '';
    Object.keys(style).forEach(function (key) {
      var lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      styleStr += lowerCaseKey + ':' + style[key] + ';';
    });
    return styleStr;
  } else if (style && typeof style === 'string') {
    return style;
  }
  return '';
};

/**
 * @param {*} style1 
 * @param {*} style2 
 * mergeStyle
 */
function mergeStyle(style1, style2) {
  if (style1 && (typeof style1 === 'undefined' ? 'undefined' : _typeof(style1)) === 'object' && style2 && (typeof style2 === 'undefined' ? 'undefined' : _typeof(style2)) === 'object') {
    return Object.assign({}, style1, style2);
  }
  return objectToString(style1) + objectToString(style2);
}

function paramsToUrl(url, params) {
  Object.keys(params).map(function (key) {
    return url += key + '=' + params[key] + '&';
  });
  url = url.substring(url.length - 1, 1);
  return url;
}