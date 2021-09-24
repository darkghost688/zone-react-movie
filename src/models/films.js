import uri from "@/config/uri";
import axios from "axios";

const films = {
    getFilmList(params){
        return axios.get(uri.getFilmList,{
            params, 
        })
    }
}
export default films;