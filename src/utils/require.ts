import axios, { Method } from 'axios'

interface RequestOptionsType {
    url: string;
    method: Method;
    data?: any;
    params?: any;
    headers?: any;
}

// axios.defaults.baseURL = 'http://47.106.87.113:8080/'


// axios.defaults.transformRequest = [function(data, headers){
//     if (/x-www-form-urlencoded/i.test(headers['Content-Type'])) {
//         return qs.stringify(data)
//     } else if (/multipart\/form-data/i.test(headers['Content-Type'])) {
//         const formData = new FormData();
//         Object.keys(data).forEach(key => {
//             formData.append(key, data[key]);
//         })
//         return formData
//     } else {
//         return JSON.stringify(data)
//     }
// }]


const axiosRequest = ({ url, method, data, params, headers }: RequestOptionsType): Promise<any> => {
    return new Promise((resolve, reject) => {
        axios({ url, method, data, params, headers }).then((res: any) => {
            if (!/^2[0-9]{2}$/.test(String(res.status))) {
                reject(res)
                throw res
            }
            const resData: any = res.data;
            resolve(resData);
        }).catch((err: Error) => {
            throw err;
        })
    })
}

export default axiosRequest;
