import { ReactElement } from 'react';
import CatalogItem from '../components/CatalogItem.tsx';
import { useAllBeers } from '../apis/useApi.js';


const AllBeers = (): ReactElement => {
    const {data: beers} = useAllBeers(1);

    return (
        <div className="d-flex flex-column gap-4">
            {beers?.map((item, index) =>
                <CatalogItem
                    key={index}
                    beer={item}
                />,
            )}
        </div>
    );
};

export default AllBeers;