import React, { Component } from 'react';

import styles from './About.css';

class About extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={styles.container}>
                Github // Instagram // E-Mail
            </div>
        )
    }
}

export default About;