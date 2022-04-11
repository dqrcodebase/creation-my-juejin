const setCookies = (key, value, t = 7) => {
  console.log('setCookies', value)
  let oDate = new Date();
  oDate.setTime(oDate.getTime() + t * 24 * 60 * 60 * 1000);
  console.log('oDate', oDate)
  document.cookie =
    key +
    "=" +
    value +
    ";expires=" +
    oDate.toGMTString() +
    "domain=" +
    getTopDomain(document.domain) +
    ";path=/";
}
const getCookies = (key) => {
  let arrStr = document.cookie.split("; ");
  for (let i = 0; i < arrStr.length; i++) {
    let temp = arrStr[i].split("=");
    if (temp[0] == key) {
      return encodeURI(temp[1]);
    }
  }
  return "";
}
const removeCookie = (key) => {
  setCookies(key, "", -1); // 把cookie设置为过期
}
const delCookie = (name) => {
  let cval = getCookies(name);
  if (cval != null) removeCookie(name);
};
const clearCookies = () => {
  let arrStr = document.cookie.split("; ");
  for (let i = 0; i < arrStr.length; i++) {
    let temp = arrStr[i].split("=");
    delCookie(temp[0])
  }
}
// 匹配顶级域名
const getTopDomain = () => {
  return `.${document.domain.replace(/.*\.([^.]+\.[^.]+)$/, '$1')}`
}

const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key))
}
const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}
const clearStorage = (key) => {
  localStorage.removeItem(key)
}
export { setCookies, getCookies, delCookie, clearCookies, getLocalStorage, setLocalStorage, clearStorage }