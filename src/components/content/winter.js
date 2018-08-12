const imgContext = require.context('../../../assets/images/winter', false, /\.(png|jpe?g|svg)$/)

const img = imgContext.keys().map(imgContext).map((value) => {
    return {src: value};
});

const winter = {
    img: img,
    margin: 200
}

export default winter;