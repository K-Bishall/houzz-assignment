import { ReactElement } from 'react';
import {
    Nav,
    NavItem,
} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';


const Navbar = (): ReactElement => {
    const location = useLocation();
    return (
        <Nav className="pb-3"
             activeKey={location.pathname}
        >
            <NavItem>
                <Nav.Link href="/all-beers"> All Beers </Nav.Link>
            </NavItem>

            <NavItem>
                <Nav.Link href="/my-beers"> My Beers </Nav.Link>
            </NavItem>
        </Nav>
    );
};

export default Navbar;