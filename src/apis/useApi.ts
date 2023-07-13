import {
    useInfiniteQuery,
    UseInfiniteQueryResult,
} from 'react-query';
import { BeerItem } from './models/BeerItem.js';


const BASE_URL = 'https://api.punkapi.com/v2/';

export const useAllBeers = (pageSize = 10): UseInfiniteQueryResult<BeerItem[]> => {
    return useInfiniteQuery({
        queryKey: ['getAllBeers'],
        refetchOnWindowFocus: false,
        queryFn: async ({pageParam = 1}) => {
            const url = `${BASE_URL}/beers?page=${pageParam}&per_page=${pageSize}`;
            const response = await fetch(url);

            const data = await response.json();

            return data as BeerItem[];
        },
        getNextPageParam: (lastPage, allPages) =>
            lastPage.length === 0 ? undefined : allPages.length + 1,
        onError: (err) => {
            console.error(err);
        },
    });
};