import * as React from 'react';

export interface IProps {
    title: string
}
class Title extends React.Component<IProps> {

     render() {
        return (
            <div>{this.props.title}</div>
        )
    }
}

export default Title;
