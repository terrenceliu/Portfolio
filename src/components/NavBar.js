import React, { Component } from 'react';

import styles from './NavBar.css';

class NavBar extends Component {
    
    render() {
        return (
            <div className={styles.menu}>
                <p id = "header">  </p>
                <ul className = "menu-section">
                    <li><a href="index.html"> 1 </a></li>
                    
                    <li><a href="sf.html"> 2 </a></li>
                    
                    <li><a href="sh.html"> 3 </a></li>
                
                    <li><a href="nk.html"> 4 </a></li>
                
                    <li><a href="uttar_pradesh.html"> 5 </a></li>
                
                    <li><a href="herkimer_mollusk.html"> 6 </a></li>
                
                    <li><a href="901.html"> 7 </a></li>
                </ul>
                <ul className="menu-section">
                    <li className="section-title"> About </li>
                </ul>
            </div>
        )
    }
}

export default NavBar;