import axios from "axios";
import methods from "./methods";
export default class KoiosTinyClientClass {
    client;
    methods;
    constructor(baseURL) {
        this.client = axios.create({ baseURL });
        this.client.interceptors.response.use((response) => {
            return {
                ok: response,
            };
        }, (error) => {
            return {
                error,
            };
        });
        this.methods = methods(this.client);
    }
}
