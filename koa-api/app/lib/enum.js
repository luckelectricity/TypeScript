function isTypeThis(val){
  for (const key in this) {
    if (this[key] == val) {
      return true
    }
  }
  return false
}

const LoginType = {
  WXLOGIN: 101,
  MOBILE: 102,
  PWD: 103,
  SUPERADMIN: 200,
  isTypeThis
}

module.exports = {
  LoginType
}