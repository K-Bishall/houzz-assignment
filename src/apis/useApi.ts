import {
    useInfiniteQuery,
    UseInfiniteQueryResult,
    useMutation,
    UseMutationResult,
    useQuery,
    useQueryClient,
    UseQueryResult,
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

export const useMyBeers = (): UseQueryResult<BeerItem[]> => {
    return useQuery({
        queryKey: ['getMyBeers'],
        queryFn: () => {
            const localData = localStorage.getItem('my-beers') ?? '[]';

            return JSON.parse(localData) as BeerItem[];
        },
    });
};

interface AddNewBeerProps {
    newBeer: BeerItem;
}

export const useAddNewBeer = (): UseMutationResult<
    void,
    unknown,
    AddNewBeerProps
> => {
    const queryClient = useQueryClient();

    return useMutation(
        ['addNewBeer'],
        async ({newBeer}: AddNewBeerProps) => {
            const queryKey = ['getMyBeers'];

            const previousData: BeerItem[] = queryClient.getQueryData(queryKey) ?? [];
            const newData = [...previousData, newBeer];

            const jsonData = JSON.stringify(newData);
            localStorage.setItem('my-beers', jsonData);

            await queryClient.invalidateQueries(queryKey);
        },
    );
};