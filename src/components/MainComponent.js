import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from './dashboard';
import Home from './HomeComponent';

import RestaurantList from './restaurant-list';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={DashBoard}/>
            {/* <Route path='/home' component={LoggedInHeader}/> */}
            <Route exact path='/home/restaurants' component={Home}/>    
            <Route exact path='/arthi/restaurants/:id' component={RestaurantList}/>    
          
          {/* <Route exact path='/restaurant' component={RestaurantData}/> */}
          {/* <Route exact path='/form' component={Login}/> */}
          {/* <Route exact path='/newsignin' component={Register}/> */}


        </Switch>
    </main>
)

export default Main;