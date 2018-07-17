const imgContext = require.context('../../../assets/images/north_west', false, /\.(png|jpe?g|svg)$/)

const herkimer = imgContext.keys().map(imgContext).map((value) => {
    return {src: value};
})

export default herkimer;