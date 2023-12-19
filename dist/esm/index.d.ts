import { Axios } from "axios";
import methods from "./methods";
export default class KoiosTinyClientClass {
    client: Axios;
    methods: ReturnType<typeof methods>;
    constructor(baseURL: string);
}
export type * as KoiosTypes from "./types";
