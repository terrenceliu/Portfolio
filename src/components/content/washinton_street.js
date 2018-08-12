const imgContext = require.context('../../../assets/images/washington_street', false, /\.(png|jpe?g|svg)$/)

const img = imgContext.keys().map(imgContext).map((value) => {
    return {src: value};
});

const washington_street = {
    img: img,
    margin: 200
}

export default washington_street;