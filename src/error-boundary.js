import React from 'react';

class ErrorBoundary extends React.Component {
    // dont forget to declare state variable before use 
    state = {}

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            message:error.message
        };
    }

    componentDidCatch(error,info){
        console.log(error,info);
    }

    render(){
        if(this.state.hasError){
            return <h1>ERROR !! {this.state.error}</h1>
        }
        return this.props.children;
    }
}
export default ErrorBoundary;