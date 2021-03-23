import React from 'react';

type Props = {
    title: string;
    isActive?: boolean;
}

const Head = ({title, isActive} : Props) => {
    return (
        <div>
            <h1>{ title }</h1>
            {isActive && <h3>is active</h3>}
        </div>
    );
};

Head.defaultProps = {
    title: 'Head title',
    isActive: true
}

export default Head;