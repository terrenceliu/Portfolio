import React, { Component } from 'react';

import styles from './Content.css';

class Content extends Component {

    constructor() {
        super()
        this.state = {
            images: undefined
        }
    }

    importAll = (r) => {
        return r.keys().map(r);
    }

    populateImage = () => {
        const images = this.importAll(require.context('../../assets/images/sf', false,/\.(png|jpe?g|svg)$/));
        console.log(images);
        this.setState({
            images: images
        })
    }
    
    /**
     * Life cycle hooks
     */

    componentDidMount() {
        this.populateImage();
    }

    render() {
        return (
            <div className={styles.scrollingWrapper}>
                <div id="content" className = "container">
                    <div id="img-container">
                        {
                            this.state.images &&
                            this.state.images.map((item) => {
                                return (
                                    <a href={item} className="thickbox" rel="gallery-plants">
                                        <img src={item} heihgt="350"/>
                                    </a>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;