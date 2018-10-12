/**
 * ProjectName: ad-frontend-base
 * FilePath: \src\app\util\request.ts
 * Created Date: Monday, August 27th 2018, 1:31:44 pm
 * @author: liaodh
 * @summary: short description for the file
 * -----
 * Last Modified: Friday, October 12th 2018, 4:15:53 pm
 * Modified By: liaodh
 * -----
 * Copyright (c) 2018 jiguang
 */



import * as fetch from 'isomorphic-fetch';
import { environment } from 'environment';
import * as queryString from 'querystring';
import { docCookies } from './util';



function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error: any = new Error(response.status + ' - ' + response.url);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

function checkCode(json) {
  if (json.code === 4001) {
    const err = new Error(json.message);
    err['res'] = json;
    const url = environment.loginUrl + `?next_url=${encodeURIComponent(location.href)}`;
    console.log(url);
    location.href = url;
    throw err;
  } else if (json.code !== 2000) {
    throw new Error(json.message);
  } else {
    return json;
  }

}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options, qdata?) {
  // const auth = btoa(infos.sessionid);
  // options.headers = Object.assign(options.headers || {}, {
  //   Authorization: 'Bearer ' + localStorage.getItem('Jtoken'),
  //   withCredentials: 'include'
  // });
  options.credentials = 'include';
  options.mode = 'cors';
  if (options.method !== 'get') {
    options.headers = options.headers ? options.headers : {};
    options.headers['Content-Type'] = 'application/json';
    if (qdata) {
      options.body = JSON.stringify(qdata);
    }
  } else {
    if (qdata) {
      // tslint:disable-next-line:no-parameter-reassignment
      url = url + '?' + queryString.stringify(qdata);
    }
  }
  return fetch(environment.baseUrl + url, options)
    // .then(checkStatus)
    .then(parseJSON)
    .then(checkCode)
    .then((data) => data)
    .catch((err) => { throw err; });
}

export function cache(target, propertyKey: string, descriptor: PropertyDescriptor) {
  const old = descriptor.value;
  let invoked = false;
  let result;
  const newValue = function (...args) {
    if (invoked === false) {
      const res = old.apply(this, args);
      invoked = true;
      result = res;
      return res;
    } else {
      return result;
    }
  };
  Object.assign(newValue, old);
  descriptor.value = newValue;
}
