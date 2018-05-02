const envType = process.env.NODE_ENV;
const baseURL = envType === "development" ? "http://localhost:5000" : "https://cardify-server.herokuapp.com";


const URLs = {
    "getSavedCards" : baseURL + "/api/v1/cards/fetch"
}

export default URLs;