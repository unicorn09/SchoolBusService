import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// DASHBOARDS

import BasicDashboard from './Basic/';
import BasicDashboard1 from './Basic1/';
import BasicDashboard2 from './Basic2/';
import BasicDashboard3 from './Basic3/';
// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

const Dashboards = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <Route path={`${match.url}/basic`} component={BasicDashboard}/>
                    <Route path={`${match.url}/basic1`} component={BasicDashboard1}/>
                    <Route path={`${match.url}/basic2`} component={BasicDashboard2}/>
                    <Route path={`${match.url}/basic3`} component={BasicDashboard3}/>
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Dashboards;