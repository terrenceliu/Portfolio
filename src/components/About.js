import React, { Component } from 'react';

import styles from './About.css';

class About extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={styles.container}>
                <a src="#"> Github </a> // <a src="#"> Instagram </a> // E-Mail: <a src="#"> terrenceliu@rice.edu </a>
            </div>
        )
    }
}

export default About;