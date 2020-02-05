import React from 'react';
import spiderweb from '../../images/spider.svg';
import './Container.scss';

export default class Container extends React.Component {
	constructor(props) {
        super(props);
        this.shiftX = 0;
        this.shiftY = 0;
        this.containerRef = React.createRef();
        this.state = {
            transformIcon: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)`
        }
    }
    componentDidMount() {
        // 
    }
    onMouseMove(e) {
        console.log(e);
        this.shiftX = e.clientX ? - e.clientX/25 : 0;
        this.shiftY = e.clientY ? - e.clientY/25 : 0;
        this.setState({transformIcon :`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${this.shiftX}, ${this.shiftY}, 0, 1)`});
    }
    render() {
        return (
            <div ref={this.containerRef} className="container" onMouseMove={this.onMouseMove.bind(this)}>
                <img className="moving-spider" style={{ transform: this.state.transformIcon }} src={spiderweb} /> 
            </div>
        );
    }
}
