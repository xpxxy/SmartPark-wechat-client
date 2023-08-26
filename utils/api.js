//业务服务器api接口地址
//上线必须启用https
var wxApiRoot = 'http://localhost:8080'

module.exports= {
  AdList: wxApiRoot+"/ad/uypdate",//广告
  partyPic: wxApiRoot+'/smartpark/wx/carousel/ONE', //党建轮播图
  registerPic: wxApiRoot+'/smartpark/upload-image',//工商注册上传
  uploadInfo:wxApiRoot+'/smartpark/wx/businessRegistration', //工商注册信息上传
  wxlogin:wxApiRoot+'/smartpark/wx/wxLogin', //微信登录验证接口
  userInfo:wxApiRoot+'/smartpark/wx/userInfo',//获取用户信息
  editInfo:wxApiRoot+'/smartpark/wx/userInfo',//用户编辑信息接口
  uploadAvatar:wxApiRoot+'/smartpark/wx/userAvatar',//用户上传自定义头像
  quicfix:wxApiRoot+'/smartpark/wx/repair',//快速保修发送接口
  getRegistrationList:wxApiRoot+'/smartpark/wx/businessRegistration',//查询用户的工商申请的表格
  getFixList:wxApiRoot+'/smartpark/wx/repair',//查询快速保修的表单
}