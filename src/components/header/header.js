import React from 'react';
import spider from '../../images/spider.svg';
import './header.scss';

export default class Header extends React.Component{
    render() {
        return (
            <div className="main-header">
                <div className="header-container">
                </div>
                <div className="image-container">
                    <img src={spider} className="spider"/>
                </div>
            </div>
        )
    }
}
