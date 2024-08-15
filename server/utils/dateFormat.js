const addDateSuffix = (date) => {
    let dateStr = date.toString();
  
    // get last char of date string
    const lastChar = dateStr.charAt(dateStr.length - 1);
  
    if (lastChar === '1' && dateStr !== '11') {
      dateStr = `${dateStr}st`;
    } else if (lastChar === '2' && dateStr !== '12') {
      dateStr = `${dateStr}nd`;
    } else if (lastChar === '3' && dateStr !== '13') {
      dateStr = `${dateStr}rd`;
    } else {
      dateStr = `${dateStr}th`;
    }
  
    return dateStr;
  };
  
  // function to format a timestamp, accepts the timestamp and an `options` object as parameters
const timestamp = (
    timestamp,
    { monthLength = 'short', dateSuffix = true } = {}
  ) => {
    // create month object
    const months = monthLength === 'short'
    ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const dateObj = new Date(timestamp);
    const formattedMonth = months[dateObj.getMonth()];
  
    const dayOfMonth = dateSuffix
      ? addDateSuffix(dateObj.getDate())
      : dateObj.getDate();
  
    const year = dateObj.getFullYear();
    let hour = dateObj.getHours() % 12 || 12; // Convert 0 hours to 12
  
    const minutes = (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();
  
    // set `am` or `pm`
    const periodOfDay = dateObj.getHours() >= 12 ? 'pm' : 'am';
  
    const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;
  
    return formattedTimeStamp;
  };
  
  module.exports = timestamp;