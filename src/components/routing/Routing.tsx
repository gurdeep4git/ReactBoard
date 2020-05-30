import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from "../../pages/dashboard/Dashboard";
import NotFound from "../../pages/notfound/NotFound";
import CoronaReport from "../../pages/corona-report/CoronaReport";

const Routing: React.FC = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/corona" component={CoronaReport} />
                <Route component={NotFound} />
            </Switch>
        </Fragment>
    )
}

export default Routing;
