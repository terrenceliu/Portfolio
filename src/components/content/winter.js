const imgContext = require.context('../../../assets/images/winter', false, /\.(png|jpe?g|svg)$/)

const winter = imgContext.keys().map(imgContext).map((value) => {
    return {src: value};
})

export default winter;