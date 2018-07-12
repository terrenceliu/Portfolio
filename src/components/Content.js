import React, { Component } from 'react';

import styles from './Content.css';

class Content extends Component {

    render() {
        return (
            <div className={styles.scrollingWrapper}>
                <div className={styles.card}><h2>Card</h2></div>
                <div className={styles.card}><h2>Card</h2></div>
                <div className={styles.card}><h2>Card</h2></div>
                <div className={styles.card}><h2>Card</h2></div>
                <div className={styles.card}><h2>Card</h2></div>
                <div className={styles.card}><h2>Card</h2></div>
                <div className={styles.card}><h2>Card</h2></div>
                <div className={styles.card}><h2>Card</h2></div>
                <div className={styles.card}><h2>Card</h2></div>
            </div>
        );
    }
}

export default Content;