import {
    ReactElement,
    useCallback,
    useState,
} from 'react';
import CatalogItem from '../../components/CatalogItem.tsx';
import { useAllBeers } from '../../apis/useApi.js';


const AllBeersView = (): ReactElement => {
    const [page, setPage] = useState(1);

    const {data: beers, isLoading} = useAllBeers(page);

    const handleLoadMore = useCallback(() => {
        setPage(page + 1);
    }, [page]);

    return (
        <div>
            <div className="d-flex flex-column gap-4">
                {beers?.map((item, index) =>
                    <CatalogItem
                        key={index}
                        beer={item}
                    />,
                )}
            </div>

            <p className="mt-4 text-primary fw-semibold text-center">
                {isLoading
                    ? <span>Loading...</span>
                    : <span role="button" onClick={handleLoadMore}>Load more &#9660;</span>
                }
            </p>
        </div>
    );
};

export default AllBeersView;