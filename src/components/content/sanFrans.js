const imgContext = require.context('../../../assets/images/sf', false, /\.(png|jpe?g|svg)$/)

const img = imgContext.keys().map(imgContext).map((value) => {
    return {src: value};
});

const sanFrans = {
    img: img,
    margin: 150
}

export default sanFrans;