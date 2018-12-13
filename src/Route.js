import * as React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import OwnerFindPage from './components/OwnerFind/OwnerFindPage';
import VetsPage from './components/Vets/VetsPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Menu from './components/Menu/Menu'
import OwnerListPage from './components/OwnerFind/OwnerListPage';
import OwnerAddPage from './components/OwnerFind/OwnerAddPage';

export default () => 
(<BrowserRouter>
    <div>
        <Menu />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/owners/find" component={OwnerFindPage} />
            <Route path="/vets" component={VetsPage} />
            <Route path="/error" component={ErrorPage} />
            <Route path="/owners/list/:id" component={OwnerListPage} />
            <Route path="/owners/list" component={OwnerListPage} />
            <Route path="/owners/add" component={OwnerAddPage} />
            <Route component={ErrorPage} />
        </Switch>
    </div>
</BrowserRouter>
)