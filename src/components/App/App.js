import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import AppMenu from "../AppMenu";
import PeopleList from "../pages/PeopleList";
import FavoriteList from "../pages/FavoriteList";
import HeroDetails from "../pages/HeroDetails";

function App() {
    return (
        <div className="app">
            <AppMenu/>
            <Switch>
                <Route path='/' component={PeopleList} exact/>
                <Route path='/hero-details/:id' component={HeroDetails} exact/>
                <Route path='/favorite-list' component={FavoriteList} exact/>
            </Switch>
        </div>
    );
}

export default App;
