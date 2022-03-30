import { API_BASE_URL } from "./app-config";

export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  let options = {
    // 리퀘스트 옵션. 컨텐트 타입, url(베이스 url + api), 메소드
    headers: headers,
    url: API_BASE_URL + api, // localhost:8090 + /todo => localhost:8090/todo
    method: method,
  };

  if (request) {
    // GET method
    options.body = JSON.stringify(request);
  }
  return fetch(options.url, options)
    .then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          // response.ok가 true이면 정상적인 리스폰스를 받은것, 아니면 에러 리스폰스를 받은것.
          return Promise.reject(json);
        }
        return json;
      })
    )
    .catch((error) => {
      // 추가된 부분
      console.log(error.status);
      if (error.status === 403) {
        window.location.href = "/"; // redirect
      }
      return Promise.reject(error);
    });
}
