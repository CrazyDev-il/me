import React from 'react';
import Home from '../home/Home';
import Work from '../work/Work';

export default class Container extends React.Component {
	constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <Home></Home>
                <Work></Work>
            </React.Fragment>
        );
    }
}
