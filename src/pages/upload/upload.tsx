import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './upload.less'
import Top from '../../components/top/top.tsx'

import { logo, upload, tplList, building } from './../../common/imgPath';
// import Clock from './ele.tsx'

import { connect } from '@tarojs/redux'

// import { setSex } from '../../redux/actions'

@connect(({ sex }) => ({
  sex
}))
export default class Upload extends Component {

  constructor (props) {
    super(props)
    this.state = { select: Number }

  }
  config: Config = {
    navigationBarTitleText: '上传'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  selectHandler(currentNum, imgNum) {
    // if(this.selectKey) return;
    // const oldNum = this.select;
    // this.state.select = currentNum;
    this.setState({select: currentNum})
    console.log(imgNum);

    // this.$bus.modelNum = imgNum;
    // // 重新上传或者没有融合过才需要请求融合
    // if (!this.originMergedResult[currentNum] && this.$bus.needMergeBase64 ) {
    //   this.$bus.$emit('showAlertLoading');
    //   this.mergeTpl();
    // } else {
    //   this.mergeImg = this.originMergedResult[currentNum];
    // }
  }

  render () {

    const boxModel = [1,2].map((item, i) => {
      return  (
        <View className={["model", this.state.select === i ? 'cover' : '']} key={item}>
          <Image className="inner" src={tplList[i + this.props.sex * 2]} onClick={()=>this.selectHandler(i, item + this.props.sex * 2)}></Image>
        </View>
      )
    })

    return (
      <View className='upload'>
        <Top></Top>
        <Image className="logo" src={logo}></Image>
        <Image className="box--upload" src={upload}></Image>
        <View className="box--model">
          {boxModel}
        </View>
        <Image className="building" src={building}></Image>
      </View>
    )
  }
}
