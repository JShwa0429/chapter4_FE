
import axios from "axios";

// axios 기본 주소 & header 타입 세팅
export const api = axios.create({
  baseURL: "http://3.39.231.71",
  // baseURL: "http://localhost:3001/api/",
  // withCredentials:true,
});

// 매 실행 시 토큰값 넣기, 없으면 null값이 들어간다
api.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem("refresh_token");
  config.headers.common["authorization"] = `Bearer ${accessToken}`;
  return config;
});
// const accessToken = res.data;
// api.defaults.headers.common["authorization"] = `Bearer ${accessToken.token}`;