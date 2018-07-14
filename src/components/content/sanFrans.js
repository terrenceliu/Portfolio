const imgContext = require.context('../../../assets/images/sf', false, /\.(png|jpe?g|svg)$/)

const sanFrans = imgContext.keys().map(imgContext).map((value) => {
    return {src: value};
})

console.log(sanFrans);

export default sanFrans;