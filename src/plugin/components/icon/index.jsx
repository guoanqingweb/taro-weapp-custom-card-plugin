import Taro from '@tarojs/taro'
import { Text } from '@tarojs/components'
import classNames from 'classnames'
import './index.scss'

import { mergeStyle } from '@utils'

const Icon = (props) => {

  let { className, prefixClass, value, color, size, onClick: handleClick, customStyle } = props;
  let iconName = value ? `icon-${value}` : ''
  const rootStyle = {
    fontSize: Taro.pxTransform(size),
    color
  }
  return (
    <Text
      className={classNames(
        prefixClass,
        iconName,
        className,
      )}
      style={mergeStyle(rootStyle,customStyle)}
      onClick={handleClick}
    >
    </Text>
  )

}

Icon.defaultProps = {
  className: '',
  prefixClass: `nyk-icon`,
  customStyle:'',
  value: '',
  color: '',
  size: 30,
  onClick: () => {}
}

Icon.options = {
  addGlobalClass: true
}

export default Icon
