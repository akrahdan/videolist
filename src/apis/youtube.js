import axios from "axios";

const KEY = "AIzaSyBPeyeZqdjjVd0CPqMyTxNToV3WvoQ6d-s";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        key: KEY,
        part: "snippet",
        maxResults: 5
    
    }
    
})