import * as React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import OwnerFindPage from './components/OwnerFind/OwnerFindPage';
import VetsPage from './components/Vets/VetsPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Menu from './components/Menu/Menu'
import OwnerListPage from './components/OwnerList/OwnerListPage';
import OwnerAddPage from './components/OwnerAdd/OwnerAddPage';
import OwnerShowPage from './components/OwnerShow/OwnerShowPage';
import addPet from './components/NewPet/addPet';
import petVisit from './components/PetVisits/PetVisit';
import addVisit from './components/NewVisit/addVisit';

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
            <Route path="/owners/show/:id/:name" component={OwnerShowPage} />
            <Route path="/pet/add/:id/:lastname" component={addPet} />
            <Route path="/pet/visit/:petId" component={petVisit} />
            <Route path="/pet/add/:id" component={addVisit} />
            <Route component={ErrorPage} />
        </Switch>
    </div>
</BrowserRouter>
)