import * as React from "react";
import { BrowserRouter } from 'react-router-dom';
import Routers from './page/router';

class App extends React.Component<{  }, null> {
    public render() {
        import(/* webpackChunkName: "lodash" */ 'lodash').then((_) => {
            const element = document.createElement('div');
            element.innerHTML = _.join(['hello', 'lodash'], ' ');
            document.body.appendChild(element);
        })
        return (
            <BrowserRouter>
                <Routers/>
            </BrowserRouter>
        );
    }
}

export default App;
