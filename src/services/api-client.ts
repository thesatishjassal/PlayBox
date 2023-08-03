import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f64f58bf2a9541ee8d356925ae68fce1'
    }
})
