const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
//封装请求发送函数
function request(url, data={}, method="GET") {
  return new Promise(function(resolve, reject) {
    wx.request({
      url: url,
      method:method,
      data: method="POST" ? JSON.stringify(data):data,
      header:{
        'content-type': 'application/json'
      },
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
module.exports = {
  formatTime,
  request
}
