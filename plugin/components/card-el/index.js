"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2; // import '@tarojs/async-await'
// const { regeneratorRuntime } = global;


var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cardWidth = _index3.style.cardWidth,
    cardHeight = _index3.style.cardHeight,
    vi = _index3.style.vi;
var CardEl = (_temp2 = _class = function (_BaseComponent) {
  _inherits(CardEl, _BaseComponent);

  function CardEl() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CardEl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CardEl.__proto__ || Object.getPrototypeOf(CardEl)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "anonymousState__temp7", "$compid__4", "$compid__5", "$compid__6", "className", "isTextType", "imgUrl", "isSelect", "text", "styles", "__fn_onClick", "onTouch", "onDelete", "onEditText"], _this.touchStart = function (e) {
      var _e$touches$ = e.touches[0],
          clientX = _e$touches$.clientX,
          clientY = _e$touches$.clientY;

      _this.start_x = clientX;
      _this.start_y = clientY;
    }, _this.touchMove = function (e) {
      var _this$handleOnMoveEdg = _this.handleOnMoveEdge(e.touches[0]),
          left = _this$handleOnMoveEdg.left,
          top = _this$handleOnMoveEdg.top;

      _this.props.onMove(left, top);
    }, _this.touchEnd = function (e) {
      var _this$handleOnMoveEdg2 = _this.handleOnMoveEdge(e.changedTouches[0]),
          left = _this$handleOnMoveEdg2.left,
          top = _this$handleOnMoveEdg2.top;

      _this.posX = left;
      _this.posY = top;
    }, _this.sacleTouchStart = function (e) {
      var _e$touches$2 = e.touches[0],
          clientX = _e$touches$2.clientX,
          clientY = _e$touches$2.clientY;

      _this.start_sx = clientX;
      _this.start_sy = clientY;
    }, _this.sacleTouchMove = function (e) {
      var scale = _this.handleSacleLimit(e.touches[0]);
      _this.props.onScale(scale);
    }, _this.sacleTouchEnd = function (e) {
      var scale = _this.handleSacleLimit(e.changedTouches[0]);
      _this.scale = scale;
    }, _this.customComponents = ["NykIcon"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CardEl, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(CardEl.prototype.__proto__ || Object.getPrototypeOf(CardEl.prototype), "_constructor", this).call(this, props);

      var _props$styles = props.styles,
          width = _props$styles.width,
          height = _props$styles.height,
          left = _props$styles.left,
          top = _props$styles.top,
          scale = _props$styles.scale;

      this.width = width;
      this.height = height;
      this.posX = left;
      this.posY = top;
      this.minLeft = -width / 2;
      this.maxleft = cardWidth + this.minLeft;
      this.minTop = -height / 2;
      this.maxTop = cardHeight + this.minTop;
      this.scale = scale;

      this.$$refs = [];
    }
  }, {
    key: "handleSacleLimit",
    value: function handleSacleLimit(e) {
      var clientX = e.clientX;

      var move_x = clientX - this.start_sx;
      var scale = this.scale + move_x * 0.01;
      if (scale <= 0.5) {
        scale = 0.5;
      }
      if (scale >= 3) {
        scale = 3;
      }
      return scale;
    }
  }, {
    key: "handleOnMoveEdge",
    value: function handleOnMoveEdge(e) {
      var clientX = e.clientX,
          clientY = e.clientY;

      var move_x = clientX - this.start_x,
          move_y = clientY - this.start_y;
      var left = this.posX + move_x,
          top = this.posY + move_y;
      if (left < this.minLeft) {
        left = this.minLeft;
      }
      if (left > this.maxleft) {
        left = this.maxleft;
      }
      if (top < this.minTop) {
        top = this.minTop;
      }
      if (top > this.maxTop) {
        top = this.maxTop;
      }
      return { left: left, top: top };
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _index.genCompid)(__prefix + "$compid__4"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__4 = _genCompid2[0],
          $compid__4 = _genCompid2[1];

      var _genCompid3 = (0, _index.genCompid)(__prefix + "$compid__5"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__5 = _genCompid4[0],
          $compid__5 = _genCompid4[1];

      var _genCompid5 = (0, _index.genCompid)(__prefix + "$compid__6"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__6 = _genCompid6[0],
          $compid__6 = _genCompid6[1];

      var _props = this.__props,
          imgUrl = _props.imgUrl,
          isSelect = _props.isSelect,
          styles = _props.styles,
          className = _props.className,
          isTextType = _props.isTextType,
          text = _props.text;
      var width = styles.width,
          height = styles.height,
          left = styles.left,
          top = styles.top,
          rotate = styles.rotate,
          zIndex = styles.zIndex,
          scale = styles.scale,
          fontSize = styles.fontSize,
          color = styles.color;

      var style = {
        width: width + 'px',
        height: height + 'px',
        left: left + 'px',
        top: top + 'px',
        transform: "rotate(" + rotate + "deg) scale(" + scale + ")",
        position: 'absolute',
        zIndex: zIndex + 1
      };
      var anonymousState__temp = (0, _index.internal_inline_style)(style);
      var anonymousState__temp2 = isTextType ? (0, _index.internal_inline_style)({
        fontSize: fontSize + 'px',
        textAlign: 'center',
        width: width + 'px',
        height: height + 'px',
        display: 'block',
        lineHeight: height + 'px',
        color: color
      }) : null;
      var anonymousState__temp3 = (0, _index.internal_inline_style)({
        width: width + 'px',
        height: height + 'px',
        display: 'block',
        zIndex: 9
      });
      var anonymousState__temp4 = isSelect ? (0, _index.internal_inline_style)({
        width: width + 4 + 'px',
        height: height + 4 + 'px',
        position: 'absolute',
        left: '-2px',
        top: '-2px',
        zIndex: 99,
        border: "2px solid " + vi
      }) : null;
      var anonymousState__temp5 = isSelect ? (0, _index.internal_inline_style)({
        position: 'absolute',
        right: '-10px',
        bottom: '-10px',
        zIndex: 999,
        display: 'block'
      }) : null;
      var anonymousState__temp6 = isSelect ? (0, _index.internal_inline_style)({
        position: 'absolute',
        left: '-10px',
        top: '-10px',
        zIndex: 999,
        display: 'block'
      }) : null;
      var anonymousState__temp7 = isTextType ? (0, _index.internal_inline_style)({
        position: 'absolute',
        right: '-10px',
        top: '-10px',
        zIndex: 999,
        display: 'block'
      }) : null;
      isSelect && _index.propsManager.set({
        "value": "suofang",
        "color": vi,
        "size": 40
      }, $compid__4, $prevCompid__4);
      isSelect && _index.propsManager.set({
        "value": "close_full",
        "color": vi,
        "size": 40
      }, $compid__5, $prevCompid__5);
      isSelect && isTextType && _index.propsManager.set({
        "value": "close_full",
        "color": vi,
        "size": 40
      }, $compid__6, $prevCompid__6);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        $compid__4: $compid__4,
        $compid__5: $compid__5,
        $compid__6: $compid__6,
        className: className,
        isTextType: isTextType,
        imgUrl: imgUrl,
        isSelect: isSelect,
        text: text
      });
      return this.__state;
    }
  }, {
    key: "funPrivateizzzz",
    value: function funPrivateizzzz() {
      return this.props.onTouch.apply(undefined, Array.prototype.slice.call(arguments, 1));
    }
  }, {
    key: "funPrivatejzzzz",
    value: function funPrivatejzzzz() {
      return this.props.onDelete.apply(undefined, Array.prototype.slice.call(arguments, 1));
    }
  }, {
    key: "funPrivatebazzz",
    value: function funPrivatebazzz() {
      return this.props.onEditText.apply(undefined, Array.prototype.slice.call(arguments, 1));
    }
  }]);

  return CardEl;
}(_index.Component), _class.$$events = ["funPrivateizzzz", "touchStart", "touchMove", "touchEnd", "sacleTouchStart", "sacleTouchMove", "sacleTouchEnd", "funPrivatejzzzz", "funPrivatebazzz"], _class.options = {
  addGlobalClass: true
}, _class.defaultProps = {
  styles: {}
}, _class.$$componentPath = "plugin/components/card-el/index", _temp2);
exports.default = CardEl;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(CardEl));