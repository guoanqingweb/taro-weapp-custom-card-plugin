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

var _index3 = require("../../const/index.js");

var _index4 = require("../../utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var windowHeight = _index4.style.windowHeight,
    windowWidth = _index4.style.windowWidth,
    isIphoneX = _index4.style.isIphoneX,
    cardWidth = _index4.style.cardWidth,
    cardHeight = _index4.style.cardHeight;
var Checkout = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Checkout, _BaseComponent);

  function Checkout() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Checkout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Checkout.__proto__ || Object.getPrototypeOf(Checkout)).call.apply(_ref, [this].concat(args))), _this2), _this2.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "$compid__2", "$compid__3", "logoState", "cardTemPath", "saveState", "saveImgPath", "showModal"], _this2.config = {
      disableScroll: true
    }, _this2.customComponents = ["NykIcon"], _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Checkout, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Checkout.prototype.__proto__ || Object.getPrototypeOf(Checkout.prototype), "_constructor", this).call(this);
      this.getCacheImgPath();
      this.state = {
        logoState: false,
        saveState: false,
        saveImgPath: '',
        showModal: false
      };
      this.$$refs = [];
    }
  }, {
    key: "getCacheImgPath",
    value: function getCacheImgPath() {
      var cardTemPath = _index2.default.getStorageSync(_index3.IMGPATH_CACHE_KEY_HOME);
      if (!cardTemPath) {
        _index2.default.navigateTo({
          url: _index3.IMGPATH_CACHE_KEY_ENTRY
        });
      } else {
        this.cardTemPath = cardTemPath;
      }
    }
  }, {
    key: "toCardPage",
    value: function toCardPage() {
      _index2.default.navigateTo({
        url: _index3.IMGPATH_CACHE_KEY_ENTRY
      });
    }
  }, {
    key: "selectCardBack",
    value: function selectCardBack() {
      _index2.default.navigateTo({
        url: '/pages/index/index'
      });
    }
  }, {
    key: "createCanvasImg",
    value: function createCanvasImg() {
      _index2.default.showLoading();
      var x = (windowWidth - cardWidth) / 2,
          y = (windowWidth - cardWidth) / 2;
      var ctx = _index2.default.createCanvasContext('canvas', this.$scope);
      ctx.setFillStyle('#fff');
      ctx.fillRect(0, 0, windowWidth, 500);

      ctx.drawImage(this.cardTemPath, x, y, cardWidth, cardHeight);

      ctx.setFillStyle('#000');
      ctx.setFontSize(20);
      ctx.fillText('空白区域可以随意定制哦！', x, cardHeight + y * 3);

      ctx.draw(false, this.canvasToTempFilePath());
    }
  }, {
    key: "canvasToTempFilePath",
    value: function canvasToTempFilePath() {
      var _this = this;
      setTimeout(function () {
        return _index2.default.canvasToTempFilePath({
          canvasId: 'canvas',
          success: function success(res) {
            _this.saveImageToPhotosAlbum(res.tempFilePath);
          },
          fail: function fail(res) {
            _index2.default.showToast({
              icon: 'error',
              title: '保存失败,请重试！'
            });
          },
          complete: function complete() {
            _index2.default.hideLoading();
          }
        }, _this.$scope);
      }, 50);
    }
  }, {
    key: "saveImageToPhotosAlbum",
    value: function saveImageToPhotosAlbum(locapath) {
      var _this = this;
      _index2.default.saveImageToPhotosAlbum({
        filePath: locapath,
        success: function success() {
          _this.setState({
            saveImgPath: locapath,
            showModal: true,
            saveState: true
          });
        },
        fail: function fail() {
          _index2.default.showModal({
            title: '保存失败',
            content: '您已拒绝授权!',
            showCancel: false
          });
        }
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this3 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      var cardTemPath = this.cardTemPath;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__2"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__2 = _genCompid2[0],
          $compid__2 = _genCompid2[1];

      var _genCompid3 = (0, _index.genCompid)(__prefix + "$compid__3"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__3 = _genCompid4[0],
          $compid__3 = _genCompid4[1];

      var _state = this.__state,
          logoState = _state.logoState,
          saveState = _state.saveState,
          saveImgPath = _state.saveImgPath;

      var anonymousState__temp = (0, _index.internal_inline_style)({ height: windowHeight + 'px', paddingBottom: isIphoneX() ? '34px' : 0 });
      var anonymousState__temp2 = (0, _index.internal_inline_style)({
        width: cardWidth + 'px',
        height: cardHeight + 'px'
      });

      this.anonymousFunc0 = function () {
        return _this3.setState({ logoState: !logoState });
      };

      var anonymousState__temp3 = this.__state.showModal ? {
        dispaly: 'block',
        position: 'absolute',
        width: '30PX',
        height: '30PX',
        top: '0',
        right: '0',
        backgroundColor: '#fff',
        transform: 'translate(50%,-50%)',
        borderRadius: '50%',
        lineHeight: '30PX'
      } : null;

      this.anonymousFunc1 = function () {
        return _this3.setState({ showModal: false });
      };

      var anonymousState__temp4 = this.__state.showModal ? (0, _index.internal_inline_style)({
        width: cardWidth + 'px',
        height: "420px"
      }) : null;
      var anonymousState__temp5 = (0, _index.internal_inline_style)({ width: windowWidth + 'px', height: "500px" });
      _index.propsManager.set({
        "value": "queding",
        "size": 28,
        "color": "#fff"
      }, $compid__2, $prevCompid__2);
      this.__state.showModal && _index.propsManager.set({
        "value": "close",
        "customStyle": anonymousState__temp3,
        "color": "#000",
        "size": 26,
        "className": "thumb-item_icon",
        "onClick": this.anonymousFunc1
      }, $compid__3, $prevCompid__3);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        $compid__2: $compid__2,
        $compid__3: $compid__3,
        cardTemPath: cardTemPath
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }]);

  return Checkout;
}(_index.Component), _class.$$events = ["anonymousFunc0", "selectCardBack", "createCanvasImg"], _class.$$componentPath = "plugin/pages/checkout/checkout", _temp2);
exports.default = Checkout;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Checkout, true));