//业务服务器api接口地址
//上线必须启用https
var wxApiRoot = 'http://localhost:8080'

module.exports= {
  AdList: wxApiRoot+"/ad/uypdate",//广告
  partyPic: wxApiRoot+'/smartpark/wx/carousel/ONE', //党建轮播图
  registerPic: wxApiRoot+'/smartpark/upload-image',//工商注册上传
  uploadInfo:wxApiRoot+'/smartpark/wx/businessRegistration' //工商注册信息上传
}