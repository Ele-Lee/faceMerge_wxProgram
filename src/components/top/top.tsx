import { Component } from '@tarojs/taro'
import { Image } from '@tarojs/components'
import { home_header } from './../../common/imgPath'
import './top.less'

export default class Top extends Component {
  constructor (props) {
    super(props)
    this.state = { data: props.data }
  }
  render () {
    return (
      <Image className="header" src={home_header}></Image>
    )
  }
}
