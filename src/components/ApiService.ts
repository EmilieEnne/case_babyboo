import axios from 'axios';

export const getRandomBeers = async () => {
    try {
        const response = await axios.get("https://api.punkapi.com/v2/beers/random");
        return response.data;
    } catch (error) {
        console.log(error);
    }
};