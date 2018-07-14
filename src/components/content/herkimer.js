const imgContext = require.context('../../../assets/images/herkimer_mollusk', false, /\.(png|jpe?g|svg)$/)

const herkimer = imgContext.keys().map(imgContext).map((value) => {
    return {src: value};
})

export default herkimer;