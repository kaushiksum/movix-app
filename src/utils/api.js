import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMWNhMWI2Yzk0NDllNDVmZDFlZjVmNDc5ZDEwOTNjOSIsInN1YiI6IjY1MmEyZGQ1MzU4ZGE3MDE0MDZiZDhkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jNBMliWjGuLqp0zqXusPv7SSgRGM3On_yC95sBE5uEA"


const headers = {

    Authorization: "bearer " + TMDB_TOKEN, 
};

export const fetchDataFromApi = async (url, params) => {

    try {
        const {data} = await axios.get(BASE_URL + url,{
         headers,
         params

        })

        return data;

        
    } catch (err) {
        console.log(err)
        return err;
        
    }
}