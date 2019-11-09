import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: "Bearer F-HleWZDqgZsug3bQHO72v8u5MowKRd21yKmBnVhnCHFfH50uuQelnoDGUPH2xXUzbDFgVAVtVygrryPKr-EsI5HpYrSWhyw6iHaO21ywg1oHcvxGCj60ZxdT6HFXXYx"
    }
})