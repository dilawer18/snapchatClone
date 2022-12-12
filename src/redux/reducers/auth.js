import { State } from "react-native-gesture-handler";
import types from "../types";

const initial_state = {
    isLogin: false
}
export default function (initial_state, action) {
    switch (action.types) {
        case types.IS_LOGIN:
            const data = action.payload
            return { isLogin: data }


        default:
            return { ...State }
    }
}