import {
    Navigate,
    Route,
} from 'react-router-dom';
import AllBeersView from './pages/all_beers/AllBeersView.js';
import MyBeersView from './pages/my_beers/MyBeersView.js';

const routes = [
    <Route path="/" element={<Navigate to="all-beers"/>}/>,
    <Route path="all-beers" element={<AllBeersView/>}/>,
    <Route path="my-beers" element={<MyBeersView/>}/>,
];

export default routes;