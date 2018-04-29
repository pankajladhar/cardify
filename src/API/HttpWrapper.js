const HttpWrapper = {
    "get": (url) => {
        return fetch(url, {
            method: "GET"
        }).then(response => response.json())
    }
}

export { HttpWrapper };