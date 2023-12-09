import axios from "axios";
import { FETCH_INVENTORIES } from "./actionTypes";

const url = "https://assignment18.vishalsoni7.repl.co"

export const GetInventories = () => async (dispatch) => {
    try{
        setTimeout(async () => {
            const {
                data: {data}
            } = await axios.get(`${url}/inventories`)
            console.log(data)
            dispatch({ type: FETCH_INVENTORIES, payload: data})
        }, 500)
    }
    catch(error){
        console.error("Error while fetching inventories: ", error)
    }
}