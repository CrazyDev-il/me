import React from 'react';
import './header.scss';

export default class Header extends React.Component{
    scroll(ref) {
        ref.current.scrollIntoView({behavior: 'smooth'})
    }
    render() {
        return (
            <div className="main-header">
                <div className="header-container">
                    <div className="links-holder">
                        {/* <div><a href="#home"> Home </a></div> */}
                        <div><a href="#work" onClick={() => {this.scroll(this.props.scrollRef)}}> Work </a></div>
                        <div><a> Contact </a></div>
                    </div>
                </div>
            </div>
        )
    }
}
