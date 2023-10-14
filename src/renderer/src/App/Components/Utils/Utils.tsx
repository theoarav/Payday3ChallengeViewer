/*

Put your util scripts here which could be used anywhere.

*/

/**
 * Converts seconds into a more readable HH:MM:SS format.
 */
export function secondsToHourlyFormat(duration: string) {
    if (duration && duration != 'undefined' && duration != null) {
      var temp = +duration
      var hrs = ~~((temp / 3600) % 24)
      var mins = ~~((temp % 3600) / 60)
      var secs = temp % 60
  
      var ret = ''
  
      if (hrs > 0) {
        ret += '' + hrs + ':' + (mins < 10 ? '0' : '')
      }
  
      ret += '' + mins + ':' + (secs < 10 ? '0' : '')
      ret += '' + secs
  
      return ret
    } else return ''
}

/**
 * Converts seconds into a day format.
 * Example: "5 Days 3 Hours 48 Minutes 1 Second"
 */
export function secondsToDhms(seconds: number) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600*24));
  var h = Math.floor(seconds % (3600*24) / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 60);
  
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
  }

/**
 * Puts a separator between thousands for better readibility.
 */
export function numbersWithSeparator(x: number, separator?: string) {
  let sep = separator? separator : ","
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep)
}