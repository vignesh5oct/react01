import React from "react";
import UserContext from "../utils/UserContext";
//Class based Component
class User extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { name, location } = this.props;

        return (
            <div>
                <UserContext.Consumer>
                    {({ loggedInUser }) =>  <p>{loggedInUser}</p> }

                </UserContext.Consumer>
                <div className="user-card">
                    <h1>Name : {name}</h1>
                    <h1>Location : {location}</h1>
                </div>
            </div>

        )
    }
}

export default User;