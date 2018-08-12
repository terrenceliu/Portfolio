import React, { Component } from 'react';

import styles from './Homepage.css';

const imgContext = require.context('../../assets/images/homepage', false, /\.(png|jpe?g|svg)$/)

const images = imgContext.keys().map(imgContext).map((value) => {
    return {src: value};
});

const imgStyle = {
    height: '500px'
};

class Homepage extends Component {
    render() {
        return (
            <div
                className={styles.container}

            >
                    {
                        images &&
                        images.map(e => {
                            return (
                                <img 
                                    src={e.src}
                                    style={imgStyle} />
                            );
                        })
                    }
            </div>
        );
    }
}

export default Homepage;