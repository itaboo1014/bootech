if (document.location.protocol==="http:") {
    location.replace('https://'+window.location.host+window.location.pathname);
}

const { createClient } = microcms;

// Initialize Client SDK.
const client = createClient({
    serviceDomain: "bootech",
    apiKey: "GaFOid11lJlYcjzqaZ3oOLmpSbzxm1q6lDjp"
});

client
    .get({
        endpoint: 'news',
        // queries: {
        //     limit: 100,
        //     offset: 2,
        //     orders: '-publishedAt',
        //     q: 'キーワード',
        //     filters:
        //     fields:
        //     ids:
        // }
    })
    .then((news) => {
        console.log(news);
    })
    .catch(error => console.error('Error:', error))
;

client
    .get({
        endpoint: 'blogs',
        queries: {
            limit: 100
        }
    })
    .then((blogs) => {
        console.log(blogs);
    })
    .catch(error => console.error('Error:', error))
;

client
    .get({
        endpoint: 'categories',
        queries: {
            limit: 100
        }
    })
    .then((categories) => {
        console.log(categories);
    })
    .catch(error => console.error('Error:', error))
;