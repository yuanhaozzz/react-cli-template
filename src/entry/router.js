import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component, Suspense } from 'react';

import RouterConfig from '@/router/config';
import { Provider } from 'react-redux';
import Store from '@/store';

class Entry extends Component {
    render() {
        return (
            <Provider store={Store}>
                <BrowserRouter>
                    <Suspense fallback={<div>loading</div>}>
                        <Switch>
                            {RouterConfig.map((item) => (
                                <Route
                                    exact={item.exact}
                                    key={item.path}
                                    path={item.path}
                                    render={(props) => <item.component {...props} />}
                                />
                            ))}
                        </Switch>
                    </Suspense>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default Entry;
