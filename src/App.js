import React, { Component } from 'react';

import styles from './App.css';

// Router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Component
import NavBar from './components/NavBar';
import Content from './components/Content';
import About from './components/About';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <div className={styles.page}>
                    <div className={styles.nav}>
                        <div className={styles.navContainer}>
                            <NavBar />
                        </div>
                        <div className={styles.overlay}></div>
                    </div>
                    <div className={styles.content}>
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