import './App.css';
import {
    Tab,
    Tabs,
} from 'react-bootstrap';
import AllBeers from './pages/AllBeers.tsx';
import MyBeers from './pages/MyBeers.tsx';
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
                        <AllBeers/>
                    </Tab>
                    <Tab eventKey="my-beers" title="My Beers">
                        <MyBeers/>
                    </Tab>
                </Tabs>
            </div>
        </QueryClientProvider>
    );
}

export default App;
