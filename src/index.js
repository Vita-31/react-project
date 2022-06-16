import {createRoot} from 'react-dom/client'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UsersProvider from './context/UsersContext';
import { Provider } from 'react-redux';
import { store } from './store';

const root = createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <UsersProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </UsersProvider> 
    </Provider>
)