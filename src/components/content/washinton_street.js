const imgContext = require.context('../../../assets/images/washington_street', false, /\.(png|jpe?g|svg)$/)

const washington_street = imgContext.keys().map(imgContext).map((value) => {
    return {src: value};
})

export default washington_street;