declare module 'vue-awesome-swiper';
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
declare module '*.json' {
  const value: any;
  export default value;
}

interface ObjectType {
  [attrName: string]: any
}
// 请求接口参数类 ---------------------
interface RequestParamsType {
  method: string;
  data?: object;
  params?: object;
  headers?: object;
}
