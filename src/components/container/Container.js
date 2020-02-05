import React from 'react';

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
            <div ref={this.containerRef} style={{ height: '100%', flex: 1}} onMouseMove={this.onMouseMove.bind(this)}>
                <img className="3dIcon" style={{ transform: this.state.transformIcon, position: 'relative', top: '200px'}} src="https://img.icons8.com/pastel-glyph/64/000000/blood-sample.png" /> 
            </div>
        );
    }
}
