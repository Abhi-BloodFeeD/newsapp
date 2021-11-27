// const API_KEY = '26c1a1b908f5404dadcd1c392cd504dc';
// const API_KEY = 'b691e969980b46eb85d3e4f470d58148';
// const API_KEY = 'f48e706499fa4ff1943e7b6554eaa808';
const API_KEY = 'de21cf28bd934fa0a3f1c8fdb6aa9d91';
// const baseURL = 'https://newsapi.org/v2';
const country = 'in';
const requests = {
    fetchTopNews:`/top-headlines?country=${country}&apiKey=${API_KEY}`,
}
export default requests;


