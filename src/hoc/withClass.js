import React from 'react';

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/> {/*Spread operator passes all props to the wrapped component*/}
        </div>
    );

}

export default withClass;