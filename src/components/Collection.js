import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import HorizontalScroll from 'react-scroll-horizontal';

import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    contentContainer: {
        position: 'absolute',
        top: '400px',
        marginTop: `-275px`,
        overflowY: `hidden`,
        whiteSpace: `noWrap`
    },
    image: {
        height: `500px`,
        margin: `0px 100px 0px 100px`
    }
});

class Collection extends Component {
    constructore() {
        super();
    }

    render() {
        const parent = {width: `calc(100vw - 223px)`, height: `500px`};

        const { classes } = this.props;

        const { images } = this.props;

        return (
            <HorizontalScroll
                classname={classes.contentContainer}
                style={parent}
                reverseScroll={true}
            >
                {
                    images &&
                    images.map(e => (
                        <img src={e.src} />    
                    ))
                }
            </HorizontalScroll>
        )

    }
}

export default withStyles(styles)(Collection);