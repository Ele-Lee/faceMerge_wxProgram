import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.less'
import { home_header, home_cover, btn_boy, btn_girl } from './../../common/imgPath';
import Top from '../../components/top/top.tsx'

import { connect } from '@tarojs/redux'

import { setSex } from '../../redux/actions'

@connect(({ sex }) => ({
  sex
}), (dispatch) => ({
  setSex (type) {
    dispatch(setSex(type))
  }
}))
export default class Index extends Component {

  constructor (props) {
    super(props)
    this.state = { data: props.data }
  }

  static defaultProps = {
    data: []
  }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  next(type) {
    this.props.setSex(type)
    Taro.navigateTo({
      url: '/pages/upload/upload'
    })
    // this.$router.replace({ name: 'upload' });
  }

  render () {

    return (
      <View className='index'>
        <Top></Top>
        <Image className="cover" src={home_cover}></Image>
        <Text className="ask">与成大同行，你是</Text>
        <View className="btn-box">
            <Image className="button boy" src={btn_boy} onClick={()=>this.next(1)}></Image>
            <Image className="button girl" src={btn_girl} onClick={()=>this.next(0)}></Image>
        </View>

        {/* <Text style="font-size: 20rpx" className="red-text">Hello world!{this.state.date.toLocaleTimeString()}</Text>
        <Text style={ fontStyle }>xx</Text>
        <Clock>
          <View className="dialog-message">
            Thank you for using Taro.
          </View>
        </Clock>
        {element} */}
      </View>
    )
  }
}
