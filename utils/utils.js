const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('-')} `
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}


//封装请求发送函数
function request(url, data={}, method,header={}) {
  return new Promise(function(resolve, reject) {
    wx.request({
      url: url,
      method:method,
      data: method="POST" ? JSON.stringify(data):data,
      header:header,
      //表示服务器连接成功，返回具体状态码
      success(res){
        if(res.data.code == 200){
          resolve(res)
        }else{
          //服务器连接上，后端出现问题
          reject("backend error")
        }
      //否则失败，服务器都没有连接上，属于前端问题
      },fail(err){
        reject(err) 
      }

    })
  })
}

function randomString() {
　　var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'; 
　　var maxPos = $chars.length;
　　var pwd = '';
　　for (var i = 0; i < 8; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd;
}

const tokenKey = 'satoken';
//清除登录状态
function logout() {
  wx.removeStorageSync(tokenKey)
  wx.showToast({
    title: '退出成功',
    mask:true,
    icon:'success',
  })
  wx.redirectTo({
    url: "/pages/index/index?currentPage=my",
  })
}
//登录函数（获取token）
function login(url,method="") {
  return new Promise((resolve,reject)=>{
    wx.login({
      success:(res)=>{
        let sendData = res.code
        console.log(sendData)
        wx.request({
          url:url,
          method:method,
          header:{
            'content-type':'text/plain'
          },
          data:sendData,
          success(res){
            try{
              if( res.data.code === 200){
                wx.showToast({
                  title: '登录成功',
                  icon:'success'
                })
                // console.log(res)
                wx.setStorageSync(tokenKey, res.data.data.tokenValue)
                resolve(res.data)
              } else{
                wx.removeStorageSync(tokenKey)
                reject(res)
              }
            }catch(e){
              // console.log(res.data)
              reject(e)
            }
          },
          fail(err){
            // console.log('request',err)
            reject(err)
          }
        })
      }
    })
  })
}
function req(config) {
  let header = {};
  let tokenValue = wx.getStorageSync(tokenKey)
  header['Content-type'] = config.contentType
  header['satoken'] = wx.getStorageSync(tokenKey)
  return new Promise((resolve,reject)=>{
    wx.request({
      url: config.url,
      data:config.data,
      header:header,
      method:config.method,
      success(res){
        if(res.data.code == 500){
          if(tokenValue && tokenValue!== ''){
            wx.showToast({
              title: '登录已过期',
              icon:'error'
            })
            wx.removeStorageSync(tokenKey)
          }
        }
        if(res.data.code == 200){
          resolve(res.data)
        }
      },
      fail(err){
          wx.showToast({
            title: '服务器错误',
            icon:'error'
        })
        // console.log(err)
        reject(err)
      }
    })
  })
} 


module.exports = {
  formatTime,
  request,
  randomString,
  login,
  logout,
  req,
}
