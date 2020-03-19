'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../npm/@tarojs/taro-weapp/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Taro$getSystemInfoSy = _index2.default.getSystemInfoSync(),
    windowWidth = _Taro$getSystemInfoSy.windowWidth,
    windowHeight = _Taro$getSystemInfoSy.windowHeight,
    model = _Taro$getSystemInfoSy.model;

var isIphoneX = function isIphoneX() {
  return model.indexOf('iPhone X') > -1;
};

var cardWidth = windowWidth * .84,
    cardHeight = cardWidth / 1.8;

exports.default = {
  windowHeight: windowHeight,
  windowWidth: windowWidth,
  isIphoneX: isIphoneX,
  cardWidth: cardWidth,
  cardHeight: cardHeight,
  vi: '#643E28'
};