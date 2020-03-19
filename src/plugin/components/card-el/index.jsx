// import '@tarojs/async-await'
// const { regeneratorRuntime } = global;
import Taro, { Component } from '@tarojs/taro'
import { Image, View } from '@tarojs/components'
import { style } from '@utils'
import { NykIcon } from '@components/icon'

let { cardWidth, cardHeight, vi } = style;

export default class CardEl extends Component {

  static options = {
    addGlobalClass: true
  }

  static defaultProps = {
    styles: {}
  }

  constructor(props) {
    super(props)

    let { width, height, left, top, scale } = props.styles;
    this.width = width
    this.height = height
    this.posX = left
    this.posY = top
    this.minLeft = -width / 2
    this.maxleft = cardWidth + this.minLeft
    this.minTop = -height / 2
    this.maxTop = cardHeight + this.minTop
    this.scale = scale

  }

  touchStart = e => {
    let { clientX, clientY } = e.touches[0]
    this.start_x = clientX
    this.start_y = clientY
  }

  touchMove = e => {
    let { left, top } = this.handleOnMoveEdge(e.touches[0])
    this.props.onMove(left, top)
  }

  touchEnd = e => {
    let { left, top } = this.handleOnMoveEdge(e.changedTouches[0])
    this.posX = left
    this.posY = top
  }

  sacleTouchStart = e => {
    let { clientX, clientY } = e.touches[0]
    this.start_sx = clientX;
    this.start_sy = clientY
  }

  sacleTouchMove = e => {
    let scale = this.handleSacleLimit(e.touches[0])
    this.props.onScale(scale)
  }

  sacleTouchEnd = e => {
    let scale = this.handleSacleLimit(e.changedTouches[0])
    this.scale = scale
  }

  handleSacleLimit(e) {
    let { clientX } = e
    let move_x = clientX - this.start_sx
    let scale = this.scale + (move_x * 0.01)
    if (scale <= 0.5) {
      scale = 0.5
    }
    if (scale >= 3) {
      scale = 3
    }
    return scale
  }

  handleOnMoveEdge(e) {
    let { clientX, clientY } = e
    let move_x = clientX - this.start_x,
      move_y = clientY - this.start_y;
    let left = this.posX + move_x,
      top = this.posY + move_y;
    if (left < this.minLeft) {
      left = this.minLeft
    }
    if (left > this.maxleft) {
      left = this.maxleft
    }
    if (top < this.minTop) {
      top = this.minTop
    }
    if (top > this.maxTop) {
      top = this.maxTop
    }
    return { left, top }
  }

  render() {
    const { imgUrl, isSelect, styles, className, isTextType, text } = this.props
    const { width, height, left, top, rotate, zIndex, scale, fontSize, color } = styles
    let style = {
      width: width + 'px',
      height: height + 'px',
      left: left + 'px',
      top: top + 'px',
      transform: `rotate(${rotate}deg) scale(${scale})`,
      position: 'absolute',
      zIndex: zIndex + 1,
    }
    return (
      <View className={className} style={style}

      >
        {
          isTextType
            ? 
            <View
              style={{
                fontSize: fontSize + 'px',
                textAlign: 'center',
                width: width + 'px',
                height: height + 'px',
                display: 'block',
                lineHeight: height + 'px',
                color: color
              }}
              onClick={this.props.onTouch}
            >
              {text}
            </View>
            : 
            <Image
              src={imgUrl}
              style={{
                width: width + 'px',
                height: height + 'px',
                display: 'block',
                zIndex: 9,
              }}
              onClick={this.props.onTouch}
            />
        }
        {
          isSelect &&
          <View>
            <View
              style={{
                width: width + 4 + 'px',
                height: height + 4 + 'px',
                position: 'absolute',
                left: '-2px',
                top: '-2px',
                zIndex: 99,
                border: `2px solid ${vi}`
              }}
              onTouchStart={this.touchStart}
              onTouchMove={this.touchMove}
              onTouchEnd={this.touchEnd}
            >
            </View>

            <View
              style={{
                position: 'absolute',
                right: '-10px',
                bottom: '-10px',
                zIndex: 999,
                display: 'block'
              }}
              onTouchStart={this.sacleTouchStart}
              onTouchMove={this.sacleTouchMove}
              onTouchEnd={this.sacleTouchEnd}
            >
              <NykIcon value="suofang" color={vi} size={40} />
            </View>

            <View
              style={{
                position: 'absolute',
                left: '-10px',
                top: '-10px',
                zIndex: 999,
                display: 'block'
              }}
              onClick={this.props.onDelete}
            >
              <NykIcon value="close_full" color={vi} size={40} />
            </View>

            {
              isTextType &&
              <View
                style={{
                  position: 'absolute',
                  right: '-10px',
                  top: '-10px',
                  zIndex: 999,
                  display: 'block'
                }}
                onClick={this.props.onEditText}
              >
                <NykIcon value="close_full" color={vi} size={40} />
              </View>
            }

          </View>
        }


      </View>

    )
  }

}