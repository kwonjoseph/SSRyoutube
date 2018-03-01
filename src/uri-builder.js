const uriBuilder = function(url, params) {
  let qs = '';
  for (let key in params) {
    qs += `${key}=${params[key]}&`;
  }
  url += '?' + qs.substring(0, qs.length - 1);
  return url;
}

export default uriBuilder;
