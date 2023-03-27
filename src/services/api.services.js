import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com',
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'ea08af5601msh3c349b4eba2412fp104c36jsn421897bd0bb0',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};




export const ApiServices = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options)
    return response.data
  },
}