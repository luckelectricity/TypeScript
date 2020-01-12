Page({
  onGetToken(){
    console.log(123213123123)
    wx.login({
      success:(res)=>{
        if(res.code){
          wx.request({
            url: 'http://localhost:3000/v1/token',
            method: "post",
            data:{
              account: res.code,
              type: 103
            },
            success:(res)=>{
              console.log(res.data)
              const code = res.statusCode.toString()
              console.log(code)
              if(code.startsWith('2')){
                wx.setStorageSync('token', res.data.data.token)
              }
            }
          })
        }
      }
    })
  }
})