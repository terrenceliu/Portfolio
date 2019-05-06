import React, { Component } from 'react';

import styles from './About.css';

class About extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={styles.container}>
                <a href="https://github.com/terrenceliu"> Github </a> // <a href="https://www.instagram.com/teryncl/"> Instagram </a> // E-Mail: <a src="#"> terrenceliu@rice.edu </a>
            </div>
        )
    }
}

export default About;