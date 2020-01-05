const config = {
    env: 'dev',
    database:{
      dbName:'island',
      host:'localhost',
      port: 3306,
      user: 'root',
      password: 'liuhuan123'
    },
  security: {
    secretKey: 'wosdjenccizkfcosmejsodmfhssldlfjihfnekasdiwn',
    expiresIn: 60*60
  }
}
module.exports = config