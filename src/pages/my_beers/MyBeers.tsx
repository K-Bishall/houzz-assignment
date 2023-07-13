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
import defaultBeer from '../../assets/Houzz Beer.png';


const MyBeers = (): ReactElement => {
    const [myBeersList, setMyBeersList] = useState<BeerItem[]>([]);

    const [showModal, setShowModal] = useState(false);
    const handleClickAddNew = () => {
        setShowModal(true);
    };

    const handleAddNewBeer = useCallback((name: string, genre: string, description: string) => {
        const beer: BeerItem = {
            name,
            tagline: genre,
            description: description,
            image_url: defaultBeer,
        };

        setMyBeersList([...myBeersList, beer]);
    }, [myBeersList]);

    return (
        <div>
            <div className="d-flex justify-content-end mb-3">
                <Button onClick={handleClickAddNew}>Add a new beer</Button>
            </div>
            <EmptyView onClickHere={handleClickAddNew}/>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <NewBeerForm onSubmit={handleAddNewBeer} onCancel={() => setShowModal(false)}/>
            </Modal>
        </div>
    );
};

export default MyBeers;