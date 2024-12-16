"use strict;"

console.log('!')



async function get() {
    const response = await
    fetch('http://localhost:8080')
    console.log(response)
    const promise = response.text();
    promise.then(data => console.log(data))
}