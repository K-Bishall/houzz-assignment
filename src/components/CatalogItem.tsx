import { ReactElement } from 'react';
import {
    Card,
    Tooltip,
} from 'react-bootstrap';
import { ApiBeer } from '../apis/models/ApiBeer.js';

interface CatalogItemProps {
    beer: ApiBeer;
}

const CatalogItem = ({beer}: CatalogItemProps): ReactElement => {
    const ingredients = Object.keys(beer.ingredients).join(', ');

    return (
        <Card className="shadow border-0 catalog-card">
            <Card.Body className="d-flex flex-row gap-4 align-items-center">
                <Tooltip title={`Ingredients: ${ingredients}`} placement="top">
                    <img src={beer.image_url} alt={beer.name} style={{height: '10em'}}/>
                </Tooltip>
                <div className="d-flex flex-column gap-2">
                    <p className="fs-4 fw-semibold m-0">{beer.name}</p>
                    <p
                        className="fw-semibold m-0"
                        style={{color: 'goldenrod'}}
                    >
                        {beer.tagline}
                    </p>
                    <p className="m-0">{beer.description}</p>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CatalogItem;