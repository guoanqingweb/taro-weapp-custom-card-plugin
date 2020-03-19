
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Navigator, Button } from '@tarojs/components'

const myPluginInterface = Taro.requirePlugin('myPlugin')

export default class Index extends Component {

    config = {
    navigationBarTitleText: '首页',           
    usingComponents: {
      // 'checkout': 'plugin://myPlugin/checkout'
    },
    disableScroll: true
  }

  componentWillMount () {
  }

  selectCardBack() {
    Taro.navigateTo({
      url: 'plugin://myPlugin/entry'
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
        <Button onClick={this.selectCardBack}>去首页</Button>
    )
  }
}
