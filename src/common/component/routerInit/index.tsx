import * as React from 'react';


function checkLoginStatus(Page, title = 'Home') {

    class Wrapped extends React.Component {

        constructor(props) {
            super(props);
            this.changeWindowTitle(title);
        }

        public changeWindowTitle = (text) => {
            if (text) {
                document.title = text;
            }
        };

        public render() {
            return <Page {...this.props}/>;
        }

    }
    return Wrapped;
}

export default checkLoginStatus;
