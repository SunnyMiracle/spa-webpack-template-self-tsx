import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import * as ReactLoadable from 'react-loadable';
import Loading from 'common/component/loading';


export default function (props) {
    const pageALoader = ReactLoadable({
        loader: () => import(/* webpackChunkName: "pageA" */'../pageA'),
        loading: Loading,
        delay: 100
    });
    const pageBLoader = ReactLoadable({
        loader: () => import(/* webpackChunkName: "pageB" */'../pageB'),
        loading: Loading,
        delay: 100
    });


    return (
        <Switch>
            <Route path="/a" component={pageALoader}/>
            <Route path="/b" component={pageBLoader}/>
        </Switch>
    );
}
