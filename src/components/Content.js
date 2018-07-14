import React, { Component } from 'react';

import styles from './Content.css';

import Lightbox from 'react-images';

import HorizontalScroll from 'react-scroll-horizontal'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// Content
const sanFrans = require('./content/sanFrans').default;

const herkimer = require('./content/herkimer').default;

class Content extends Component {

    constructor() {
        super()
        // this.images = undefined;
        // this.populateImage();

        // console.log(this.images);

        this.contentMap = {
            "sanFrans": sanFrans,
            "herkimer": herkimer
        }
    }

    /**
     * Life cycle hooks
     */

    componentDidMount() {
        
    }

    render() {
        const parent = {width: `calc(100vw - 223px)`, height: `500px`};

        const { select } = this.props;
        
        const images = this.contentMap[select];

        console.log(images);
        
        return (
                <HorizontalScroll
                    className={styles.contentContainer}
                    style={parent}
                    reverseScroll={true}
                >
                    {
                        images &&
                        images.map(e => {
                            return (
                                <img src={e.src} />
                            );
                        })
                    }
                </HorizontalScroll>
        );
    }
}

export default Content;