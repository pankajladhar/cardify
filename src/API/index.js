// import data from './Data';
import { HttpWrapper } from './HttpWrapper';
const getSavedCards = () => {
    return HttpWrapper.get("https://cardify-server.herokuapp.com/api/v1/cards/fetch");
}

export { getSavedCards }