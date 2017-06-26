fetch('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest',{
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Api-Key': `0987b00e542141369049e647701b65d9`
    }
})
.then(function(response) {
    return response.json()
}).then(function(json) {
    console.log('parsed json: ', json)
}).catch(function(error) {
    console.log('parsing failed: ', error)
});


// https://gist.github.com/xgqfrms-GitHub/a3fcffb6d7923e2a7471041053f00162




















