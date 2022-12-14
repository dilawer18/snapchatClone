import { setUserData } from "../../utils/utils";
import types from "../types";

const initial_state = {
    isLogin: false
}

export default function (state = initial_state, action) {
    console.log("reducer called ========>>>>>>>>>>>>>")
    switch (action.type) {
        case types.IS_LOGIN:
            const data = action.payload
            setUserData(data)
            return { isLogin: data }
        case types.SET_LOGIN:
            return { isLogin: action.payload }
        default:
            return { ...state }
    }
}