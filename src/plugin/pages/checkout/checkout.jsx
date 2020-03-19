import Taro, { Component } from '@tarojs/taro'
import { View, Image, Button, Canvas } from '@tarojs/components'

import { IMGPATH_CACHE_KEY_ENTRY, IMGPATH_CACHE_KEY_HOME, CHECKOUT_URL } from '@const'
import { style } from '@utils'
import { NykIcon } from '@components/icon'

import './checkout.scss'

let { windowHeight, windowWidth, isIphoneX, cardWidth, cardHeight } = style;

export default class Checkout extends Component {

  constructor() {
    super()
    this.getCacheImgPath()
    this.state = {
      logoState: false,
      saveState: false,
      saveImgPath: '',
      showModal: false,
    }
  }

  config = {
    disableScroll: true
  }

  getCacheImgPath() {
    let cardTemPath = Taro.getStorageSync(IMGPATH_CACHE_KEY_HOME)
    if (!cardTemPath) {
      Taro.navigateTo({
        url: IMGPATH_CACHE_KEY_ENTRY
      })
    } else {
      this.cardTemPath = cardTemPath
    }
  }

  toCardPage() {
    Taro.navigateTo({
      url: IMGPATH_CACHE_KEY_ENTRY
    })
  }

  selectCardBack() {
    Taro.navigateTo({
      url: '/pages/index/index'
    })
  }

  createCanvasImg() {
    Taro.showLoading()
    let x = (windowWidth - cardWidth) / 2,
        y = (windowWidth - cardWidth) / 2;
    let ctx = Taro.createCanvasContext('canvas', this.$scope);
    ctx.setFillStyle('#fff')
    ctx.fillRect(0, 0, windowWidth, 500)

    ctx.drawImage(this.cardTemPath, x, y, cardWidth, cardHeight)

    ctx.setFillStyle('#000')
    ctx.setFontSize(20)
    ctx.fillText('空白区域可以随意定制哦！', x, cardHeight + y * 3)

    ctx.draw(false, this.canvasToTempFilePath())
  }

  canvasToTempFilePath() {
    let _this = this
    setTimeout(() => Taro.canvasToTempFilePath({
      canvasId: 'canvas',
      success(res) {
        _this.saveImageToPhotosAlbum(res.tempFilePath)
      },
      fail(res) {
        Taro.showToast({
          icon: 'error',
          title: '保存失败,请重试！'
        })
      },
      complete() {
        Taro.hideLoading()
      }
    }, _this.$scope), 50)

  }

  saveImageToPhotosAlbum(locapath) {
    let _this = this
    Taro.saveImageToPhotosAlbum({
      filePath: locapath,
      success() {
        _this.setState({
          saveImgPath: locapath,
          showModal: true,
          saveState: true
        })
      },
      fail() {
        Taro.showModal({
          title: '保存失败',
          content: '您已拒绝授权!',
          showCancel: false
        })
      }
    })
  }
  render() {
    let { logoState, saveState, saveImgPath } = this.state
    return (
      <View className="checkout" style={{ height: windowHeight + 'px', paddingBottom: isIphoneX() ? '34px' : 0 }}>
        <View className="checkout-gallery">
          <View className="gallery-wrap">
            <View className={`logo-wrap ${logoState ? 'show' : ''} `}>
              <View className="logo-wrap_img" >
                <Image className="logo" src="https://wx.21cake.com/themes/wap/img/logo.png" />
              </View>

              <View className="logo-wrap_text">
                <Text className="name">21cake</Text>
                <Text className="desc">21cake礼品卡</Text>
              </View>
            </View>
            <Image
              src={this.cardTemPath}
              className="checkout-gallery_img"
              style={{
                width: cardWidth + 'px',
                height: cardHeight + 'px'
              }}
            />
          </View>
        </View>

        <View
          className="checkout-tips"
          onClick={() => this.setState({ logoState: !logoState })}
        >
          <View className={`logo-switch ${logoState ? 'show' : ''} `}>
            <NykIcon
              value="queding"
              size={28}
              color="#fff"
            />
          </View>
          预览在微信卡包内的样式
        </View>


        <View className="checkout-footer">
          <Button
            onClick={this.selectCardBack}
            className="checkout-footer_btn"
          >
            赠送好友
          </Button>
          <Button
            onClick={this.createCanvasImg}
            className={`checkout-footer_btn save ${saveState ? 'disabled' : ''}`}
          >
            {`${ saveState ? '已保存' : '保存分享' }`}
          </Button>
        </View>
        {
          this.state.showModal &&
          <View className="modal">
            <View className="modal-mask"></View>
            <View className="modal-content">
              <NykIcon
                value="close" 
                customStyle={{
                  dispaly: 'block',
                  position: 'absolute',
                  width: '30PX',
                  height: '30PX',
                  top: '0',
                  right: '0',
                  backgroundColor: '#fff',
                  transform: 'translate(50%,-50%)',
                  borderRadius: '50%',
                  lineHeight : '30PX',
                }}
                color="#000"
                size={26}
                className="thumb-item_icon"
                onClick= {()=> this.setState({showModal: false})}
              />
              <Image 
                src={saveImgPath}
                mode="scaleToFill"
                className="modal-content_img"
                style={{
                  width: cardWidth + 'px',
                  height: 500 *.84 + 'px'
                }}
               />
               <View className="modal-content_text">已保存至相册,记得分享哦！</View>
            </View>
          </View>
        }


        <View className="offscreen">
          <Canvas canvasId="canvas" style={{ width: windowWidth + 'px', height: 500 + 'px' }} > </Canvas>
        </View>

      </View>
    )
  }
}