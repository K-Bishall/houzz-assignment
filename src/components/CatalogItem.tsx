import { ReactElement } from 'react';
import {
    Card,
    OverlayTrigger,
    Tooltip,
} from 'react-bootstrap';
import { BeerItem } from '../apis/models/BeerItem.js';

interface CatalogItemProps {
    beer: BeerItem;
    className?: string;
}

const CatalogItem = ({beer, className}: CatalogItemProps): ReactElement => {
    const ingredients = beer?.ingredients && Object.keys(beer?.ingredients).join(', ');

    return (
        <div className={className}>
            <Card className={`shadow border-0 catalog-card`}>
                <Card.Body className="p-5 d-flex gap-5 align-items-center">
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
                        <p className="fs-4 fw-semibold m-0 truncate truncate-oneline">{beer.name}</p>
                        <p
                            className="fw-semibold m-0 truncate truncate-oneline"
                            style={{color: 'goldenrod'}}
                        >
                            {beer.tagline}
                        </p>
                        <p className="m-0 truncate truncate-twoline">{beer.description}</p>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CatalogItem;