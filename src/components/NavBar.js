import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styles from './NavBar.css';

class NavBar extends Component {
    
    render() {
        return (
            <div className={styles.menu}>
                <ul className={styles.menuSection}>
                    <li className={styles.sectionTitle}> Collection </li>
                    
                    <li className={styles.sectionItem}>
                        <Link to="/sanFrans">
                            San Franscico
                        </Link>
                    </li>
                    
                    <li className={styles.sectionItem}>
                        <Link to="/herkimer">
                            Herkimer Mollusk
                        </Link>
                    </li>
                </ul>
                <ul className="menu-section">
                    <li className="section-title">
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar;