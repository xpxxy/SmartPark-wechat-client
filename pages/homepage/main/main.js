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
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
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
