import {
    ReactElement,
    useCallback,
    useState,
} from 'react';
import EmptyView from '../my_beers/EmptyView.js';
import {
    Button,
    Modal,
} from 'react-bootstrap';
import { BeerItem } from '../../apis/models/BeerItem.js';
import NewBeerForm from './NewBeerForm.js';
import CatalogItem from '../../components/CatalogItem.js';
import {
    useAddNewBeer,
    useMyBeers,
} from '../../apis/useApi.js';


const MyBeersView = (): ReactElement => {
    const {data: myBeersList} = useMyBeers();
    const {mutate: addNewBeer} = useAddNewBeer();

    const [showModal, setShowModal] = useState(false);
    const handleClickAddNew = () => {
        setShowModal(true);
    };

    const handleAddNewBeer = useCallback((newBeer: BeerItem) => {
        addNewBeer({newBeer});
        setShowModal(false);
    }, [addNewBeer]);

    return (
        <div>
            <div className="d-flex justify-content-end mb-3">
                <Button onClick={handleClickAddNew}>Add a new beer</Button>
            </div>

            {myBeersList?.length
                ? <div className="d-flex flex-column gap-4">
                    {myBeersList?.map((item, index) =>
                        <CatalogItem
                            key={index}
                            beer={item}
                        />,
                    )}
                </div>
                : <EmptyView onClickHere={handleClickAddNew}/>
            }

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <NewBeerForm onSubmit={handleAddNewBeer} onCancel={() => setShowModal(false)}/>
            </Modal>
        </div>
    );
};

export default MyBeersView;