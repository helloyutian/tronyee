// 日期格式化
export const dateFormate = (date: Date, format = 'YYYY-MM-DD hh:mm:ss') => {
    // format  Y:年 M:月 D:日 h:时 m:分 s: 秒  例如：YYYY-MM-DD hh:mm:ss
    // if (typeof format !== 'string') {
    //     throw new Error('DateFormate 的第二个参数必须是字符串')
    // }
    const time = new Date(date);
    const timeObj: ObjectType = {
        y: String(time.getFullYear()),
        m: String(time.getMonth() + 1),
        d: String(time.getDate()),
        h: String(time.getHours()),
        min: String(time.getMinutes()),
        s: String(time.getSeconds())
    }
    const dateArr = format.split('')
    const fixPre = (i: number, key: string) => {
        const len = timeObj[key].length - 1
        if (len >= 0) {
            dateArr[i] = timeObj[key][len]
            timeObj[key] = timeObj[key].substr(0, len)
        } else {
            dateArr[i] = '0'
        }
    }
    for (let i = dateArr.length - 1; i >= 0; i--) {
        switch (dateArr[i]) {
            case 'Y':
                fixPre(i, 'y')
                break
            case 'M':
                fixPre(i, 'm')
                break
            case 'D':
                fixPre(i, 'd')
                break
            case 'h':
                fixPre(i, 'h')
                break
            case 'm':
                fixPre(i, 'min')
                break
            case 's':
                fixPre(i, 's')
                break
            default:
                break
        }
    }
    return dateArr.join('')
}
