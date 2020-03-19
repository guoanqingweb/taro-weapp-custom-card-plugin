import '@tarojs/async-await'
const { regeneratorRuntime } = global;
import Taro, { Component } from '@tarojs/taro'
import { View, Canvas, Slider, ScrollView, Image, Picker, Input, Navigator, Button, Swiper, SwiperItem } from '@tarojs/components'

import { style } from '@utils'

import CardEl from '@components/card-el'

let { windowHeight, windowWidth, isIphoneX } = style;

import './home.scss'

const testImg = 'https://static.21cake.com/upload/images/97f050b824945b92c57e46d497dc02f8.jpg'

const cardWidth = windowWidth * .8,
  cardHeight = cardWidth / 1.8,
  thumbWidth = windowWidth / 4,
  CARDFACE_CACHE_KEY = 'custom-cardface_canvaspath';


export default class Home extends Component {

  constructor() {
    super()
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
    }
    this.cardCoverImg = testImg;
  }

  componentDidMount() {
    // const query = Taro.createSelectorQuery()
    // query.in(this.$scope)
    // query
    //   .select('#cardel-text')
    //   .boundingClientRect(rect => {
    //     this.cardElTextHeight = rect.height
    //   })
    //   .exec()
  }

  moveEl = (left, top) => {
    this.changeElStyle({ left, top })
  }

  scaleEl = (scale) => {
    this.changeElStyle({ scale })
  }

  rotateEl = e => {
    let { value } = e.detail;
    this.changeElStyle({ rotate: value })
  }

  editElText = e => {
    let text = this.getOnEditEl().text
    this.setState({
      showTextElInput: true,
      elInputText: text
    })
  }

  deleteEl = () => {
    let index = this.state.cardEls.findIndex(item => item.idx === this.state.editElIndex)
    let _cardEls = this.state.cardEls
    _cardEls[index].isValid = false
    this.setState({
      cardEls: _cardEls,
      editElIndex: 0,
      canAddEl: true,
      // showTextElArea: false
      // textSwiperCurrent: 0,
    })
    this.refreshSwiperDom()
  }

  changeElStyle(style) {
    let _cardEls = this.state.cardEls.map(item => {
      return item.idx === this.state.editElIndex
        ? { ...item, ...style }
        : item
    })
    this.setState({
      cardEls: _cardEls
    })
  }

  handleThumbClick = (item) => {
    if (this.getValidEls().length === 10) {
      this.setState({
        canAddEl: false
      })
      return
    }
    this.addNewEl(item)
  }

  handleAddTextEl = e => {

    if (this.state.editElIndex === 0) {
      if (this.getThumbTextEls().length > 10) {
        Taro.showToast({
          icon: 'none',
          title: '最多只能定制10条哦！'
        })
        return
      }
      this.addNewEl(this.state.elInputText, true)
      return
    } else {
      let width = this.getTextElWidth(this.state.elInputText)
      this.changeElStyle({ text: this.state.elInputText, width })
    }
  }

  refreshSwiperDom() {
    this.setState({
      renderSwiper: false,
    })
    setTimeout(() => this.setState({ renderSwiper: true }), 16)
  }

  addNewEl(el, isText = false) {
    let { cardEls } = this.state,
      width = isText ? this.getTextElWidth(el) : thumbWidth,
      height = isText ? 40 : thumbWidth,
      idx = new Date().getTime(),
      left = Math.round(Math.random() * (cardWidth - width)),
      top = Math.round(Math.random() * (cardHeight - height));
    let props = {
      isTextType: isText,
      width: width,
      height: height,
      left: left,
      top: top,
      rotate: 0,
      scale: 1,
      idx: idx,
      isValid: true
    }
    if (isText) {
      props.text = el
      props.fontSize = 20
      props.color = '#000'
    } else {
      props.imgUrl = el
    }
    cardEls.push(props)
    this.setState({
      cardEls: cardEls,
      editElIndex: idx,
    })
    this.refreshSwiperDom()
  }

  handleTextElInput = e => {
    let value = e.detail.value
    this.setState({ elInputText: value }, () => console.log(this.state.elInputText))
  }

  handleTextInputBlur = e => {
    this.setState({
      showTextElInput: false,
      // editElIndex: 0,
      // elInputText: ''
    })
  }

  getOnEditEl() {
    let { cardEls } = this.state
    return cardEls.length > 0 && cardEls.find(item => item.idx === this.state.editElIndex)
  }

  getValidEls = () => {
    let { cardEls } = this.state
    return cardEls.length > 0 && cardEls.filter(item => item.isValid) || []
  }

  getThumbTextEls = () => {
    let els = this.getValidEls().filter(item => item.isTextType) || []
    return [...els, { text: '新建', add: true }]
  }

  changeTextSwiper = e => {
    let textEls = this.getThumbTextEls(),
      { current } = e.detail;
    if (textEls.length - 1 === current) {
      this.setState({
        editElIndex: 0,
        textSwiperCurrent: textEls.length - 1
      })
      return
    } else {
      this.setState({
        editElIndex: textEls[current].idx
      })
    }
  }

  handleThumbTabClick = idx => {
    if (idx === 3) {
      this.setState({
        showTextElArea: true,
        thumbActiveIndex: idx,
        showTextElInput: true,
        editElIndex: 0,
        elInputText: ''
      })
      return
    }
    this.setState({
      thumbActiveIndex: idx,
      showTextElArea: false,
      editElIndex: 0
    })
  }

  handleThumElsClick = idx => {
    let { cardEls } = this.state
    let clickEl = cardEls.find(item => item.idx === idx)
    if (clickEl.isTextType) {
      let index = this.getThumbTextEls().findIndex(item => item.idx === idx)
      this.setState({
        editElIndex: idx,
        showTextElArea: clickEl.isTextType,
        textSwiperCurrent: index === -1 ? 0 : index
      })
    } else {
      this.setState({
        editElIndex: idx,
        showTextElArea: clickEl.isTextType
      })
    }

  }

  getTextElWidth(text) {
    const ctx = Taro.createCanvasContext('canvas')
    ctx.font = "20px"
    const metrics = ctx.measureText(text)
    return metrics.width + 20
  }

  async canvasDrawImg(src) {
    Taro.showLoading({
      title: '生成中'
    })
    let cardEls = this.getValidEls()
    let ctx = Taro.createCanvasContext('canvas', this)
    let _this = this
    ctx.width = cardWidth
    ctx.height = cardHeight
    ctx.clearRect(0, 0, cardWidth, cardHeight)
    ctx.drawImage(await this.getImageInfo(this.cardCoverImg), 0, 0, cardWidth, cardHeight)
    for (let i = 0; i < cardEls.length; i++) {
      let { isTextType, imgUrl, text, left, top, width, height, scale, rotate, color, fontSize } = cardEls[i]
      left = left - (scale-1) * width /2
      top = top - (scale-1) * height /2
      width = width * scale
      height = height * scale
      let tran_x = width / 2,
          tran_y = height / 2;
      ctx.translate(tran_x + left, tran_y + top)
      ctx.rotate(rotate * Math.PI / 180)
      if (isTextType) {
        ctx.setFontSize(fontSize * scale)
        ctx.setFillStyle(color)
        ctx.setTextBaseline('middle')
        ctx.setTextAlign('center')
        ctx.fillText(text, -tran_x + width / 2, -tran_y+ height / 2, width)
      } else {
        ctx.drawImage(await this.getImageInfo(imgUrl), -tran_x, -tran_y, width, height)
      }
      ctx.rotate(-(rotate * Math.PI / 180))
      ctx.translate(-(tran_x + left), -(tran_y + top))
    }

    ctx.draw(false, _this.canvasToTempFilePath())

  }

  getImageInfo(path) {
    return new Promise((resolve, reject) => {
      Taro.getImageInfo({
        src: path,
        success(res) {
          resolve(res.path)
        },
        fail(err) {
          reject(err)
        }
      })
    }).then(res => res).catch(res => Taro.showModal({
      title: '生成失败',
      content: '图片生成失败请重试！',
      showCancel: false
    }))
  }

  canvasToTempFilePath() {
    let _this = this
    setTimeout(() => Taro.canvasToTempFilePath({
      canvasId: 'canvas',
      success(res) {
        console.log(res.tempFilePath)
        _this.setState({
          canvasImage: res.tempFilePath
        })
        Taro.setStorage({
          key: CARDFACE_CACHE_KEY,
          data: res.tempFilePath,
          success(){
            Taro.showToast({
              title: '制作成功'
            })
          
          },
          complete(){
            Taro.navigateTo({
              url: 'plugin-private://wx374e720be6f29030/pages/custom-card/checkout'
            })
          }
        })
      },
      fail(res) {
        Taro.showToast({
          icon: 'error',
          title: '保存失败,请重试！'
        })
      },
      complete(){
        Taro.hideLoading()
      }
    }, _this.$scope), 100)

  }

  saveImageToPhotosAlbum(locapath) {
    Taro.saveImageToPhotosAlbum({
      filePath: locapath,
      success(res) {
        Taro.showToast({
          title: '已保存到相册',
          icon: 'success',
          duration: 3000
        })
      },
      fail(res) {
        Taro.showModal({
          title: '保存失败',
          content: '您已拒绝授权'
        })
      }
    })
  }

  render() {
    let { cardEls, thumbActiveIndex, canAddEl, editElIndex, showTextElArea, showTextElInput, textSwiperCurrent } = this.state;
    let editElRotate = this.getOnEditEl() && this.getOnEditEl().rotate || 0
    let validLength = this.getValidEls().length || 0
    return (
      <View className="home" style={{ height: windowHeight + 'px', paddingBottom: isIphoneX() ? '34px' : 0 }}>
        
        <View className="home-gallery">
          <View className="mask" onClick={() => this.setState({ editElIndex: 0 })}></View>
          <View className="home-gallery__wrap"
            style={{
              width: cardWidth + 'px',
              height: cardHeight + 'px'
            }}
          >
            <Image
              src={this.state.canvasImage}
              style={{
                width: cardWidth + 'px',
                height: cardHeight + 'px',
                left: 0,
                top: 0,
                zIndex: 0,
                position: 'absolute'
              }}
            />
            {
              cardEls.map((item, zIndex) => {
                let { width, height, left, top, rotate, scale, imgUrl, idx, isValid, fontSize, color, isTextType, text } = item
                return isValid &&
                  <CardEl
                    key={idx}
                    className="card-el"
                    imgUrl={imgUrl}
                    text={text}
                    styles={{ width, height, left, top, scale, rotate, fontSize, color, zIndex }}
                    idx={idx}
                    isTextType={isTextType}
                    isSelect={editElIndex === idx}
                    onScale={this.scaleEl}
                    onMove={this.moveEl}
                    onTouch={() => this.handleThumElsClick(idx)}
                    onDelete={this.deleteEl}
                    onEditText={this.editElText}
                  />
              })
            }
          </View>
          <View className="home__tips">
            {canAddEl ? '在背景上添加元素定制你的卡片' : '贴纸已满10个，不能再添加哦'}
          </View>
        </View>



        <View className={`home__slider ${editElIndex === 0 ? "hidden" : ''}`}>
          <Text>-180°</Text>
          <Slider
            className="slider"
            min={-180}
            max={180}
            value={editElRotate}
            activeColor="#e9e9e9"
            blockColor="#643E28"
            blockSize={20}
            onChanging={this.rotateEl}
          />
          <Text>180°</Text>
        </View>

        <View className="home-bot">
          <View className="home__thumb">
            <ScrollView
              className="home__thumb-tab"
              scrollX
            >
              {
                Array(10).fill('').map((item, idx) =>
                  <Text
                    className={idx === thumbActiveIndex ? 'active' : ''}
                    onClick={() => this.handleThumbTabClick(idx)}
                  >
                    文本
                  </Text>
                )
              }
            </ScrollView>

            <ScrollView
              className="home__thumb-con"
              style={{
                // height: thumbWidth * 2 + 'px'
              }}
              scrollX
            >
              <View className="home__thumb-con-wrap"
                style={{
                  width: `${Math.ceil(9 / 2) * thumbWidth}px`,
                  height: thumbWidth * 1.6 + 'px',
                  opacity: canAddEl ? 1 : .3
                }}
              >
                {
                  Array(9).fill('').map((item, idx) => (
                    <View className="thumb_item"
                      onClick={() => this.handleThumbClick(testImg)}
                      style={{
                        width: thumbWidth + 'px',
                        height: thumbWidth * .8 + 'px'
                      }}
                    >
                      <Image
                        src={testImg}
                        style={{
                          width: thumbWidth * .5 + 'px',
                          height: thumbWidth * .5 + 'px'
                        }}
                      />
                    </View>
                  ))
                }
              </View>
            </ScrollView>
          </View>
          {
            showTextElArea &&
            <View className="home-bot-text">
              <View
                className={`text-wrap__input ${showTextElInput ? '' : 'hidden'}`}
              // style={{ display: `${showTextElInput ? 'block' : 'none'}` }}
              >
                <Input
                  maxlength={10}
                  placeholder="请输入您想说的话,最多10个字符。"
                  onInput={this.handleTextElInput}
                  value={elInputText}
                  focus={showTextElInput}
                  onBlur={this.handleTextInputBlur}
                  onConfirm={this.handleAddTextEl}
                />
                {
                  this.state.elInputText.length === 0 ? <Text>取消</Text> : <Text onClick={this.handleAddTextEl}>完成</Text>
                }

              </View>
              <View className="text-wrap__color">
                {
                  Array(20).fill('').map((item, idx) => (
                    <Text
                      onClick={() => this.changeElStyle({ color: `#${Math.random().toString(16).slice(-6)}` })}
                      style={{ backgroundColor: `#${Math.random().toString(16).slice(-6)}` }}>

                    </Text>
                  ))
                }
              </View>
              <View className="text-wrap__swiper">
                {
                  this.state.renderSwiper &&
                  <Swiper
                    style={{ height: '120px', position: 'relative', zIndex: 9 }}
                    vertical={true}
                    nextMargin="40px"
                    previousMargin="40px"
                    onChange={this.changeTextSwiper}
                    current={textSwiperCurrent}
                  >
                    {this.getThumbTextEls().map((item, idx) => (
                      <SwiperItem
                        style={{
                          height: '40px',
                          color: `${item.add ? '#1aad19' : '#333333'}`
                        }}
                      >
                        <Text
                          onClick={() => item.add ? this.setState({ showTextElInput: true, elInputText: '' }) : null}
                        >{item.text}</Text>
                      </SwiperItem>
                    ))}
                  </Swiper>
                }

              </View>
            </View>
          }
        </View>


        <View className="home__footer">
          <Button
            className={`home__footer-btn ${validLength === 0 ? 'disabled' : ''}`}
            onClick={this.canvasDrawImg}
          >
            生成
          </Button>
        </View>

        <View className="offscreen">
          <Canvas canvasId="canvas" style={{ width: cardWidth + 'px', height: cardHeight + 'px'}} > </Canvas>
          {/* <View id="cardel-text" style={{ fontSize: '20px' }}> 你急 </View> */}
        </View>

      </View>
    )
  }
}
