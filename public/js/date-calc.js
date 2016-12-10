function dateSub(postTime) {
  var now = new Date();
  var date3 = now.getTime() - postTime.getTime()
   
  var days = Math.floor(date3 / (24 * 3600 * 1000))

  if (days > 10)
    return postTime;

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