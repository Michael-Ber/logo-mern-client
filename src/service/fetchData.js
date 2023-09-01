export const fetchData = async(url, {
    method ='GET', headers = {"Content-Type": "application/json"}, body = null
}) => {
    try {
        const resp = await fetch(url, {
            method, headers, body
        });
        return await resp.json();
    } catch (error) {
        console.log(error)
    }
}