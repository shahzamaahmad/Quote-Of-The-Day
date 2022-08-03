// ...................................USING REQUEST MODULE...................................................

const request = require('request')
const url = 'https://api.quotable.io/quotes?'
const res = request({ url: url, json: true }, (e, res) => {
  return res
})
console.log(res._multipart.body);
setTimeout(() => {
  console.log('Byee');
}, 10000)

// ...................................USING ASYNC AWAIT...................................................

// const url = 'https://quotes.rest/qod?language=en'
// async function getQuote() {
//   const res = await fetch(url);
//   if (!res) {
//     throw new Error()
//   }
//   const data = await res.json();
//   return data;
// }
// getQuote().then(mydata => console.log(mydata))
//   .catch(error => console.log(error))

// ...................................USING FETCH API...................................................


//  let fetchRes = fetch(url)
// fetchRes.then((res) => res.json())
//   .then((data) => console.log(data.contents.quotes[0]))

// ...................................USING XMLHttpRequest...................................................

// const xhr = new XMLHttpRequest();
// xhr.open('GET', url);
// xhr.onload = function () {
//   const res = xhr.response;
//   const data = JSON.parse(res)
//   console.log(data);
// }
// xhr.send()


// ...................................USING https...................................................

// const https = require('https')
// const url = 'https://quotes.rest/qod?language=en'
// const req = https.request(url, (res) => {
//   let data = ""
//   res.on('data', (chunk) => {
//     data = data + chunk.toString()
//     console.log(data);
//   })
// })