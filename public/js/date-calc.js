function dateSub(timeStr) {
  var now = new Date();
  timeStr = timeStr.replace(/-/g,"/")
  var date3 = now.getTime() - new Date(timeStr).getTime()
   
  var days = Math.floor(date3 / (24 * 3600 * 1000))

  if (days > 10)
    return timeStr;

  var leave1 = date3 % (24 * 3600 * 1000)
  var hours = Math.floor(leave1/(3600 * 1000))

  var leave2 = leave1 % (3600*1000)
  var minutes = Math.floor(leave2/(60 * 1000))

  var str = "";

  if (days > 0) {
    str += days + "天";
  }
  if (hours > 0) {
    str += hours+"小时";
  }
  str += minutes+"分";
  return str + "前";
}