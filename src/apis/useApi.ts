import {
    useQuery,
    UseQueryResult,
} from 'react-query';
import { ApiBeer } from '../apis/models/ApiBeer.js';
import beer from '../assets/Houzz Beer.png';


const BASE_URL = 'https://api.punkapi.com/v2/';

const data = {
    id: 1,
    name: 'Nice Beer',
    image_url: beer,
    tagline: 'American Beer',
    description: 'The Himalayan Times is an English-language broadsheet newspaper published and distributed daily in Nepal. Rajan Pokhrel is the acting editor. In the annual newspaper classification report published by Press Council Nepal, it was placed in the A+ category, the highest possible rank',
    ingredients: {
        wheat: {any: 'thing'},
        yeast: 'this and that',
        grain: {amount: 10},
        hops: {amount: 15},
    },
};


export const useAllBeers = (page: number, pageSize = 10): UseQueryResult<ApiBeer[]> => {
    return useQuery({
        queryKey: ['getAllBeers', page],
        queryFn: async () => {
            // const url = `${BASE_URL}/beers?page=${page}&per_page=${pageSize}`;
            // const response = await fetch(url, {mode: 'no-cors'});
            //
            // console.log(response.status);
            // const data = await response.json() as string;
            //
            // return JSON.parse(data) as ApiBeer[];

            return [
                data,
                data,
                data,
                data,
                data,
                data,
            ] as ApiBeer[];
        },
        onError: (err) => {
            console.error(err);
        },
    });
};