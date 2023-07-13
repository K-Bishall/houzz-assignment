import {
    ReactElement,
    useCallback,
} from 'react';
import CatalogItem from '../../components/CatalogItem.tsx';
import { useAllBeers } from '../../apis/useApi.js';


const AllBeersView = (): ReactElement => {
    const {
        data,
        isFetching,
        error,
        fetchNextPage,
    } = useAllBeers();

    const handleLoadMore = useCallback(() => {
        fetchNextPage();
    }, [fetchNextPage]);

    return (
        <div>
            <div className="d-flex flex-column gap-4">
                {data?.pages.map(page =>
                    page.map((beerItem, index) =>
                        <CatalogItem
                            key={index}
                            beer={beerItem}
                        />,
                    ),
                )}
            </div>

            {error ? <p className="mt-4 text-danger fw-semibold text-center">Error loading beers</p> : null}

            <p className="mt-4 text-primary fw-semibold text-center">
                {isFetching
                    ? <span>Loading...</span>
                    : <span role="button" onClick={handleLoadMore}>{error ? 'Retry' :
                        <span>Load more &#9660;</span>}</span>
                }
            </p>
        </div>
    );
};

export default AllBeersView;