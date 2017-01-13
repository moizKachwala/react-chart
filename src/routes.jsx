import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app.jsx';
import HomePageComponent from './components/home.jsx';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={HomePageComponent} />
    </Route>
);

// <Route path="/posts/new" component={PostsNew} />