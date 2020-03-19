// // 用于拦截请求和响应
// const axios = require('axios')

// export default function (vm) {
//   // 设置请求拦截器
//   axios.interceptors.request.use(config => {
//     const token = localStorage.getItem('token')
//     // console.log(config.url)
//     if (token && config.url !== '/login' && config.url && config.url !== '/getQuestionnaire' && config.url !== '/getDictValue' && config.url !== '/submitQuestionnaire') {
//       config.headers.Authorization = 'Bearer ' + token
//     }
//     return config
//   })

//   // 响应拦截器
//   axios.interceptors.response.use(res => {
//     // console.log(res)
//     if (res.data.code === 401) { // 没有登录或者令牌过期
//       localStorage.removeItem('token')
//       // 跳转login
//       vm.$router.push('/login')
//     }
//     return res
//   }, err => {
//     console.log('拦截器拦截到错误' + err + '错误码:' + err.response.status)
//     if (err.response.status === 502) {
//       vm.$message.error('服务器连接失败')
//       console.log('fuwuqi')
//     }
//     // 只要拦截到错误就调到主页
//     // vm.$router.push('/login')
//     return Promise.reject(err)
//   })
// }
