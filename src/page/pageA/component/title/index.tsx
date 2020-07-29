import * as React from 'react';
import style from './index.less';

export interface IProps {
    title: string
}
class Title extends React.Component<IProps> {

     render() {
        return (
            <div className={style.color}>{this.props.title}</div>
        )
    }
}

export default Title;
