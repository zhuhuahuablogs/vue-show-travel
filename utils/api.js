import axios from 'axios'
import {Message} from 'iview'

axios.interceptors.request.use(config=> {//请求拦截配置
  return config;
}, err=> {
  Message.error({message: '请求超时!'});
  return Promise.resolve(err);
})
axios.interceptors.response.use(data=> {
  if (data.status && data.status == 200 && data.data.status == 'error') {
    Message.error({message: data.data.msg});
    return;
  }
  return data;
}, err=> {
  if (err.response.status == 504||err.response.status == 404) {
    Message.error({message: '服务器被吃了⊙﹏⊙∥'});
  } else if (err.response.status == 403) {
    Message.error({message: '权限不足,请联系管理员!'});
  }else if(err.response.status == "error"){
    Message.error({message: '权限不足,请联系管理员!'});
  }else {
    Message.error({message: '未知错误!'});
  }
  return Promise.resolve(err);
})

let base = '';//配置公共的路径-----

export const postRequest = (url, params,middleware=false) => {
  //如果不要公告配置url的话，middleware = true
  if(middleware){
    base = ''
  }
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}
export const postjosnRequest = (url, params,middleware=false) => {
  if(middleware){
    base = "";
  }
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
  /*  transformRequest: [function (data) {//  发送请求转码
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],*/
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  });
};
//上传图片
export const uploadFileRequest = (url, params,middleware=false) => {
  if(middleware){
    base = "";
  }
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}
export const uploadbaseToqiniu= (url, params,token) => {
  return axios({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    headers: {
      'Content-Type': 'application/octet-stream',
      'Authorization':'UpToken '+token
    }
  });
}
export const putRequest = (url, params,middleware=false) => {
  if(middleware){
    base = "";
  }
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}
export const putjsonRequest = (url, params,middleware=false) => {
  // console.log("put");
  if(middleware){
    base = "";
  }
  return axios({
    method: 'put',
    url: `${base}${url}`,
    data: params,
    /*transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],*/
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  });
}
export const deleteRequest = (url,params,middleware=false) => {
  if(middleware){
    base = "";
  }
  return axios({
    method: 'delete',
    url: `${base}${url}`,
    params:params
  });
}
export const getRequest = (url,params={},middleware=false) => {
    let strUrl = "";
    if(middleware){
      base = "";
    }
    strUrl = `${base}${url}`;

    if(params){

      return axios({
        method: 'get',
        url: strUrl,
        params:params
      });
    }else{
      return axios({
        method: 'get',
        url: strUrl,
      });
    }
}

