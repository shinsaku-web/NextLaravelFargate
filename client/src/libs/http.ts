import Axios from "axios";
const getApiPath = () => {
    if (process.env.NODE_ENV==="production") {
      return `http://${process.env.NEXT_PUBLIC_MY_DOMAIN}/api`
    }
    if (typeof window === "undefined") {
      return "http://nginx/api" // ssr
    }
    return "http://localhost/api" // csr
}

const http = Axios.create({
  // csrとssr時のリクエスト先が異なるため
    // TODO: 開発環境か本番かで分ける、本番はlocalhostのみでOK
  baseURL: getApiPath()
});

export default http;
