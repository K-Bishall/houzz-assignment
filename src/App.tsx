import './App.css';
import {
    Tab,
    Tabs,
} from 'react-bootstrap';
import AllBeersView from './pages/all_beers/AllBeersView.tsx';
import MyBeersView from './pages/my_beers/MyBeersView.tsx';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Tabs
                    defaultActiveKey="all-beers"
                    className="pb-3"
                >
                    <Tab eventKey="all-beers" title="All Beers">
                        <AllBeersView/>
                    </Tab>
                    <Tab eventKey="my-beers" title="My Beers">
                        <MyBeersView/>
                    </Tab>
                </Tabs>
            </div>
        </QueryClientProvider>
    );
}

export default App;
