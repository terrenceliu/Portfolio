const imgContext = require.context('../../../assets/images/town', false, /\.(png|jpe?g|svg)$/)

const img = imgContext.keys().map(imgContext).map((value) => {
    return {src: value};
});

console.log("town", img);

const town = {
    img: img,
    margin: 150
}

export default town;