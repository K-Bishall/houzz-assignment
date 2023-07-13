import './App.css';
import {
    Tab,
    Tabs,
} from 'react-bootstrap';
import AllBeers from './pages/AllBeers.tsx';
import MyBeers from './pages/MyBeers.tsx';

function App() {
    return (
        <div>
            <Tabs
                defaultActiveKey="all-beers"
                className="pb-2"
            >
                <Tab eventKey="all-beers" title="All Beers">
                    <AllBeers/>
                </Tab>
                <Tab eventKey="my-beers" title="My Beers">
                    <MyBeers/>
                </Tab>
            </Tabs>
        </div>
    );
}

export default App;
