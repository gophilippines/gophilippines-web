import axios from "axios";

axios.defaults.baseURL =
    "https://asia-east2-dev-gophil-1009.cloudfunctions.net/api";
axios.defaults.headers.post["Content-Type"] = "application/json";
