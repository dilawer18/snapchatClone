import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export async function apiReq() {

}
export function apiGet(endPoind, data, headers = {}, requesOptions) {
    return apiReq(endPoind, data, headers = {}, requesOptions)
}