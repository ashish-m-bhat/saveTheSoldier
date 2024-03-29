// Utility function that makes fetch call to the given url using the given method
// Currently used for querying points, adding points.

export default function fetchAPI(postRequestFunction){

    const satisfyFetchRequest = (requestConfig) =>{
        fetch(requestConfig.url, {
            method:requestConfig.method?requestConfig.method:'GET',
            body:requestConfig.body?requestConfig.body:null,
            headers:requestConfig.headers?requestConfig.headers:{}
        })
        .then(res => res.json())
        .then(data => {
            postRequestFunction(data);
        });
    }
    return satisfyFetchRequest;
}