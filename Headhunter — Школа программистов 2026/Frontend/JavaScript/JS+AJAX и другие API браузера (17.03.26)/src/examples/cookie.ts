export const exampleServerSentCookie = `
fetch('/users')
`

export const exampleCookie =
`console.log('cookies before update', document.cookie)
document.cookie = 'lecture=ajax'
console.log('cookies after update', document.cookie)

fetch('/users')
`
