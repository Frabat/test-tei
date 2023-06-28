import React from 'react';

// Declaring type of props - see "Typing Component Props" for more examples
type AppProps = {
    message: string;
}; /* use `interface` if exporting so that consumers can extend */

const Test = ({ message }: AppProps) => <div>{message}</div>;

export {Test};
