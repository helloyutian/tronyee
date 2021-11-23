import axiosRequest from './require';

// 企业信息
export const getCompanyInfo = (data: any) => axiosRequest({
    url: '/open/company/info',
    method: 'POST',
    data
});
// 文章管理列表
export const getArticleInfo = (data: any) => axiosRequest({
    url: '/open/article/info',
    method: 'POST',
    data
});
// 文章详情
export const getArticleGet = (data: any) => axiosRequest({
    url: '/open/article/get',
    method: 'POST',
    data
});
// 品牌信息列表
export const getBrandInfo = (data: any) => axiosRequest({
    url: '/open/brand/info',
    method: 'POST',
    data
});
// 品牌信息列表
export const getBrandGet = (data: any) => axiosRequest({
    url: '/open/brand/get',
    method: 'POST',
    data
});
// 资料下载信息列表
export const getOssInfo = (data: any) => axiosRequest({
    url: '/open/oss/info',
    method: 'POST',
    data
});
// 根据类型获取oss信息
export const getOssByType = (data: any) => axiosRequest({
    url: '/open/oss/getOssByType',
    method: 'POST',
    data
});
// 货品信息列表
export const getProductInfo = (data: any) => axiosRequest({
    url: '/open/product/info',
    method: 'POST',
    data
});
// 货品详情
export const getProductGet = (data: any) => axiosRequest({
    url: '/open/product/get',
    method: 'POST',
    data
});
