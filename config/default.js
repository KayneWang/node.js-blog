module.exports = {
  port: 3000,
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 7*24*60*60 // 一周有效
  },
  mongodb: 'mongodb://localhost:27017/myblog'
}