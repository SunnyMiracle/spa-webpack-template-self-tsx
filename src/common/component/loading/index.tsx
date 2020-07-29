import * as React from 'react';
import style from './index.less';


const MyLoadingComponent = (props) => {
    // Handle the loading state
    if (props.pastDelay) {
        return (
            <div className={style.loading}>
                loading……
            </div>
        );
    } else if (props.error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    } else {
        return null;
    }
};
export default MyLoadingComponent;
