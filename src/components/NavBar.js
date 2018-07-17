import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import styles from './NavBar.css';

class NavBar extends Component {
    
    constructor() {
        super();
        this.state = {
            openProjects: false
        }
    }

    expandProjects = () => {
        this.setState(prevState => ({
            openProjects: !prevState.openProjects
        }));
    }

    render() {

        console.log(this.props.location);
        
        return (
            <div className={styles.menu}>
                <div className={styles.menuSection}>
                    <ul>
                        <li className={styles.sectionTitle}>
                            <NavLink
                                to="#"
                                activeClassName={styles.selectedTitle} 
                                onClick={this.expandProjects}>
                                Collection
                            </NavLink>
                        </li>

                        {
                            this.state.openProjects &&
                            <div>
                                <li className={styles.sectionItem}>
                                    <NavLink 
                                        to="/washington_st"
                                        activeClassName={styles.selectedItem}
                                        >
                                        Washington Street
                                    </NavLink>
                                </li>
                                
                                <li className={styles.sectionItem}>
                                    <NavLink 
                                        to="/sanFrans"
                                        activeClassName={styles.selectedItem}
                                        >
                                        San Franscico
                                    </NavLink>
                                </li>
                                
                                <li className={styles.sectionItem}>
                                    <NavLink 
                                        to="/herkimer"
                                        activeClassName={styles.selectedItem}
                                        >
                                        Herkimer Mollusk
                                    </NavLink>
                                </li>

                                <li className={styles.sectionItem}>
                                    <NavLink 
                                        to="/winter"
                                        activeClassName={styles.selectedItem}
                                        >
                                        Cang Shan
                                    </NavLink>
                                </li>
                            </div>
                        }
                            
                    </ul>
                    <ul>
                        <li className={styles.navItem}>
                            <Link to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar;