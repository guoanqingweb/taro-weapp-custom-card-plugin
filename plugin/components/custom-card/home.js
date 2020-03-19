"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

require("../../npm/@tarojs/async-await/index.js");

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _global = global,
    regeneratorRuntime = _global.regeneratorRuntime;
var windowHeight = _index3.style.windowHeight,
    windowWidth = _index3.style.windowWidth,
    isIphoneX = _index3.style.isIphoneX;


var testImg = 'https://static.21cake.com/upload/images/97f050b824945b92c57e46d497dc02f8.jpg';

var cardWidth = windowWidth * .8,
    cardHeight = cardWidth / 1.8,
    thumbWidth = windowWidth / 4,
    CARDFACE_CACHE_KEY = 'custom-cardface_canvaspath';

var Home = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Home, _BaseComponent);

  function Home() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this2), _this2.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp8", "anonymousState__temp9", "anonymousState__temp16", "anonymousState__temp19", "loopArray6", "loopArray7", "loopArray8", "loopArray9", "loopArray10", "cardEls", "editElIndex", "editElRotate", "thumbActiveIndex", "$anonymousCallee__4", "$anonymousCallee__5", "testImg", "showTextElArea", "showTextElInput", "elInputText", "$anonymousCallee__6", "textSwiperCurrent", "$anonymousCallee__7", "validLength", "canAddEl", "renderSwiper", "canvasImage"], _this2.moveEl = function (left, top) {
      _this2.changeElStyle({ left: left, top: top });
    }, _this2.scaleEl = function (scale) {
      _this2.changeElStyle({ scale: scale });
    }, _this2.rotateEl = function (e) {
      var value = e.detail.value;

      _this2.changeElStyle({ rotate: value });
    }, _this2.editElText = function (e) {
      var text = _this2.getOnEditEl().text;
      _this2.setState({
        showTextElInput: true,
        elInputText: text
      });
    }, _this2.deleteEl = function () {
      var index = _this2.state.cardEls.findIndex(function (item) {
        return item.idx === _this2.state.editElIndex;
      });
      var _cardEls = _this2.state.cardEls;
      _cardEls[index].isValid = false;
      _this2.setState({
        cardEls: _cardEls,
        editElIndex: 0,
        canAddEl: true
        // showTextElArea: false
        // textSwiperCurrent: 0,
      });
      _this2.refreshSwiperDom();
    }, _this2.handleThumbClick = function (item) {
      if (_this2.getValidEls().length === 10) {
        _this2.setState({
          canAddEl: false
        });
        return;
      }
      _this2.addNewEl(item);
    }, _this2.handleAddTextEl = function (e) {

      if (_this2.state.editElIndex === 0) {
        if (_this2.getThumbTextEls().length > 10) {
          _index2.default.showToast({
            icon: 'none',
            title: '最多只能定制10条哦！'
          });
          return;
        }
        _this2.addNewEl(_this2.state.elInputText, true);
        return;
      } else {
        var width = _this2.getTextElWidth(_this2.state.elInputText);
        _this2.changeElStyle({ text: _this2.state.elInputText, width: width });
      }
    }, _this2.handleTextElInput = function (e) {
      var value = e.detail.value;
      _this2.setState({ elInputText: value }, function () {
        return console.log(_this2.state.elInputText);
      });
    }, _this2.handleTextInputBlur = function (e) {
      _this2.setState({
        showTextElInput: false
      });
    }, _this2.getValidEls = function () {
      var cardEls = _this2.state.cardEls;

      return cardEls.length > 0 && cardEls.filter(function (item) {
        return item.isValid;
      }) || [];
    }, _this2.getThumbTextEls = function () {
      var els = _this2.getValidEls().filter(function (item) {
        return item.isTextType;
      }) || [];
      return [].concat(_toConsumableArray(els), [{ text: '新建', add: true }]);
    }, _this2.changeTextSwiper = function (e) {
      var textEls = _this2.getThumbTextEls(),
          current = e.detail.current;

      if (textEls.length - 1 === current) {
        _this2.setState({
          editElIndex: 0,
          textSwiperCurrent: textEls.length - 1
        });
        return;
      } else {
        _this2.setState({
          editElIndex: textEls[current].idx
        });
      }
    }, _this2.handleThumbTabClick = function (idx) {
      if (idx === 3) {
        _this2.setState({
          showTextElArea: true,
          thumbActiveIndex: idx,
          showTextElInput: true,
          editElIndex: 0,
          elInputText: ''
        });
        return;
      }
      _this2.setState({
        thumbActiveIndex: idx,
        showTextElArea: false,
        editElIndex: 0
      });
    }, _this2.handleThumElsClick = function (idx) {
      var cardEls = _this2.state.cardEls;

      var clickEl = cardEls.find(function (item) {
        return item.idx === idx;
      });
      if (clickEl.isTextType) {
        var index = _this2.getThumbTextEls().findIndex(function (item) {
          return item.idx === idx;
        });
        _this2.setState({
          editElIndex: idx,
          showTextElArea: clickEl.isTextType,
          textSwiperCurrent: index === -1 ? 0 : index
        });
      } else {
        _this2.setState({
          editElIndex: idx,
          showTextElArea: clickEl.isTextType
        });
      }
    }, _this2.anonymousFunc1Map = {}, _this2.anonymousFunc2Map = {}, _this2.anonymousFunc3Map = {}, _this2.anonymousFunc4Map = {}, _this2.anonymousFunc5Map = {}, _this2.customComponents = ["CardEl"], _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Home, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "_constructor", this).call(this);
      this.state = {
        cardEls: [],
        thumbActiveIndex: 3,
        canAddEl: true,
        editElIndex: 0,
        showTextElArea: false,
        showTextElInput: true,
        elInputText: '',
        textSwiperCurrent: 0,
        renderSwiper: true,
        canvasImage: testImg
      };
      this.cardCoverImg = testImg;
      this.$$refs = [];
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // const query = Taro.createSelectorQuery()
      // query.in(this.$scope)
      // query
      //   .select('#cardel-text')
      //   .boundingClientRect(rect => {
      //     this.cardElTextHeight = rect.height
      //   })
      //   .exec()
    }
  }, {
    key: "changeElStyle",
    value: function changeElStyle(style) {
      var _this3 = this;

      var _cardEls = this.state.cardEls.map(function (item) {
        return item.idx === _this3.state.editElIndex ? _extends({}, item, style) : item;
      });
      this.setState({
        cardEls: _cardEls
      });
    }
  }, {
    key: "refreshSwiperDom",
    value: function refreshSwiperDom() {
      var _this4 = this;

      this.setState({
        renderSwiper: false
      });
      setTimeout(function () {
        return _this4.setState({ renderSwiper: true });
      }, 16);
    }
  }, {
    key: "addNewEl",
    value: function addNewEl(el) {
      var isText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var cardEls = this.state.cardEls,
          width = isText ? this.getTextElWidth(el) : thumbWidth,
          height = isText ? 40 : thumbWidth,
          idx = new Date().getTime(),
          left = Math.round(Math.random() * (cardWidth - width)),
          top = Math.round(Math.random() * (cardHeight - height));

      var props = {
        isTextType: isText,
        width: width,
        height: height,
        left: left,
        top: top,
        rotate: 0,
        scale: 1,
        idx: idx,
        isValid: true
      };
      if (isText) {
        props.text = el;
        props.fontSize = 20;
        props.color = '#000';
      } else {
        props.imgUrl = el;
      }
      cardEls.push(props);
      this.setState({
        cardEls: cardEls,
        editElIndex: idx
      });
      this.refreshSwiperDom();
    }
  }, {
    key: "getOnEditEl",
    value: function getOnEditEl() {
      var _this5 = this;

      var cardEls = this.state.cardEls;

      return cardEls.length > 0 && cardEls.find(function (item) {
        return item.idx === _this5.state.editElIndex;
      });
    }
  }, {
    key: "getTextElWidth",
    value: function getTextElWidth(text) {
      var ctx = _index2.default.createCanvasContext('canvas');
      ctx.font = "20px";
      var metrics = ctx.measureText(text);
      return metrics.width + 20;
    }
  }, {
    key: "canvasDrawImg",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(src) {
        var cardEls, ctx, _this, i, _cardEls$i, isTextType, imgUrl, text, left, top, width, height, scale, rotate, color, fontSize, tran_x, tran_y;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _index2.default.showLoading({
                  title: '生成中'
                });
                cardEls = this.getValidEls();
                ctx = _index2.default.createCanvasContext('canvas', this);
                _this = this;

                ctx.width = cardWidth;
                ctx.height = cardHeight;
                _context.t0 = ctx;
                _context.next = 9;
                return this.getImageInfo(this.cardCoverImg);

              case 9:
                _context.t1 = _context.sent;
                _context.t2 = cardWidth;
                _context.t3 = cardHeight;

                _context.t0.drawImage.call(_context.t0, _context.t1, 0, 0, _context.t2, _context.t3);

                i = 0;

              case 14:
                if (!(i < cardEls.length)) {
                  _context.next = 45;
                  break;
                }

                _cardEls$i = cardEls[i], isTextType = _cardEls$i.isTextType, imgUrl = _cardEls$i.imgUrl, text = _cardEls$i.text, left = _cardEls$i.left, top = _cardEls$i.top, width = _cardEls$i.width, height = _cardEls$i.height, scale = _cardEls$i.scale, rotate = _cardEls$i.rotate, color = _cardEls$i.color, fontSize = _cardEls$i.fontSize;

                left = left - (scale - 1) * width / 2;
                top = top - (scale - 1) * height / 2;
                width = width * scale;
                height = height * scale;
                tran_x = width / 2, tran_y = height / 2;

                ctx.translate(tran_x + left, tran_y + top);
                ctx.rotate(rotate * Math.PI / 180);

                if (!isTextType) {
                  _context.next = 31;
                  break;
                }

                ctx.setFontSize(fontSize * scale);
                ctx.setFillStyle(color);
                ctx.setTextBaseline('middle');
                ctx.setTextAlign('center');
                ctx.fillText(text, -tran_x + width / 2, -tran_y + height / 2, width);
                _context.next = 40;
                break;

              case 31:
                _context.t4 = ctx;
                _context.next = 34;
                return this.getImageInfo(imgUrl);

              case 34:
                _context.t5 = _context.sent;
                _context.t6 = -tran_x;
                _context.t7 = -tran_y;
                _context.t8 = width;
                _context.t9 = height;

                _context.t4.drawImage.call(_context.t4, _context.t5, _context.t6, _context.t7, _context.t8, _context.t9);

              case 40:
                ctx.rotate(-(rotate * Math.PI / 180));
                ctx.translate(-(tran_x + left), -(tran_y + top));

              case 42:
                i++;
                _context.next = 14;
                break;

              case 45:

                ctx.draw(false, _this.canvasToTempFilePath());

              case 46:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function canvasDrawImg(_x2) {
        return _ref2.apply(this, arguments);
      }

      return canvasDrawImg;
    }()
  }, {
    key: "getImageInfo",
    value: function getImageInfo(path) {
      return new Promise(function (resolve, reject) {
        _index2.default.getImageInfo({
          src: path,
          success: function success(res) {
            resolve(res.path);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      }).then(function (res) {
        return res;
      }).catch(function (err) {
        return _index2.default.showModal({
          title: '制作失败！',
          content: '图片制作失败请重试！' + err.errMsg,
          showCancel: false
        });
      });
    }
  }, {
    key: "canvasToTempFilePath",
    value: function canvasToTempFilePath() {
      var _this = this;
      setTimeout(function () {
        return _index2.default.canvasToTempFilePath({
          canvasId: 'canvas',
          success: function success(res) {
            _this.setState({
              canvasImage: res.tempFilePath
            });
            _index2.default.setStorage({
              key: CARDFACE_CACHE_KEY,
              data: res.tempFilePath,
              success: function success() {
                _index2.default.showToast({
                  title: '制作成功',
                  mask: true,
                  success: function success() {}
                });
                _index2.default.navigateTo({
                  url: '/pages/index/index'
                });
              }
            });
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
      }, 100);
    }
  }, {
    key: "saveImageToPhotosAlbum",
    value: function saveImageToPhotosAlbum(locapath) {
      _index2.default.saveImageToPhotosAlbum({
        filePath: locapath,
        success: function success(res) {
          _index2.default.showToast({
            title: '已保存到相册',
            icon: 'success',
            duration: 3000
          });
        },
        fail: function fail(res) {
          _index2.default.showModal({
            title: '保存失败',
            content: '您已拒绝授权'
          });
        }
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this6 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _state = this.__state,
          cardEls = _state.cardEls,
          thumbActiveIndex = _state.thumbActiveIndex,
          canAddEl = _state.canAddEl,
          editElIndex = _state.editElIndex,
          showTextElArea = _state.showTextElArea,
          showTextElInput = _state.showTextElInput,
          textSwiperCurrent = _state.textSwiperCurrent;

      var editElRotate = this.getOnEditEl() && this.getOnEditEl().rotate || 0;
      var validLength = this.getValidEls().length || 0;
      var anonymousState__temp = (0, _index.internal_inline_style)({ height: windowHeight + 'px', paddingBottom: isIphoneX() ? '34px' : 0 });

      this.anonymousFunc0 = function () {
        return _this6.setState({ editElIndex: 0 });
      };

      var anonymousState__temp2 = (0, _index.internal_inline_style)({
        width: cardWidth + 'px',
        height: cardHeight + 'px'
      });
      var anonymousState__temp3 = (0, _index.internal_inline_style)({
        width: cardWidth + 'px',
        height: cardHeight + 'px',
        left: 0,
        top: 0,
        zIndex: 0,
        position: 'absolute'
      });
      var anonymousState__temp8 = (0, _index.internal_inline_style)({});
      var anonymousState__temp9 = (0, _index.internal_inline_style)({
        width: Math.ceil(4.5) * thumbWidth + "px",
        height: thumbWidth * 1.6 + 'px',
        opacity: canAddEl ? 1 : .3
      });
      var anonymousState__temp16 = this.__state.renderSwiper ? (0, _index.internal_inline_style)({ height: '120px', position: 'relative', zIndex: 9 }) : null;
      var anonymousState__temp19 = (0, _index.internal_inline_style)({ width: cardWidth + 'px', height: cardHeight + 'px' });
      var $anonymousCallee__4 = Array(10).fill('');
      var $anonymousCallee__5 = Array(9).fill('');
      var $anonymousCallee__6 = showTextElArea ? Array(20).fill('') : [];
      var $anonymousCallee__7 = this.__state.renderSwiper ? this.getThumbTextEls() : [];
      var loopArray6 = cardEls.map(function (item, zIndex) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var _item$$original = item.$original,
            width = _item$$original.width,
            height = _item$$original.height,
            left = _item$$original.left,
            top = _item$$original.top,
            rotate = _item$$original.rotate,
            scale = _item$$original.scale,
            imgUrl = _item$$original.imgUrl,
            idx = _item$$original.idx,
            isValid = _item$$original.isValid,
            fontSize = _item$$original.fontSize,
            color = _item$$original.color,
            isTextType = _item$$original.isTextType,
            text = _item$$original.text;

        var $loopState__temp5 = isValid ? { width: width, height: height, left: left, top: top, scale: scale, rotate: rotate, fontSize: fontSize, color: color, zIndex: zIndex } : null;
        var $loopState__temp7 = isValid ? editElIndex === idx : null;

        var _$indexKey = "bbzzz" + zIndex;

        _this6.anonymousFunc1Map[_$indexKey] = function () {
          return _this6.handleThumElsClick(idx);
        };

        var _genCompid = (0, _index.genCompid)(__prefix + "bgzzzzzzzz" + zIndex, true),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__7 = _genCompid2[0],
            $compid__7 = _genCompid2[1];

        isValid && _index.propsManager.set({
          "className": "card-el",
          "imgUrl": imgUrl,
          "text": text,
          "styles": $loopState__temp5,
          "idx": idx,
          "isTextType": isTextType,
          "isSelect": $loopState__temp7,
          "onScale": _this6.scaleEl,
          "onMove": _this6.moveEl,
          "onTouch": _this6.anonymousFunc1.bind(_this6, _$indexKey),
          "onDelete": _this6.deleteEl,
          "onEditText": _this6.editElText
        }, $compid__7, $prevCompid__7);
        return {
          width: width,
          height: height,
          left: left,
          top: top,
          rotate: rotate,
          scale: scale,
          imgUrl: imgUrl,
          isValid: isValid,
          fontSize: fontSize,
          color: color,
          isTextType: isTextType,
          text: text,
          $loopState__temp5: $loopState__temp5,
          $loopState__temp7: $loopState__temp7,
          _$indexKey: _$indexKey,
          $compid__7: $compid__7,
          $original: item.$original
        };
      });
      var loopArray7 = Array(10).fill('').map(function (item, idx) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var _$indexKey2 = "bczzz" + idx;

        _this6.anonymousFunc2Map[_$indexKey2] = function () {
          return _this6.handleThumbTabClick(idx);
        };

        return {
          _$indexKey2: _$indexKey2,
          $original: item.$original
        };
      });
      var loopArray8 = Array(9).fill('').map(function (item, idx) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var _$indexKey3 = "bdzzz" + idx;

        _this6.anonymousFunc3Map[_$indexKey3] = function () {
          return _this6.handleThumbClick(testImg);
        };

        var $loopState__temp11 = (0, _index.internal_inline_style)({
          width: thumbWidth + 'px',
          height: thumbWidth * .8 + 'px'
        });
        var $loopState__temp13 = (0, _index.internal_inline_style)({
          width: thumbWidth * .5 + 'px',
          height: thumbWidth * .5 + 'px'
        });
        return {
          _$indexKey3: _$indexKey3,
          $loopState__temp11: $loopState__temp11,
          $loopState__temp13: $loopState__temp13,
          $original: item.$original
        };
      });
      var loopArray9 = showTextElArea ? Array(20).fill('').map(function (item, idx) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };

        var _$indexKey4 = "bezzz" + idx;

        _this6.anonymousFunc4Map[_$indexKey4] = function () {
          return _this6.changeElStyle({ color: "#" + Math.random().toString(16).slice(-6) });
        };

        var $loopState__temp15 = showTextElArea ? (0, _index.internal_inline_style)({ backgroundColor: "#" + Math.random().toString(16).slice(-6) }) : null;
        return {
          _$indexKey4: _$indexKey4,
          $loopState__temp15: $loopState__temp15,
          $original: item.$original
        };
      }) : [];
      var loopArray10 = this.__state.renderSwiper ? this.getThumbTextEls().map(function (item, idx) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };
        var $loopState__temp18 = _this6.__state.renderSwiper ? (0, _index.internal_inline_style)({
          height: '40px',
          color: "" + (item.$original.add ? '#1aad19' : '#333333')
        }) : null;

        var _$indexKey5 = "bfzzz" + idx;

        _this6.anonymousFunc5Map[_$indexKey5] = function () {
          return item.$original.add ? _this6.setState({ showTextElInput: true, elInputText: '' }) : null;
        };

        return {
          $loopState__temp18: $loopState__temp18,
          _$indexKey5: _$indexKey5,
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp8: anonymousState__temp8,
        anonymousState__temp9: anonymousState__temp9,
        anonymousState__temp16: anonymousState__temp16,
        anonymousState__temp19: anonymousState__temp19,
        loopArray6: loopArray6,
        loopArray7: loopArray7,
        loopArray8: loopArray8,
        loopArray9: loopArray9,
        loopArray10: loopArray10,
        editElRotate: editElRotate,
        $anonymousCallee__4: $anonymousCallee__4,
        $anonymousCallee__5: $anonymousCallee__5,
        testImg: testImg,
        $anonymousCallee__6: $anonymousCallee__6,
        $anonymousCallee__7: $anonymousCallee__7,
        validLength: validLength
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
    value: function anonymousFunc1(_$indexKey) {
      var _anonymousFunc1Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc1Map[_$indexKey] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey].apply(_anonymousFunc1Map, e);
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(_$indexKey2) {
      var _anonymousFunc2Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc2Map[_$indexKey2] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey2].apply(_anonymousFunc2Map, e);
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(_$indexKey3) {
      var _anonymousFunc3Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc3Map[_$indexKey3] && (_anonymousFunc3Map = this.anonymousFunc3Map)[_$indexKey3].apply(_anonymousFunc3Map, e);
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(_$indexKey4) {
      var _anonymousFunc4Map;

      ;

      for (var _len5 = arguments.length, e = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        e[_key5 - 1] = arguments[_key5];
      }

      return this.anonymousFunc4Map[_$indexKey4] && (_anonymousFunc4Map = this.anonymousFunc4Map)[_$indexKey4].apply(_anonymousFunc4Map, e);
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(_$indexKey5) {
      var _anonymousFunc5Map;

      ;

      for (var _len6 = arguments.length, e = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        e[_key6 - 1] = arguments[_key6];
      }

      return this.anonymousFunc5Map[_$indexKey5] && (_anonymousFunc5Map = this.anonymousFunc5Map)[_$indexKey5].apply(_anonymousFunc5Map, e);
    }
  }]);

  return Home;
}(_index.Component), _class.$$events = ["anonymousFunc0", "rotateEl", "anonymousFunc2", "anonymousFunc3", "handleTextElInput", "handleTextInputBlur", "handleAddTextEl", "anonymousFunc4", "changeTextSwiper", "anonymousFunc5", "canvasDrawImg"], _class.multipleSlots = true, _class.$$componentPath = "plugin/components/custom-card/home", _temp2);
exports.default = Home;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Home));