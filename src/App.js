import React, { Component } from 'react';

import styles from './App.css';

// Router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Component
import NavBar from './components/NavBar';
import Content from './components/Content';
import About from './components/About';
import Homepage from './components/Homepage';

class App extends Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <Router>
                <div className={styles.page}>
                    <div className={styles.nav}>
                        <div className={styles.headerContainer}>
                            <p className={styles.header}>
                                <Link to="/">
                                    Terrence Liu
                                </Link>
                            </p>
                        </div>
                        <div className={styles.navContainer}>
                            <NavBar />
                        </div> 
                        <div className={styles.navOverlay}></div>
                    </div>
                    <div className={styles.content}>
                        <Route
                            exact
                            path="/"
                            component={() => 
                                <Homepage
                                />
                            }
                        />
                        <Route
                            path="/town"
                            component={() => 
                                <Content
                                    select="town"
                                />
                            }
                        />
                        <Route
                            path="/washington_st"
                            component={() => 
                                <Content
                                    select="washington"
                                />
                            }
                        />
                        <Route 
                            path="/sanFrans"
                            component={() => 
                                <Content
                                    select="sanFrans"
                                />}
                        />
                        <Route
                            path="/herkimer"
                            component={() => 
                                <Content
                                    select="herkimer"
                                />
                            }
                        />
                        <Route
                            path="/winter"
                            component={() => 
                                <Content
                                    select="winter"
                                />
                            }
                        />
                        <Route
                            path="/about"
                            component={() => 
                                <About />
                            }
                        />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;