import { useRouteError } from "react-router-dom";
const Error = () => {
    const errorMessage = useRouteError();

    return (
        <div>
            <h1>OOPS !!!!!</h1>
            <h2>{errorMessage.status}</h2>
            <h2>{errorMessage.statusText}</h2>
        </div>
    );

}

export default Error;