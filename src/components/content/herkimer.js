const imgContext = require.context('../../../assets/images/north_west', false, /\.(png|jpe?g|svg)$/)

const img = imgContext.keys().map(imgContext).map((value) => {
    return {
        src: value
    };
});

const herkimer = {
    img: img,
    margin: 200
};

export default herkimer;