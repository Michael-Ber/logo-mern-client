
import { Spinner } from "../components/spinner/Spinner";
import { Error } from "../components/error/Error";

export const setProcess = (status, content) => {
    switch(status) {
        case 'idle': return content;
        case 'loading': return <Spinner />;
        case 'error': return <Error />;
        case 'fulfilled': return content
        default: return content
    }
}