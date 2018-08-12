import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const sanFrans = require('./content/sanFrans').default;
const herkimer = require('./content/herkimer').default;
const washington_street = require('./content/washinton_street').default;
const winter = require('./content/winter').default;

const route = ([
    {
        name: 'San Francisco',
        route: '/sanfrans',
        images: sanFrans,
        styles: {
            height: `500px`,
            margin: `0px 100px 0px 100px`
        }
    },
    {
        name: 'Herkimer Mollusk',
        route: `/herkimer`,
        images: herkimer,
        styles: {
            height: `500px`,
            margin: `0px 100px 0px 100px`
        }
    },
    {
        name: "Washington Street",
        route: '/washington_st',
        images: washington_street,
        styles: {
            height: `500px`,
            margin: `0px 100px 0px 100px`
        }
    },
    {
        name: 'Cang Shan',
        route: '/winter',
        images: winter,
        styles: {
            height: `500px`,
            margin: `0px 100px 0px 100px`
        }
    }        
]);

export default route;


