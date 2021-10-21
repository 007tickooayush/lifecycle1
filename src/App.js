import React from 'react';
import './App.css';
import ErrorBoundary from './error-boundary.js';

class UseLifeCycle extends React.Component {
    
    state = {
        show: true,
        data: []
    };

    // constructor(props) {
    //     super(props);
    //     state = {
    //         show: true,
    //         data: []
    //     }
    //     console.log('constructor');
    // }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        if (props.show !== state.show) {
            return {
                show: props.show
            };
        }
        // return {
        //   show: true
        // };
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate');
        return true;
        // return nextState.show;
    }
    handleClick() {
        console.log('handleClick');
        this.setState({ show: !this.state.show });
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSanpshotBeforeUpdate');
        return 'returned object from getSnapshotBeforeUpdate';
    }
    componentDidUpdate(prevProps, prevState,snapshot) {
        console.log('componentDidUpdate');
        console.log(snapshot);
    }
    render() {
        console.log('render');
        return (
            <>
            <ErrorBoundary>
            
            <h1 onClick={() => this.handleClick()} >{this.state.show ? 'Show' : 'Hide'}</h1>
            </ErrorBoundary>
            </>
        );
    }

    componentDidMount() {
        console.log('componentDidMount');
        // axios.get('someURL').then(res => {
        //     const { data } = res;
        //     this.setState({ data });
        // });
        setTimeout(() => {
          this.setState({ show: true });
        }, 3000);
    }
}

export default UseLifeCycle;
