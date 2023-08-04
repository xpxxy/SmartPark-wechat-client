// pages/homepage/main/main.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  options:{
      //设置样式隔离相当于style scoped
      styleIsolation:'apply-shared'
  },

  /**
   * 组件的初始数据
   */
  data: {
    cardCur:0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://www.iot101.com/uploadfile/202202/29fd3587df1117.jpeg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://img-blog.csdnimg.cn/img_convert/8ebdf0da6382d98ac2d7a25169b17aff.gif',
    }, {
      id: 2,
      type: 'image',
      url: 'https://www.trinasolar.com/sites/default/files/styles/image_text_720x611/public/Energy2020_TrinaAuror_homepage14.jpg?itok=ZmH0r47k'
    }, {
      id: 3,
      type: 'image',
      url: 'https://img1.baidu.com/it/u=2331526170,2315198253&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
    }, {
      id: 4,
      type: 'image',
      url: 'https://s1.ax1x.com/2023/08/04/pPFoS0K.png'
    }, {
      id: 5,
      type: 'image',
      url: 'https://s1.ax1x.com/2023/08/04/pPFIvOx.png'
    }, {
      id: 6,
      type: 'image',
      url: 'https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2022%2F0324%2F0b1cf7a5j00r9983x004cd200u000gug00u000gu.jpg&thumbnail=660x2147483647&quality=80&type=jpg'
    }],
    enterpriceList: [{
      icon: 'favorfill',
      color: 'red',
      name: '党建服务',
      link:'partybuild'
    }, {
      icon: 'comment',
      color: 'blue',
      name: '政策研读',
      link:'policylearn'
    }, {
      icon: 'question',
      color: 'blue',
      name: '申报辅导',
      link:'submithelp'
    }, {
      icon: 'edit',
      color: 'blue',
      name: '工商注册',
      link:'registration'
    }, {
      icon: 'search',
      color: 'blue',
      name: '挂牌督导',
      link:'supervision'
    }, {
      icon: 'sponsor',
      color: 'blue',
      name: '金融服务',
      link:'finance'
    }],
    fixList: [{
        icon: 'phone',
        color: 'blue',
        name: '快速报修',
        link:'quickfix',
      },{
          icon:'notification',
          color: 'blue',
          name:'园区公告',
          link:'parknote',
      },{
          icon: 'evaluate',
          color: 'blue',
          name: '党建园地',
          link:'partygarden'
      },{
          icon:'form',
          color: 'blue',
          name:'租办公室',
          link:'rent'
      },{
          icon:'mark',
          color:'blue',
          name:'投诉建设',
          link:'complaint'
      }],
    gridCol:3,
    skin: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
  }
})
