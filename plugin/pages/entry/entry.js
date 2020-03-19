"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../utils/index.js");

var _index4 = require("../../const/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var windowHeight = _index3.style.windowHeight,
    windowWidth = _index3.style.windowWidth,
    isIphoneX = _index3.style.isIphoneX;


var testImg = 'https://wx.21cake.com/upload/images/97f050b824945b92c57e46d497dc02f8.jpg';

var Entry = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Entry, _Taro$Component);

  function Entry() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Entry);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Entry.__proto__ || Object.getPrototypeOf(Entry)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      disableScroll: true
    }, _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "loopArray12", "cardCoverImgs", "selectIndex"], _this.anonymousFunc0Map = {}, _this.customComponents = ["NykIcon"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Entry, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Entry.prototype.__proto__ || Object.getPrototypeOf(Entry.prototype), "_constructor", this).call(this, props);

      this.$$refs = [];
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _useState = (0, _index.useState)(0),
          _useState2 = _slicedToArray(_useState, 2),
          selectIndex = _useState2[0],
          changeIndex = _useState2[1];

      var cardCoverImgs = [testImg, testImg, testImg];

      function selectCardBack() {
        _index2.default.setStorage({
          key: _index4.IMGPATH_CACHE_KEY_ENTRY,
          data: cardCoverImgs[selectIndex],
          success: function success() {
            _index2.default.navigateTo({
              url: _index4.HOME_URL
            });
          }
        });
      }

      var anonymousState__temp = (0, _index.internal_inline_style)({ height: windowHeight + 'px', paddingBottom: isIphoneX() ? '34px' : 0 });
      var anonymousState__temp2 = (0, _index.internal_inline_style)({
        width: windowWidth * .84 + 'px',
        height: windowWidth * .84 / 1.8 + 'px'
      });
      this.anonymousFunc1 = selectCardBack;
      var loopArray12 = cardCoverImgs.map(function (item, idx) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var _$indexKey = "bjzzz" + idx;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return changeIndex(idx);
        };

        var $loopState__temp4 = {
          dispaly: 'block',
          position: 'absolute',
          width: '20PX',
          height: '20PX',
          top: '0',
          right: '0',
          backgroundColor: '#643E28',
          transform: 'translateX(50%)',
          borderRadius: '50%',
          lineHeight: '20PX',
          display: "" + (idx === selectIndex ? 'block' : 'none')
        };

        var _genCompid = (0, _index.genCompid)(__prefix + "cazzzzzzzz" + idx, true),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__9 = _genCompid2[0],
            $compid__9 = _genCompid2[1];

        _index.propsManager.set({
          "value": "queding",
          "customStyle": $loopState__temp4,
          "color": "#fff",
          "size": 24,
          "className": "thumb-item_icon"
        }, $compid__9, $prevCompid__9);
        return {
          _$indexKey: _$indexKey,
          $loopState__temp4: $loopState__temp4,
          $compid__9: $compid__9,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        loopArray12: loopArray12,
        cardCoverImgs: cardCoverImgs,
        selectIndex: selectIndex
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }]);

  return Entry;
}(_index2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1"], _class.$$componentPath = "plugin/pages/entry/entry", _temp2);


Entry.config = { disableScroll: true };
exports.default = Entry;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Entry, true));