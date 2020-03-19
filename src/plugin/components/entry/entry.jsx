import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Image, ScrollView, Navigator, Swiper, Button } from '@tarojs/components'

import { NykIcon } from '@components/icon'

import { style } from '@utils'
import { IMGPATH_CACHE_KEY_ENTRY, IMGPATH_CACHE_KEY_HOME, HOME_URL } from '@const'
let { windowHeight, windowWidth, isIphoneX } = style;

const testImg = 'https://wx.21cake.com/upload/images/97f050b824945b92c57e46d497dc02f8.jpg'

import './entry.scss'

export default () => {

  const [selectIndex, changeIndex] = useState(0)

  function selectCardBack() {
    Taro.setStorage({
      key: IMGPATH_CACHE_KEY_ENTRY,
      data: selectIndex,
      success() {
        Taro.navigateTo({
          url: HOME_URL
        })
      }
    })
  }

  return (
    <View className="entry" style={{ height: windowHeight + 'px', paddingBottom: isIphoneX() ? '34px' : 0 }}>
      <View className="entry-gallery">
        <Image 
          src={testImg} 
          className="entry-gallery_img" 
          style={{
            width: windowWidth *.84 + 'px',
            height: windowWidth *.84 / 1.8 + 'px'
          }}
        />
      </View>
      <View className="entry__title">选择一张你喜欢的卡面背景</View>
      <View className="entry-thumb">
          <ScrollView
            scrollX
            className="entry-thumb__scrollview"
          >
            {
              Array(8).fill({}).map((item,idx) =>
              <View 
                className="thumb-item"
                onClick={()=>changeIndex(idx)}
              >
                <Image src={testImg} className={`thumb-item_img ${idx === selectIndex ? 'active' : ''}`} />
                <NykIcon value="queding" 
                  customStyle={{
                    dispaly: 'block',
                    position: 'absolute',
                    width: '20PX',
                    height: '20PX',
                    top: '0',
                    right: '0',
                    backgroundColor: '#643E28',
                    transform: 'translateX(50%)',
                    borderRadius: '50%',
                    lineHeight : '20PX',
                    display: `${ idx === selectIndex ? 'block' : 'none' }`
                  }}
                  color="#fff"
                  size={24}
                  className="thumb-item_icon" />
              </View>
              )
            }
          </ScrollView>
      </View>
      <View className="entry-footer">
        <Button onClick={selectCardBack} className="entry-footer_btn">下一步</Button>
        <View className="card__tips">
          <Navigator className="card__tips-text">
            使用须知
          </Navigator>
          <Navigator className="card__tips-text">
            隐私权条款
          </Navigator>
        </View>
      </View>
    </View>
  )
}