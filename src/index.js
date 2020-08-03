import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";
import App from './components/App/App';
import ErrorBoundary from "./components/ErrorBoundary";
import RickAndMortyApi from "./services/rickAndMortyApi";
import {RickAndMortyApiProvider} from "./components/RickAndMortyApiContext/RickAndMortyApiContext";
import store from "./redux/store";

const rickAndMortyApi = new RickAndMortyApi();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundary>
                <RickAndMortyApiProvider value={rickAndMortyApi}>
                    <Router>
                        <App/>
                    </Router>
                </RickAndMortyApiProvider>
            </ErrorBoundary>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
