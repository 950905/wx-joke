import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index/index'
import { Provider } from "@tarojs/redux";
import models from './models'
import dva from './utils/dva'

import './app.less'
import './assets/iconfont/iconfont.css';

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});

const store = dvaApp.getStore();

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/member/login/index',
      'pages/member/register/index',
      'pages/home/index',
      'pages/joke/index',
      'pages/test/main/index',
      'pages/test/question/index',
      'pages/test/result/index',
      'pages/usercenter/center/index',
      'pages/usercenter/history/index',
      'pages/usercenter/userInfo/index',
      'pages/usercenter/resetPassword/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'joke',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
