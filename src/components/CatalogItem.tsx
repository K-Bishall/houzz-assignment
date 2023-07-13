import { ReactElement } from 'react';
import {
    Card,
    OverlayTrigger,
    Tooltip,
} from 'react-bootstrap';
import { BeerItem } from '../apis/models/BeerItem.js';

interface CatalogItemProps {
    beer: BeerItem;
}

const CatalogItem = ({beer}: CatalogItemProps): ReactElement => {
    const ingredients = beer?.ingredients && Object.keys(beer?.ingredients).join(', ');

    return (
        <Card className="shadow border-0 catalog-card">
            <Card.Body className="px-5 d-flex gap-5 align-items-center">
                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip title={ingredients ? `Ingredients: ${ingredients}` : undefined}>
                            Ingredients: {ingredients}
                        </Tooltip>
                    }
                >
                    <img
                        src={beer.image_url}
                        alt={beer.name}
                        style={{height: '8em'}}
                    />
                </OverlayTrigger>

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