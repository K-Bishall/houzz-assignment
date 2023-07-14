import './App.css';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';
import {
    BrowserRouter,
    Routes,
} from 'react-router-dom';
import routes from './routes.js';
import Navbar from './components/Navbar.js';

const queryClient = new QueryClient();

function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Navbar/>
                <Routes children={routes}/>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
