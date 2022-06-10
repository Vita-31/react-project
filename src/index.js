import {createRoot} from 'react-dom/client'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UsersProvider from './context/UsersContext';

const root = createRoot(document.getElementById('root'))
root.render(
    <UsersProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </UsersProvider>   
)