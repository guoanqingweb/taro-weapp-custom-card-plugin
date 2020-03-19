import Taro from '@tarojs/taro'

let { windowWidth, windowHeight, model } = Taro.getSystemInfoSync()

const isIphoneX = () => model.indexOf('iPhone X') > -1 

const cardWidth = windowWidth * .84,
      cardHeight = cardWidth / 1.8;

export default {
  windowHeight,
  windowWidth,
  isIphoneX,
  cardWidth,
  cardHeight,
  vi: '#643E28'
}