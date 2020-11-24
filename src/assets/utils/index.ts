import moment from "moment";
import md5 from 'md5';


export const convert_date = (value: any) => {
  if (value) {
    let resutl = moment(
      moment.utc(value).format("YYYY-MM-DD HH:mm:ss")
    ).fromNow();
    resutl = resutl.replace("a few seconds ago", "vài giây trước");
    resutl = resutl.replace("seconds ago", "giây trước");
    resutl = resutl.replace("a minute ago", "1 phút trước");
    resutl = resutl.replace("minutes ago", "phút trước");
    resutl = resutl.replace("an hour ago", "1 giờ trước");
    resutl = resutl.replace("hours ago", "giờ trước");
    resutl = resutl.replace("in", "");
    resutl = resutl.replace("a day ago", "1 ngày trước");
    resutl = resutl.replace("days ago", "ngày trước");
    resutl = resutl.replace("a month ago", "1 tháng trước");
    resutl = resutl.replace("months ago", "tháng trước");
    resutl = resutl.replace("a year ago", "1 năm trước");
    resutl = resutl.replace("years ago", "năm trước");

    return resutl;
  } else {
    return "Chưa cập nhật";
  }
};

export function genKey(){
  let date = new Date().getTime();
  let baseKey = md5(date.toString());
  let listKey = baseKey.split('');

  let key1 = "";
  let key2 = "";
  let key3 = "";
  let key4 = "";
  let key5 = "";
  for (let i = 0; i < 20; i++) {
    if (i < 4)
      key1 = key1 + listKey[i]
    else if (i >= 4 && i < 8)
      key2 = key2 + listKey[i]
    else if (i >= 8 && i < 12)
      key3 = key3 + listKey[i]
    else if (i >= 12 && i < 16)
      key4 = key4 + listKey[i]
    else if (i >= 16)
      key5 = key5 + listKey[i]
  }
  let mainKey = (key1 + "-" + key2 + "-" + key3 + "-" + key4 + "-" + key5).toUpperCase();
  return mainKey;
}

