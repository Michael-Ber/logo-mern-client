import React from 'react';
import { Error } from '../error/Error';

export class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState(state => state.isError = true);
        console.log(error, errorInfo);
    }

    render() {
        if(this.state.isError) return <Error />
        return this.props.children
    }
}
