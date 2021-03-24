import React, { PureComponent } from 'react';

type Props = {
    text: string;
}

class ClassComponent extends PureComponent<Props> {
    render() {
        return (
            <div>
                { this.props.text}
            </div>
        );
    }
}


export default ClassComponent;