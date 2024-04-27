import User from "./User";

const About = () => {
    return (
        <div >
            <h1 className="text-4xl">About us</h1>
            <h1 className="text-xl">Welcome to Madurai Food Shops</h1>
            <h2 className="text-xl">Owner Details</h2>
            <span className="text-xl"><User name={"vignesh"} location={"MDU"} /></span>
        </div>
    );
}

export default About;