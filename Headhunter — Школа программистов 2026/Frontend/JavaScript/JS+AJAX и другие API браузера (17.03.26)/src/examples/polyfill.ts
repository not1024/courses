export const polyfillExample =
`function () {
    // здесь this — это будет массив, на котором вызван метод.
    const newArray = [...this]
    const reversedArray = newArray.reverse()
    console.log('reversed!')
    return reversedArray
}
`
