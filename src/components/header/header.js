import React from 'react';
import './header.scss';

export default class Header extends React.Component{
    render() {
        return (
            <div className="main-header">
                <div className="header-container">
                    <div className="links-holder">
                        <div><a> Home </a></div>
                        <div><a> Work </a></div>
                        <div><a> Contact </a></div>
                    </div>
                </div>
            </div>
        )
    }
}
