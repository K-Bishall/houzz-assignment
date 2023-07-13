import {
    FormEvent,
    ReactElement,
    useCallback,
    useState,
} from 'react';
import {
    Button,
    Form,
} from 'react-bootstrap';
import beerImage from '../../assets/Houzz Beer.png';
import { BeerItem } from '../../apis/models/BeerItem.js';

interface NewBeerFormProps {
    onSubmit: (beer: BeerItem) => void;
    onCancel: () => void;
}

const NewBeerForm = ({onSubmit, onCancel}: NewBeerFormProps): ReactElement => {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = useCallback((event: FormEvent) => {
        event.preventDefault();
        event.stopPropagation();

        const newBeer: BeerItem = {
            name: name,
            tagline: genre,
            description: description,
            image_url: beerImage,
        };

        onSubmit(newBeer);
    }, [description, genre, name]);

    return (
        <div className="p-4">
            <p className="fs-4 fw-semibold">Add a New Beer</p>
            <div className="p-2 mb-2" style={{borderWidth: '1px', borderColor: 'gray', width: '8em'}}>
                <img src={beerImage} alt={'Beer Image'} style={{height: '8em'}}/>
            </div>
            <Form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                <Form.Control
                    type="text"
                    placeholder="Beer name*"
                    required
                    onChange={event => setName(event.target.value)}
                />
                <Form.Control
                    type="text"
                    placeholder="Genre*"
                    required
                    onChange={event => setGenre(event.target.value)}
                />
                <Form.Control
                    as="textarea"
                    placeholder="Description*"
                    required
                    onChange={event => setDescription(event.target.value)}
                />

                <div className="d-flex justify-content-end gap-2">
                    <Button variant="secondary" onClick={onCancel}>Cancel</Button>
                    <Button variant="primary" type="submit">Save</Button>
                </div>
            </Form>
        </div>
    );
};

export default NewBeerForm;