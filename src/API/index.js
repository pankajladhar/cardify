import URLs from './URLs';
import { HttpWrapper } from './HttpWrapper';
const getSavedCards = () => {
    return HttpWrapper.get(URLs.getSavedCards);
}

export { getSavedCards }